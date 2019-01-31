// =============================================================================================================================
// SRC - OPERATORS - SHARED - OPERATOR
// =============================================================================================================================
export interface ValidationExecutor {
  expected?: any;
  executor: ((value: any) => boolean);
}
export interface Validators {
  type: ValidationExecutor;
  [name: string]: ValidationExecutor;
}

export interface Operator {
  name: string;
  createValidators: ((...args: any) => Validators);
}
