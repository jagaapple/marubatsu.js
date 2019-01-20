// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, ValidationExecutor, Validator } from "./shared";

import { blank } from "./blank";
import { empty } from "./empty";
import { nullary } from "./nullary";
import { present } from "./present";
import { string } from "./string";

export const builtInOperators = {
  blank,
  empty,
  nullary,
  present,
  string,
};
