// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, ValidationExecutor, Validators } from "./shared";

import { createBlankOperator } from "./blank-operator";
import { createEmptyOperator } from "./empty-operator";
import { createNullaryOperator } from "./nullary-operator";
import { createNumberOperator } from "./number-operator";
import { createPresentOperator } from "./present-operator";
import { createStringOperator } from "./string-operator";

export const builtInOperatorCreators = {
  blank: createBlankOperator(),
  empty: createEmptyOperator(),
  nullary: createNullaryOperator(),
  number: createNumberOperator(),
  present: createPresentOperator(),
  string: createStringOperator(),
};
