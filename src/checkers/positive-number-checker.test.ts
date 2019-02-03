// =============================================================================================================================
// SRC - CHECKERS - POSITIVE NUMBER CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isPositiveNumber } from "./positive-number-checker";

describe("[ Positive Number Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isPositiveNumber(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isPositiveNumber(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be false", function() {
          expect(isPositiveNumber(0).isPassed).to.be.false;
          expect(isPositiveNumber(+0).isPassed).to.be.false;
          expect(isPositiveNumber(-0).isPassed).to.be.false;
        });
      });

      context("positive number,", function() {
        it("should be true", function() {
          expect(isPositiveNumber(123).isPassed).to.be.true;
          expect(isPositiveNumber(0.1).isPassed).to.be.true;
          expect(isPositiveNumber(0.01).isPassed).to.be.true;
          expect(isPositiveNumber(123.123).isPassed).to.be.true;
        });
      });

      context("negative number,", function() {
        it("should be false", function() {
          expect(isPositiveNumber(-123).isPassed).to.be.false;
          expect(isPositiveNumber(-0.1).isPassed).to.be.false;
          expect(isPositiveNumber(-0.01).isPassed).to.be.false;
          expect(isPositiveNumber(-123.123).isPassed).to.be.false;
        });
      });

      context("positive infinity,", function() {
        it("should be true", function() {
          expect(isPositiveNumber(Number.POSITIVE_INFINITY).isPassed).to.be.true;
        });
      });

      context("negative infinity,", function() {
        it("should be false", function() {
          expect(isPositiveNumber(Number.NEGATIVE_INFINITY).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isPositiveNumber("0").isPassed).to.be.false;
        expect(isPositiveNumber("0.1").isPassed).to.be.false;
        expect(isPositiveNumber("123").isPassed).to.be.false;
        expect(isPositiveNumber("123.123").isPassed).to.be.false;
        expect(isPositiveNumber("-0.1").isPassed).to.be.false;
        expect(isPositiveNumber("-123").isPassed).to.be.false;
        expect(isPositiveNumber("-123.123").isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isPositiveNumber(true).isPassed).to.be.false;
        expect(isPositiveNumber(false).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isPositiveNumber([]).isPassed).to.be.false;
        expect(isPositiveNumber([1]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isPositiveNumber({}).isPassed).to.be.false;
        expect(isPositiveNumber({ a: 1 }).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isPositiveNumber(() => 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isPositiveNumber(value).actual).to.eq(value);
      });
    });
  });
});
