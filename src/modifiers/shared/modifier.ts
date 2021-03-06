// =============================================================================================================================
// SRC - MODIFIERS - SHARED - MODIFIER
// =============================================================================================================================
import { CheckResult } from "@checkers/index";

export type Modifier = <T>(checkResult: CheckResult<T>) => CheckResult<T>;
