// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { builtInRules, Operator, Validator } from "./operators";

class Executor {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------------------------------------------------------
  // Private Variables
  private readonly validators: Validator[] = [];

  // ---------------------------------------------------------------------------------------------------------------------------
  // Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  // Public Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  test<T>(value: T) {
    return this.validators.every((validator: Validator) => validator(value));
  }

  // Protected Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  protected appendValidator(validator: Validator) {
    this.validators.push(validator);
  }
}

type ExecutorWithBuiltInRules = Executor &
  { [K in keyof typeof builtInRules]: (...parameters: Parameters<(typeof builtInRules)[K]>) => ExecutorWithBuiltInRules };
const createProxyExecutor = (executor: Executor) =>
  new Proxy(executor, {
    get: (target: Executor, property: PropertyKey, receiver: any) => {
      if (Reflect.has(target, property)) return Reflect.get(target, property);

      // Call built-in operators.
      if (Reflect.has(builtInRules, property)) {
        const operator = Reflect.get(builtInRules, property) as Operator;

        return (...args: any) => {
          const validator = operator(...args);

          // tslint:disable-next-line:no-string-literal
          target["appendValidator"](validator);

          return receiver;
        };
      }

      return receiver;
    },
  }) as ExecutorWithBuiltInRules;

const marubatsu = () => createProxyExecutor(new Executor());

export default marubatsu;
