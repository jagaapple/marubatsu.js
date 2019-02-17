// =============================================================================================================================
// SRC - MODIFIERS - NOT MODIFIER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { CheckResult } from "@checkers/index";
import { not } from "./not-modifier";

describe("[ Not Modifier ]", function() {
  it('should invert "isPassed" boolean value and return it', function() {
    const passedResult: CheckResult<number> = { isPassed: true, expected: 1, actual: 1 };
    const newPassedResult = not(passedResult);
    expect(newPassedResult.isPassed).to.be.false;

    const failedResult: CheckResult<number> = { isPassed: false, expected: 1, actual: 1 };
    const newFailedResult = not(failedResult);
    expect(newFailedResult.isPassed).to.be.true;
  });

  it('should set "modifierType" as "not" and return it', function() {
    const notSetModifierTypeResult: CheckResult<number> = { isPassed: true, expected: 1, actual: 1 };
    const newPassedResult = not(notSetModifierTypeResult);
    expect(newPassedResult.modifierType).to.eq("not");

    const setModifierTypeResult: CheckResult<number> = {
      isPassed: false,
      modifierType: "dummy" as any,
      expected: 1,
      actual: 1,
    };
    const newFailedResult = not(setModifierTypeResult);
    expect(newFailedResult.modifierType).to.eq("not");
  });

  it('should not change "expected" value and return it', function() {
    const result1: CheckResult<number> = { isPassed: true, expected: 1, actual: 1 };
    const newResult1 = not(result1);
    expect(newResult1.expected).to.eq(result1.expected);

    const result2: CheckResult<number> = { isPassed: true, expected: 2, actual: 2 };
    const newResult2 = not(result2);
    expect(newResult2.expected).to.eq(result2.expected);

    const result3: CheckResult<number> = { isPassed: true, expected: 3, actual: 3 };
    const newResult3 = not(result3);
    expect(newResult3.expected).to.eq(result3.expected);
  });

  it('should not change "actual" value and return it', function() {
    const result1: CheckResult<number> = { isPassed: true, expected: 1, actual: 1 };
    const newResult1 = not(result1);
    expect(newResult1.actual).to.eq(result1.actual);

    const result2: CheckResult<number> = { isPassed: true, expected: 2, actual: 2 };
    const newResult2 = not(result2);
    expect(newResult2.actual).to.eq(result2.actual);

    const result3: CheckResult<number> = { isPassed: true, expected: 3, actual: 3 };
    const newResult3 = not(result3);
    expect(newResult3.actual).to.eq(result3.actual);
  });
});
