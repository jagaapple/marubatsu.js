// =============================================================================================================================
// SRC - CHECKERS - EQUAL DIGITS CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { hasDigits } from "./equal-digits-checker";

describe("[ Equal Digits Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(hasDigits(undefined, 0)).to.be.false;
      expect(hasDigits(undefined, 1)).to.be.false;
      expect(hasDigits(undefined, 9)).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(hasDigits(null, 0)).to.be.false;
      expect(hasDigits(null, 1)).to.be.false;
      expect(hasDigits(null, 4)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("the number is equal to an expected number of digits,", function() {
      it("should return true", function() {
        expect(hasDigits(0, 1)).to.be.true;
        expect(hasDigits(1, 1)).to.be.true;
        expect(hasDigits(9, 1)).to.be.true;
        expect(hasDigits(0.001, 4)).to.be.true;
        expect(hasDigits(123, 3)).to.be.true;
        expect(hasDigits(123.45678, 8)).to.be.true;
        expect(hasDigits(-1, 1)).to.be.true;
        expect(hasDigits(-9, 1)).to.be.true;
        expect(hasDigits(-0.001, 4)).to.be.true;
        expect(hasDigits(-123, 3)).to.be.true;
        expect(hasDigits(-123.45678, 8)).to.be.true;
      });
    });

    context("the number is not equal to an expected number of digits,", function() {
      it("should return false", function() {
        expect(hasDigits(0, 0)).to.be.false;
        expect(hasDigits(10, 10)).to.be.false;
        expect(hasDigits(0.001, 5)).to.be.false;
        expect(hasDigits(-10, 3)).to.be.false;
        expect(hasDigits(-0.001, 6)).to.be.false;
      });
    });

    context("infinity,", function() {
      it("should return false", function() {
        expect(hasDigits(Number.POSITIVE_INFINITY, 0)).to.be.false;
        expect(hasDigits(Number.POSITIVE_INFINITY, 1)).to.be.false;
        expect(hasDigits(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)).to.be.false;
        expect(hasDigits(Number.NEGATIVE_INFINITY, 0)).to.be.false;
        expect(hasDigits(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    it("should return false", function() {
      expect(hasDigits("0", 0)).to.be.false;
      expect(hasDigits("0", 1)).to.be.false;
      expect(hasDigits("0.1", 2)).to.be.false;
      expect(hasDigits("0.1", 3)).to.be.false;
      expect(hasDigits("123", 3)).to.be.false;
      expect(hasDigits("123.123", 6)).to.be.false;
      expect(hasDigits("123.123", 7)).to.be.false;
      expect(hasDigits("-0.1", 2)).to.be.false;
      expect(hasDigits("-0.1", 4)).to.be.false;
      expect(hasDigits("-123", 3)).to.be.false;
      expect(hasDigits("-123", 4)).to.be.false;
      expect(hasDigits("-123.123", 6)).to.be.false;
      expect(hasDigits("-123.123", 8)).to.be.false;
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(hasDigits(true, 0)).to.be.false;
      expect(hasDigits(true, 1)).to.be.false;
      expect(hasDigits(true, 4)).to.be.false;
      expect(hasDigits(false, 0)).to.be.false;
      expect(hasDigits(false, 1)).to.be.false;
      expect(hasDigits(false, 5)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should return false", function() {
      expect(hasDigits([], 0)).to.be.false;
      expect(hasDigits([], 1)).to.be.false;
      expect(hasDigits([1], 0)).to.be.false;
      expect(hasDigits([1], 1)).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(hasDigits({}, 0)).to.be.false;
      expect(hasDigits({}, 1)).to.be.false;
      expect(hasDigits({ a: 1 }, 0)).to.be.false;
      expect(hasDigits({ a: 1 }, 1)).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      expect(hasDigits(() => 1, 0)).to.be.false;
      expect(hasDigits(() => 1, 1)).to.be.false;
    });
  });
});
