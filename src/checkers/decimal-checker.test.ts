// =============================================================================================================================
// SRC - CHECKERS - DECIMAL CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isDecimal } from "./decimal-checker";

describe("[ Decimal Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isDecimal(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isDecimal(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("integer number,", function() {
        it("should be false", function() {
          expect(isDecimal(0).isPassed).to.be.false;
          expect(isDecimal(+0).isPassed).to.be.false;
          expect(isDecimal(-0).isPassed).to.be.false;
          expect(isDecimal(123).isPassed).to.be.false;
          expect(isDecimal(-123).isPassed).to.be.false;
        });
      });

      context("not integer number,", function() {
        it("should be true", function() {
          expect(isDecimal(0.1).isPassed).to.be.true;
          expect(isDecimal(0.01).isPassed).to.be.true;
          expect(isDecimal(123.123).isPassed).to.be.true;
          expect(isDecimal(-0.1).isPassed).to.be.true;
          expect(isDecimal(-0.01).isPassed).to.be.true;
          expect(isDecimal(-123.123).isPassed).to.be.true;
        });
      });

      context("infinity,", function() {
        it("should be false", function() {
          expect(isDecimal(Number.POSITIVE_INFINITY).isPassed).to.be.false;
          expect(isDecimal(Number.NEGATIVE_INFINITY).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isDecimal("0").isPassed).to.be.false;
        expect(isDecimal("0.1").isPassed).to.be.false;
        expect(isDecimal("123").isPassed).to.be.false;
        expect(isDecimal("123.123").isPassed).to.be.false;
        expect(isDecimal("-0.1").isPassed).to.be.false;
        expect(isDecimal("-123").isPassed).to.be.false;
        expect(isDecimal("-123.123").isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isDecimal(true).isPassed).to.be.false;
        expect(isDecimal(false).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isDecimal([]).isPassed).to.be.false;
        expect(isDecimal([1]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isDecimal({}).isPassed).to.be.false;
        expect(isDecimal({ a: 1 }).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isDecimal(() => 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isDecimal(value).actual).to.eq(value);
      });
    });
  });
});
