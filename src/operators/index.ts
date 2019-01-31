// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, ValidationExecutor, Validators } from "./shared";

import { createBlankOperator } from "./blank";
import { createEmptyOperator } from "./empty";
import { createNullaryOperator } from "./nullary";
import { createNumberOperator } from "./number";
import { createPresentOperator } from "./present";
import { createStringOperator } from "./string";

export const builtInOperatorCreators = {
  blank: createBlankOperator(),
  empty: createEmptyOperator(),
  nullary: createNullaryOperator(),
  number: createNumberOperator(),
  present: createPresentOperator(),
  string: createStringOperator(),
};
