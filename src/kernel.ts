// =============================================================================================================================
// SRC - KERNEL
// =============================================================================================================================
import { builtInOperatorCreators, builtInOperatorMessageCreators, Validators } from "@operators/index";
import { test as testExecutor, validate as validateExecutor, ValidationResult } from "@executors/index";
import { Modifier } from "@modifiers/index";

interface ValidatorsByOperatorName {
  [operatorName: string]: Validators;
}

export class Kernel {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------------------------------------------------------
  // Private Variables
  private readonly validatorsByOperatorName: ValidatorsByOperatorName = {};
  private readonly modifiersByOperatorIndex: Modifier[][] = [];

  // ---------------------------------------------------------------------------------------------------------------------------
  // Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  // Public Functions
  // ---------------------------------------------------------------------------------------------------------------------------
  test<T>(value: T) {
    return Object.values(this.validatorsByOperatorName).every((validators: Validators, index: number) =>
      testExecutor(value, validators, this.modifiersByOperatorIndex[index]),
    );
  }

  validate<T>(value: T, subject?: string): ValidationResult {
    let finalResult: ValidationResult = { isPassed: true };

    Object.entries(this.validatorsByOperatorName).every((operatorNameAndValidators: [string, Validators], index: number) => {
      const operatorName = operatorNameAndValidators[0];
      const validators = operatorNameAndValidators[1];

      const messageCreators = builtInOperatorMessageCreators[operatorName as keyof typeof builtInOperatorCreators];
      const errorMessageCreators = messageCreators && messageCreators.error;

      const result = validateExecutor(
        value,
        validators,
        this.modifiersByOperatorIndex[index],
        operatorName,
        errorMessageCreators,
        subject,
      );

      if (!result.isPassed) {
        finalResult = result;
      }

      return result.isPassed;
    });

    return finalResult;
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

  protected registerModifier(modifier: Modifier) {
    const nextOperatorIndex = Object.values(this.validatorsByOperatorName).length;

    this.modifiersByOperatorIndex[nextOperatorIndex] = this.modifiersByOperatorIndex[nextOperatorIndex] || [];
    this.modifiersByOperatorIndex[nextOperatorIndex].push(modifier);
  }
}
