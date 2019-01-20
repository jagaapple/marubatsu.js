// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, Validator } from "./shared";

import { empty } from "./empty";
import { length } from "./length";
import { nullary } from "./nullary";

export const builtInRules = {
  empty,
  length,
  nullary,
};
