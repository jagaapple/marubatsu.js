// =============================================================================================================================
// SRC - OPERATORS - SHARED - OPERATOR
// =============================================================================================================================
export type ValidationExecutor = ((value: any) => boolean);
export interface Validators {
  type: ValidationExecutor;
  [name: string]: ValidationExecutor;
}
export type Operator = ((...args: any) => Validators);
