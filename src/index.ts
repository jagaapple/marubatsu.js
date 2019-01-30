// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { builtInOperators, Operator, ValidationExecutor, Validator } from "./operators";

interface ValidatorsByOperatorName {
  [operatorName: string]: Validator;
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
    return Object.values(this.validatorsByOperatorName).every((validator: Validator) => {
      return Object.values(validator).every((executor: ValidationExecutor) => executor(value));
    });
  }

  // Protected Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  protected registerValidator(operatorName: string, validator: Validator) {
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

// marubatsu()
//   .number({ value: 123 })
//   .number({ value: [5, 10] })
//   .number({ maximumValue: 10 })
//   .number({ minimumValue: 5 })
//   .number({ integer: true })
//   .number({ float: true })
//   .number({ positive: true })
//   .number({ negative: true })
//   .number({ digits: 3 })
//   .number({ digits: [3, 5] })
//   .number({ integerDigits: 3 })
//   .number({ integerDigits: [3, 5] })
//   .number({ decimalDigits: 3 })
//   .number({ decimalDigits: [3, 5] });

export default marubatsu;
