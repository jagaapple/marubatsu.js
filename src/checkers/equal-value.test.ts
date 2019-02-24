// =============================================================================================================================
// SRC - CHECKERS - EQUAL VALUE TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isEqualToValue } from "./equal-value";

describe("[ Equal Value Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is equal to an expected value,", function() {
      it("should be true", function() {
        allTypeValues.forEach((value: any) => {
          expect(isEqualToValue(value, value).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is not equal to an expected value,", function() {
      it("should be false", function() {
        allTypeValues.forEach((value: any) => {
          expect(isEqualToValue(value, ["dummy", "dummy"]).isPassed).to.be.false;
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected value", function() {
      allTypeValues.forEach((expectedValue: any) => {
        expect(isEqualToValue("abc", expectedValue).expected).to.eq(expectedValue);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isEqualToValue(value, "abc").actual).to.eq(value);
      });
    });
  });
});
