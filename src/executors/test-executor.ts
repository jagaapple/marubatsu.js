// =============================================================================================================================
// SRC - EXECUTORS - TEST EXECUTOR
// =============================================================================================================================
import { ValidationExecutor, Validators } from "@operators/index";

export const test = (value: any, validators: Validators) =>
  Object.values(validators).every((executor: ValidationExecutor) => executor(value).isPassed);
