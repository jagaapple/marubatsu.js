// =============================================================================================================================
// SRC - CHECKERS - SHARED - CHECKER
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";

export interface CheckResult<Expected, Actual = any> {
  isPassed: boolean;
  modifierType?: ModifierType;
  expected: Expected;
  actual: Actual;
}
