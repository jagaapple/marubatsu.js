// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { builtInOperatorCreators, Operator, Validators } from "./operators";
import { test, validate } from "@executors/index";

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
    return Object.values(this.validatorsByOperatorName).some((validators: Validators) => test(validators, value));
  }

  validate<T>(value: T) {
    return Object.entries(this.validatorsByOperatorName).map((operatorNameAndValidators: [string, Validators]) => {
      const operatorName = operatorNameAndValidators[0];
      const validators = operatorNameAndValidators[1];

      return validate(operatorName, validators, value);
    });
  }

  // Protected Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  protected registerOperator(operatorName: string, validators: Validators) {
    const prevValidatorsByOperatorName = this.validatorsByOperatorName[operatorName];

    this.validatorsByOperatorName[operatorName] = {
      ...prevValidatorsByOperatorName,
      ...validators,
    };
  }
}

type ExecutorWithBuiltInRules = Executor &
  {
    [K in keyof typeof builtInOperatorCreators]: (
      ...parameters: Parameters<(typeof builtInOperatorCreators)[K]["createValidators"]> // tslint:disable-line:trailing-comma
    ) => ExecutorWithBuiltInRules
  };
const createProxyExecutor = (executor: Executor) =>
  new Proxy(executor, {
    get: (target: Executor, property: PropertyKey, receiver: any) => {
      if (Reflect.has(target, property)) return Reflect.get(target, property);

      // Call built-in operators.
      if (Reflect.has(builtInOperatorCreators, property)) {
        const operator = Reflect.get(builtInOperatorCreators, property) as Operator;

        return (...args: any) => {
          const validators = operator.createValidators(...args);

          // tslint:disable-next-line:no-string-literal
          target["registerOperator"](operator.name, validators);

          return receiver;
        };
      }

      return;
    },
  }) as ExecutorWithBuiltInRules;

const marubatsu = () => createProxyExecutor(new Executor());

export default marubatsu;
