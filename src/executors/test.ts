// =============================================================================================================================
// SRC - EXECUTORS - TEST
// =============================================================================================================================
import { ValidationExecutor, Validators } from "@operators/index";

export const test = (validators: Validators, value: any) =>
  Object.values(validators).every((executor: ValidationExecutor) => executor(value));
