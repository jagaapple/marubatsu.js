// =============================================================================================================================
// SRC - CHECKERS - PRESENT CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";
import { nullary } from "./nullary";
import { isEmpty } from "./empty";

type Result = CheckResult<"present">;
export const isPresent = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "present",
    actual: value,
  };

  let trimmedValue = value;
  switch (typeof value) {
    case "string":
      trimmedValue = value.trim();

      break;
    case "boolean":
      result.isPassed = value;

      return result;
    default:
  }

  result.isPassed = !(nullary(trimmedValue).isPassed || isEmpty(trimmedValue).isPassed);

  return result;
};
