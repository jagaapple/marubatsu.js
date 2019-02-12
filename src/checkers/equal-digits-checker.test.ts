// =============================================================================================================================
// SRC - CHECKERS - EQUAL DIGITS CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { hasDigits } from "./equal-digits-checker";

describe("[ Equal Digits Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(hasDigits(undefined, 0).isPassed).to.be.false;
        expect(hasDigits(undefined, 1).isPassed).to.be.false;
        expect(hasDigits(undefined, 9).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(hasDigits(null, 0).isPassed).to.be.false;
        expect(hasDigits(null, 1).isPassed).to.be.false;
        expect(hasDigits(null, 4).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("the number is equal to an expected number of digits,", function() {
        it("should be true", function() {
          expect(hasDigits(0, 1).isPassed).to.be.true;
          expect(hasDigits(1, 1).isPassed).to.be.true;
          expect(hasDigits(9, 1).isPassed).to.be.true;
          expect(hasDigits(0.001, 4).isPassed).to.be.true;
          expect(hasDigits(123, 3).isPassed).to.be.true;
          expect(hasDigits(123.45678, 8).isPassed).to.be.true;
          expect(hasDigits(-1, 1).isPassed).to.be.true;
          expect(hasDigits(-9, 1).isPassed).to.be.true;
          expect(hasDigits(-0.001, 4).isPassed).to.be.true;
          expect(hasDigits(-123, 3).isPassed).to.be.true;
          expect(hasDigits(-123.45678, 8).isPassed).to.be.true;
        });
      });

      context("the number is not equal to an expected number of digits,", function() {
        it("should be false", function() {
          expect(hasDigits(0, 0).isPassed).to.be.false;
          expect(hasDigits(10, 10).isPassed).to.be.false;
          expect(hasDigits(0.001, 5).isPassed).to.be.false;
          expect(hasDigits(-10, 3).isPassed).to.be.false;
          expect(hasDigits(-0.001, 6).isPassed).to.be.false;
        });
      });

      context("infinity,", function() {
        it("should be false", function() {
          expect(hasDigits(Number.POSITIVE_INFINITY, 0).isPassed).to.be.false;
          expect(hasDigits(Number.POSITIVE_INFINITY, 1).isPassed).to.be.false;
          expect(hasDigits(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY).isPassed).to.be.false;
          expect(hasDigits(Number.NEGATIVE_INFINITY, 0).isPassed).to.be.false;
          expect(hasDigits(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(hasDigits("0", 0).isPassed).to.be.false;
        expect(hasDigits("0", 1).isPassed).to.be.false;
        expect(hasDigits("0.1", 2).isPassed).to.be.false;
        expect(hasDigits("0.1", 3).isPassed).to.be.false;
        expect(hasDigits("123", 3).isPassed).to.be.false;
        expect(hasDigits("123.123", 6).isPassed).to.be.false;
        expect(hasDigits("123.123", 7).isPassed).to.be.false;
        expect(hasDigits("-0.1", 2).isPassed).to.be.false;
        expect(hasDigits("-0.1", 4).isPassed).to.be.false;
        expect(hasDigits("-123", 3).isPassed).to.be.false;
        expect(hasDigits("-123", 4).isPassed).to.be.false;
        expect(hasDigits("-123.123", 6).isPassed).to.be.false;
        expect(hasDigits("-123.123", 8).isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(hasDigits(true, 0).isPassed).to.be.false;
        expect(hasDigits(true, 1).isPassed).to.be.false;
        expect(hasDigits(true, 4).isPassed).to.be.false;
        expect(hasDigits(false, 0).isPassed).to.be.false;
        expect(hasDigits(false, 1).isPassed).to.be.false;
        expect(hasDigits(false, 5).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(hasDigits([], 0).isPassed).to.be.false;
        expect(hasDigits([], 1).isPassed).to.be.false;
        expect(hasDigits([1], 0).isPassed).to.be.false;
        expect(hasDigits([1], 1).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(hasDigits({}, 0).isPassed).to.be.false;
        expect(hasDigits({}, 1).isPassed).to.be.false;
        expect(hasDigits({ a: 1 }, 0).isPassed).to.be.false;
        expect(hasDigits({ a: 1 }, 1).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(hasDigits(() => 1, 0).isPassed).to.be.false;
        expect(hasDigits(() => 1, 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected value", function() {
      [1, 2, 3, 4, 5].forEach((expectedNumberOfDigits: number) => {
        expect(hasDigits(123456, expectedNumberOfDigits).expected).to.eq(expectedNumberOfDigits);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is number,", function() {
      context("not infinity,", function() {
        it("should be number of digits", function() {
          expect(hasDigits(123, 0).actual).to.eq(3);
          expect(hasDigits(-123, 0).actual).to.eq(3);
          expect(hasDigits(123.456, 0).actual).to.eq(6);
          expect(hasDigits(-123.456, 0).actual).to.eq(6);
        });
      });

      context("infinity,", function() {
        it('should be "not-number"', function() {
          expect(hasDigits(Number.POSITIVE_INFINITY, 0).actual).to.eq("not-number");
          expect(hasDigits(Number.NEGATIVE_INFINITY, 0).actual).to.eq("not-number");
        });
      });
    });

    context("when a target value is not number,", function() {
      it('should be "not-number"', function() {
        expect(hasDigits("123", 0).actual).to.eq("not-number");
      });
    });
  });
});
