// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, Validator } from "./shared";

import { length } from "./length";
import { nullary } from "./nullary";

export const builtInRules = {
  length,
  nullary,
};
