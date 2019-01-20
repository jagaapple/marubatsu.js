// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, Validator } from "./shared";

import { blank } from "./blank";
import { empty } from "./empty";
import { endsWith } from "./ends-with";
import { includes } from "./includes";
import { length } from "./length";
import { nullary } from "./nullary";
import { pattern } from "./pattern";
import { present } from "./present";
import { startsWith } from "./starts-with";

export const builtInRules = {
  blank,
  empty,
  endsWith,
  includes,
  length,
  nullary,
  pattern,
  present,
  startsWith,
};
