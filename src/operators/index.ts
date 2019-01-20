// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, Validator } from "./shared";

import { blank } from "./blank";
import { empty } from "./empty";
import { length } from "./length";
import { nullary } from "./nullary";
import { present } from "./present";

export const builtInRules = {
  blank,
  empty,
  length,
  nullary,
  present,
};
