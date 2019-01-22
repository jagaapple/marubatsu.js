// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, ValidationExecutor, Validator } from "./shared";

import { createBlankOperator } from "./blank";
import { createEmptyOperator } from "./empty";
import { createNullaryOperator } from "./nullary";
import { createPresentOperator } from "./present";
import { createStringOperator } from "./string";

export const builtInOperators = {
  blank: createBlankOperator(),
  empty: createEmptyOperator(),
  nullary: createNullaryOperator(),
  present: createPresentOperator(),
  string: createStringOperator(),
};
