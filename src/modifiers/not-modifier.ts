// =============================================================================================================================
// SRC - MODIFIERS - NOT MODIFIER
// =============================================================================================================================
import { CheckResult } from "@checkers/index";
import { Modifier } from "./shared";

export const not: Modifier = <T>(checkResult: CheckResult<T>) => ({
  ...checkResult,
  modifierType: "not",
  isPassed: !checkResult.isPassed,
});
