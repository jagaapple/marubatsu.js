// =============================================================================================================================
// SRC - CHECKERS - NEGATIVE NUMBER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isNegativeNumber } from "./negative-number";

describe("[ Negative Number Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isNegativeNumber(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isNegativeNumber(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be false", function() {
          expect(isNegativeNumber(0).isPassed).to.be.false;
          expect(isNegativeNumber(+0).isPassed).to.be.false;
          expect(isNegativeNumber(-0).isPassed).to.be.false;
        });
      });

      context("positive number,", function() {
        it("should be false", function() {
          expect(isNegativeNumber(123).isPassed).to.be.false;
          expect(isNegativeNumber(0.1).isPassed).to.be.false;
          expect(isNegativeNumber(0.01).isPassed).to.be.false;
          expect(isNegativeNumber(123.123).isPassed).to.be.false;
        });
      });

      context("negative number,", function() {
        it("should be true", function() {
          expect(isNegativeNumber(-123).isPassed).to.be.true;
          expect(isNegativeNumber(-0.1).isPassed).to.be.true;
          expect(isNegativeNumber(-0.01).isPassed).to.be.true;
          expect(isNegativeNumber(-123.123).isPassed).to.be.true;
        });
      });

      context("positive infinity,", function() {
        it("should be false", function() {
          expect(isNegativeNumber(Number.POSITIVE_INFINITY).isPassed).to.be.false;
        });
      });

      context("negative infinity,", function() {
        it("should be true", function() {
          expect(isNegativeNumber(Number.NEGATIVE_INFINITY).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isNegativeNumber("0").isPassed).to.be.false;
        expect(isNegativeNumber("0.1").isPassed).to.be.false;
        expect(isNegativeNumber("123").isPassed).to.be.false;
        expect(isNegativeNumber("123.123").isPassed).to.be.false;
        expect(isNegativeNumber("-0.1").isPassed).to.be.false;
        expect(isNegativeNumber("-123").isPassed).to.be.false;
        expect(isNegativeNumber("-123.123").isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isNegativeNumber(true).isPassed).to.be.false;
        expect(isNegativeNumber(false).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isNegativeNumber([]).isPassed).to.be.false;
        expect(isNegativeNumber([1]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isNegativeNumber({}).isPassed).to.be.false;
        expect(isNegativeNumber({ a: 1 }).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isNegativeNumber(() => 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isNegativeNumber(value).actual).to.eq(value);
      });
    });
  });
});
