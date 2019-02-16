// =============================================================================================================================
// SRC - EXECUTORS - VALIDATE EXECUTOR
// =============================================================================================================================
import { CheckResult } from "@checkers/index";
import { Modifier } from "@modifiers/index";
import { ErrorMessageCreator, ErrorMessageCreators, ValidationExecutor, Validators } from "@operators/index";
import { ValidationError } from "./shared";

export interface ValidationResult {
  isPassed: boolean;
  error?: ValidationError;
}

const unsetDefaultErrorMessage = "The error message is not set yet.";
export const validate = (
  value: any,
  validators: Validators,
  modifiers: Modifier[] = [],
  operatorName: string,
  errorMessageCreators: ErrorMessageCreators<any> = {},
  subject: string = "value",
): ValidationResult => {
  const finalResult: ValidationResult = { isPassed: true };

  Object.entries(validators).every((ruleNameAndValidationExecutor: [string, ValidationExecutor]) => {
    const ruleName = ruleNameAndValidationExecutor[0];
    const executor = ruleNameAndValidationExecutor[1];

    const initialResult = executor(value);
    const result = modifiers.reduceRight(
      (prevCheckResult: CheckResult<any>, modifier: Modifier) => modifier(prevCheckResult),
      initialResult,
    );

    if (!result.isPassed) {
      const errorMessageCreator: ErrorMessageCreator<any> | undefined = errorMessageCreators[ruleName];
      let errorMessage =
        errorMessageCreator && errorMessageCreator(subject, result.actual, result.expected, result.modifierType);
      errorMessage = errorMessage || unsetDefaultErrorMessage;

      finalResult.isPassed = result.isPassed;
      finalResult.error = {
        ruleName: `${operatorName}-${ruleName}`,
        expected: result.expected,
        actual: result.actual,
        message: errorMessage,
      };
    }

    return result.isPassed;
  });

  return finalResult;
};
