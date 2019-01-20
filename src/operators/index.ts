// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { Operator, Validator } from "./shared";

import { blank } from "./blank";
import { empty } from "./empty";
import { endsWith } from "./ends-with";
import { length } from "./length";
import { nullary } from "./nullary";
import { pattern } from "./pattern";
import { present } from "./present";
import { startsWith } from "./starts-with";

export const builtInRules = {
  blank,
  empty,
  endsWith,
  length,
  nullary,
  pattern,
  present,
  startsWith,
};
