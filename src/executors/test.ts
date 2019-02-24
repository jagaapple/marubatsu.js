// =============================================================================================================================
// SRC - EXECUTORS - TEST
// =============================================================================================================================
import { CheckResult } from "@checkers/index";
import { Modifier } from "@modifiers/index";
import { ValidationExecutor, Validators } from "@operators/index";

export const test = (value: any, validators: Validators, modifiers: Modifier[] = []) =>
  Object.values(validators).every((executor: ValidationExecutor) => {
    const initialResult = executor(value);
    const result = modifiers.reduceRight(
      (prevCheckResult: CheckResult<any>, modifier: Modifier) => modifier(prevCheckResult),
      initialResult,
    );

    return result.isPassed;
  });
