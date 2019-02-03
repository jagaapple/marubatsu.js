// =============================================================================================================================
// SRC - OPERATORS - SHARED - OPERATOR
// =============================================================================================================================
import { CheckResult } from "@checkers/index";

export type ValidationExecutor = ((value: any) => CheckResult<any>);
export interface Validators {
  [name: string]: ValidationExecutor;
}

export interface Operator {
  name: string;
  createValidators: ((...args: any) => Validators);
}
