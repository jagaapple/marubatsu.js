// =============================================================================================================================
// SRC - KERNEL
// =============================================================================================================================
import { builtInOperatorCreators, builtInOperatorMessageCreators, Validators } from "@operators/index";
import { test as testExecutor, validate as validateExecutor, ValidationResult } from "@executors/index";

interface ValidatorsByOperatorName {
  [operatorName: string]: Validators;
}

export class Kernel {
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
    return Object.values(this.validatorsByOperatorName).every((validators: Validators) => testExecutor(value, validators));
  }

  validate<T>(value: T): ValidationResult {
    let result: ValidationResult = { isPassed: true };

    Object.entries(this.validatorsByOperatorName).every((operatorNameAndValidators: [string, Validators]) => {
      const operatorName = operatorNameAndValidators[0];
      const validators = operatorNameAndValidators[1];

      const messageCreators = builtInOperatorMessageCreators[operatorName as keyof typeof builtInOperatorCreators];
      const errorMessageCreators = messageCreators && messageCreators.error;

      const validatedResult = validateExecutor(value, operatorName, validators, errorMessageCreators);
      if (!validatedResult.isPassed) {
        result = validatedResult;
      }

      return validatedResult.isPassed;
    });

    return result;
  }

  // Protected Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  // Uses protected access modifier to be private API, disable code completion, and avoid unused errors.
  protected registerOperator(operatorName: string, validators: Validators) {
    const prevValidatorsByOperatorName = this.validatorsByOperatorName[operatorName];

    this.validatorsByOperatorName[operatorName] = {
      ...prevValidatorsByOperatorName,
      ...validators,
    };
  }
}
