// =============================================================================================================================
// SRC - CHECKERS - WITHIN DIGITS RANGE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isWithinDigitsRange } from "./within-digits-range-checker";

describe("[ Within Digits Range Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange(undefined, [0, 0])).to.be.false;
      expect(isWithinDigitsRange(undefined, [1, 1])).to.be.false;
      expect(isWithinDigitsRange(undefined, [0, 1])).to.be.false;
      expect(isWithinDigitsRange(undefined, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange(undefined, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange(undefined, [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange(null, [0, 0])).to.be.false;
      expect(isWithinDigitsRange(null, [1, 1])).to.be.false;
      expect(isWithinDigitsRange(null, [0, 1])).to.be.false;
      expect(isWithinDigitsRange(null, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange(null, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange(null, [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("the number is equal to or less than a specific maximum number of digits,", function() {
      it("should return true", function() {
        expect(isWithinDigitsRange(0, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(0, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(0, [0, 1])).to.be.true;
        expect(isWithinDigitsRange(0, [undefined, 2])).to.be.true;
        expect(isWithinDigitsRange(9, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(9, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(9, [0, 1])).to.be.true;
        expect(isWithinDigitsRange(9, [undefined, 2])).to.be.true;
        expect(isWithinDigitsRange(0.001, [4, 5])).to.be.true;
        expect(isWithinDigitsRange(0.001, [4, 4])).to.be.true;
        expect(isWithinDigitsRange(0.001, [0, 4])).to.be.true;
        expect(isWithinDigitsRange(0.001, [undefined, 4])).to.be.true;
        expect(isWithinDigitsRange(123, [3, 4])).to.be.true;
        expect(isWithinDigitsRange(123, [2, 3])).to.be.true;
        expect(isWithinDigitsRange(123, [0, 3])).to.be.true;
        expect(isWithinDigitsRange(123, [undefined, 3])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [8, 9])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [7, 8])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [0, 8])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [undefined, 8])).to.be.true;
        expect(isWithinDigitsRange(-9, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(-9, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(-9, [0, 1])).to.be.true;
        expect(isWithinDigitsRange(-9, [undefined, 2])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [4, 5])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [4, 4])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [0, 4])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [undefined, 4])).to.be.true;
        expect(isWithinDigitsRange(-123, [3, 4])).to.be.true;
        expect(isWithinDigitsRange(-123, [2, 3])).to.be.true;
        expect(isWithinDigitsRange(-123, [0, 3])).to.be.true;
        expect(isWithinDigitsRange(-123, [undefined, 3])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [8, 9])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [7, 8])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [0, 8])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [undefined, 8])).to.be.true;
      });
    });

    context("the number is more than a specific maximum number of digits,", function() {
      it("should return false", function() {
        expect(isWithinDigitsRange(0.001, [0, 3])).to.be.false;
        expect(isWithinDigitsRange(0.001, [3, 3])).to.be.false;
        expect(isWithinDigitsRange(0.001, [undefined, 3])).to.be.false;
        expect(isWithinDigitsRange(123, [0, 2])).to.be.false;
        expect(isWithinDigitsRange(123, [2, 2])).to.be.false;
        expect(isWithinDigitsRange(123, [undefined, 2])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [0, 7])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [7, 7])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [undefined, 7])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [0, 3])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [3, 3])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [undefined, 3])).to.be.false;
        expect(isWithinDigitsRange(-123, [0, 2])).to.be.false;
        expect(isWithinDigitsRange(-123, [2, 2])).to.be.false;
        expect(isWithinDigitsRange(-123, [undefined, 2])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [0, 7])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [7, 7])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [undefined, 7])).to.be.false;
      });
    });

    context("the number is equal to or more than a specific minimum number of digits,", function() {
      it("should return true", function() {
        expect(isWithinDigitsRange(0, [0, 2])).to.be.true;
        expect(isWithinDigitsRange(0, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(0, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(0, [1, undefined])).to.be.true;
        expect(isWithinDigitsRange(9, [0, 2])).to.be.true;
        expect(isWithinDigitsRange(9, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(9, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(9, [1, undefined])).to.be.true;
        expect(isWithinDigitsRange(0.001, [3, 5])).to.be.true;
        expect(isWithinDigitsRange(0.001, [4, 4])).to.be.true;
        expect(isWithinDigitsRange(0.001, [4, 5])).to.be.true;
        expect(isWithinDigitsRange(0.001, [4, undefined])).to.be.true;
        expect(isWithinDigitsRange(123, [2, 4])).to.be.true;
        expect(isWithinDigitsRange(123, [3, 3])).to.be.true;
        expect(isWithinDigitsRange(123, [3, 4])).to.be.true;
        expect(isWithinDigitsRange(123, [3, undefined])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [7, 9])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [8, 8])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [8, 9])).to.be.true;
        expect(isWithinDigitsRange(123.45678, [8, undefined])).to.be.true;
        expect(isWithinDigitsRange(-0, [0, 2])).to.be.true;
        expect(isWithinDigitsRange(-0, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(-0, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(-0, [1, undefined])).to.be.true;
        expect(isWithinDigitsRange(-9, [0, 2])).to.be.true;
        expect(isWithinDigitsRange(-9, [1, 1])).to.be.true;
        expect(isWithinDigitsRange(-9, [1, 2])).to.be.true;
        expect(isWithinDigitsRange(-9, [1, undefined])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [3, 5])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [4, 4])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [4, 5])).to.be.true;
        expect(isWithinDigitsRange(-0.001, [4, undefined])).to.be.true;
        expect(isWithinDigitsRange(-123, [2, 4])).to.be.true;
        expect(isWithinDigitsRange(-123, [3, 3])).to.be.true;
        expect(isWithinDigitsRange(-123, [3, 4])).to.be.true;
        expect(isWithinDigitsRange(-123, [3, undefined])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [7, 9])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [8, 8])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [8, 9])).to.be.true;
        expect(isWithinDigitsRange(-123.45678, [8, undefined])).to.be.true;
      });
    });

    context("the number is less than a specific minimum number of digits,", function() {
      it("should return false", function() {
        expect(isWithinDigitsRange(0.001, [5, 8])).to.be.false;
        expect(isWithinDigitsRange(0.001, [5, 5])).to.be.false;
        expect(isWithinDigitsRange(0.001, [5, undefined])).to.be.false;
        expect(isWithinDigitsRange(123, [4, 8])).to.be.false;
        expect(isWithinDigitsRange(123, [4, 4])).to.be.false;
        expect(isWithinDigitsRange(123, [4, undefined])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [9, 10])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [9, 9])).to.be.false;
        expect(isWithinDigitsRange(123.45678, [9, undefined])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [0, 3])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [3, 3])).to.be.false;
        expect(isWithinDigitsRange(-0.001, [undefined, 3])).to.be.false;
        expect(isWithinDigitsRange(-123, [0, 2])).to.be.false;
        expect(isWithinDigitsRange(-123, [2, 2])).to.be.false;
        expect(isWithinDigitsRange(-123, [undefined, 2])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [0, 7])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [7, 7])).to.be.false;
        expect(isWithinDigitsRange(-123.45678, [undefined, 7])).to.be.false;
      });
    });

    context("infinity,", function() {
      it("should return false", function() {
        expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, 0])).to.be.false;
        expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, 1])).to.be.false;
        expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [undefined, 1])).to.be.false;
        expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, undefined])).to.be.false;
        expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [undefined, undefined])).to.be.false;
        expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, 0])).to.be.false;
        expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, 1])).to.be.false;
        expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [undefined, 1])).to.be.false;
        expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, undefined])).to.be.false;
        expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [undefined, undefined])).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange("0", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("0", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("0", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("0", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("0", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("0", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("0.1", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("0.1", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("0.1", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("0.1", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("0.1", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("0.1", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("123", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("123", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("123", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("123", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("123", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("123", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("123.123", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("123.123", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("123.123", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("123.123", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("123.123", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("123.123", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("-0.1", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("-123", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("-123", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("-123", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("-123", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("-123", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("-123", [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [0, 0])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [1, 1])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [0, 1])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [0, undefined])).to.be.false;
      expect(isWithinDigitsRange("-123.123", [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange(true, [0, 0])).to.be.false;
      expect(isWithinDigitsRange(true, [1, 1])).to.be.false;
      expect(isWithinDigitsRange(true, [0, 1])).to.be.false;
      expect(isWithinDigitsRange(true, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange(true, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange(true, [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange(false, [0, 0])).to.be.false;
      expect(isWithinDigitsRange(false, [1, 1])).to.be.false;
      expect(isWithinDigitsRange(false, [0, 1])).to.be.false;
      expect(isWithinDigitsRange(false, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange(false, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange(false, [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange([], [0, 0])).to.be.false;
      expect(isWithinDigitsRange([], [1, 1])).to.be.false;
      expect(isWithinDigitsRange([], [0, 1])).to.be.false;
      expect(isWithinDigitsRange([], [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange([], [0, undefined])).to.be.false;
      expect(isWithinDigitsRange([], [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange([1], [0, 0])).to.be.false;
      expect(isWithinDigitsRange([1], [1, 1])).to.be.false;
      expect(isWithinDigitsRange([1], [0, 1])).to.be.false;
      expect(isWithinDigitsRange([1], [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange([1], [0, undefined])).to.be.false;
      expect(isWithinDigitsRange([1], [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isWithinDigitsRange({}, [0, 0])).to.be.false;
      expect(isWithinDigitsRange({}, [1, 1])).to.be.false;
      expect(isWithinDigitsRange({}, [0, 1])).to.be.false;
      expect(isWithinDigitsRange({}, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange({}, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange({}, [undefined, undefined])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [0, 0])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [1, 1])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [0, 1])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange({ a: 1 }, [undefined, undefined])).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      const func = () => true;

      expect(isWithinDigitsRange(func, [0, 0])).to.be.false;
      expect(isWithinDigitsRange(func, [1, 1])).to.be.false;
      expect(isWithinDigitsRange(func, [0, 1])).to.be.false;
      expect(isWithinDigitsRange(func, [undefined, 1])).to.be.false;
      expect(isWithinDigitsRange(func, [0, undefined])).to.be.false;
      expect(isWithinDigitsRange(func, [undefined, undefined])).to.be.false;
    });
  });
});
