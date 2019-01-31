// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { builtInOperators, Operator, ValidationExecutor, Validators } from "./operators";

interface ValidatorsByOperatorName {
  [operatorName: string]: Validators;
}

class Executor {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------------------------------------------------------
  // Private Variables
  private readonly validatorsByOperatorName: ValidatorsByOperatorName = {};

  // ---------------------------------------------------------------------------------------------------------------------------
  // Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  // Public Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  test<T>(value: T) {
    return Object.values(this.validatorsByOperatorName).every((validator: Validators) => {
      return Object.values(validator).every((executor: ValidationExecutor) => executor(value));
    });
  }

  // Protected Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  protected registerValidator(operatorName: string, validator: Validators) {
    const prevValidator = this.validatorsByOperatorName[operatorName];

    this.validatorsByOperatorName[operatorName] = {
      ...prevValidator,
      ...validator,
    };
  }
}

type ExecutorWithBuiltInRules = Executor &
  {
    [K in keyof typeof builtInOperators]: (...parameters: Parameters<(typeof builtInOperators)[K]>) => ExecutorWithBuiltInRules
  };
const createProxyExecutor = (executor: Executor) =>
  new Proxy(executor, {
    get: (target: Executor, property: PropertyKey, receiver: any) => {
      if (Reflect.has(target, property)) return Reflect.get(target, property);

      // Call built-in operators.
      if (Reflect.has(builtInOperators, property)) {
        const operator = Reflect.get(builtInOperators, property) as Operator;

        return (...args: any) => {
          const validator = operator(...args);

          // tslint:disable-next-line:no-string-literal
          target["registerValidator"](property.toString(), validator);

          return receiver;
        };
      }

      return;
    },
  }) as ExecutorWithBuiltInRules;

const marubatsu = () => createProxyExecutor(new Executor());

export default marubatsu;
