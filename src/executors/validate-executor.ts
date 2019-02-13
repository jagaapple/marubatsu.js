// =============================================================================================================================
// SRC - EXECUTORS - VALIDATE EXECUTOR
// =============================================================================================================================
import { ErrorMessageCreator, ErrorMessageCreators, ValidationExecutor, Validators } from "@operators/index";
import { ValidationError } from "./shared";

export interface ValidationResult {
  isPassed: boolean;
  error?: ValidationError;
}

const unsetDefaultErrorMessage = "The error message is not set yet.";
export const validate = (
  operatorName: string,
  validators: Validators,
  value: any,
  errorMessageCreators: ErrorMessageCreators<any> = {},
  subject: string = "value",
): ValidationResult => {
  const result: ValidationResult = { isPassed: false };

  const isPassed = Object.entries(validators).every((ruleNameAndValidationExecutor: [string, ValidationExecutor]) => {
    const ruleName = ruleNameAndValidationExecutor[0];
    const executor = ruleNameAndValidationExecutor[1];

    const executedResult = executor(value);
    if (!executedResult.isPassed) {
      const errorMessageCreator: ErrorMessageCreator<any> | undefined = errorMessageCreators[ruleName];
      let errorMessage = errorMessageCreator && errorMessageCreator(subject, executedResult.actual, executedResult.expected);
      errorMessage = errorMessage || unsetDefaultErrorMessage;

      result.error = {
        ruleName: `${operatorName}-${ruleName}`,
        expected: executedResult.expected,
        message: errorMessage,
      };
    }

    return executedResult.isPassed;
  });

  result.isPassed = isPassed;

  return result;
};
