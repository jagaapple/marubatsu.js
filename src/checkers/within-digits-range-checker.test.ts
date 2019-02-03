// =============================================================================================================================
// SRC - CHECKERS - WITHIN DIGITS RANGE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isWithinDigitsRange } from "./within-digits-range-checker";

describe("[ Within Digits Range Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange(undefined, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange(undefined, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(undefined, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(undefined, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(undefined, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(undefined, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange(null, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange(null, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(null, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(null, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(null, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(null, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("the number is equal to or less than a specific maximum number of digits,", function() {
        it("should be true", function() {
          expect(isWithinDigitsRange(0, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [0, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [undefined, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [0, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [undefined, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [4, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [4, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [0, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [undefined, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [3, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [2, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [0, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [undefined, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [8, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [7, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [0, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [undefined, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [0, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [undefined, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [4, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [4, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [0, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [undefined, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [3, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [2, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [0, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [undefined, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [8, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [7, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [0, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [undefined, 8]).isPassed).to.be.true;
        });
      });

      context("the number is more than a specific maximum number of digits,", function() {
        it("should be false", function() {
          expect(isWithinDigitsRange(0.001, [0, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(0.001, [3, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(0.001, [undefined, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [0, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [2, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [undefined, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [0, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [7, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [undefined, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [0, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [3, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [undefined, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [0, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [2, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [undefined, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [0, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [7, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [undefined, 7]).isPassed).to.be.false;
        });
      });

      context("the number is equal to or more than a specific minimum number of digits,", function() {
        it("should be true", function() {
          expect(isWithinDigitsRange(0, [0, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0, [1, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [0, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(9, [1, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [3, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [4, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [4, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(0.001, [4, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [2, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [3, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [3, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123, [3, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [7, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [8, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [8, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(123.45678, [8, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0, [0, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0, [1, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [0, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [1, 1]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [1, 2]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-9, [1, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [3, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [4, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [4, 5]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-0.001, [4, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [2, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [3, 3]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [3, 4]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123, [3, undefined]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [7, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [8, 8]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [8, 9]).isPassed).to.be.true;
          expect(isWithinDigitsRange(-123.45678, [8, undefined]).isPassed).to.be.true;
        });
      });

      context("the number is less than a specific minimum number of digits,", function() {
        it("should be false", function() {
          expect(isWithinDigitsRange(0.001, [5, 8]).isPassed).to.be.false;
          expect(isWithinDigitsRange(0.001, [5, 5]).isPassed).to.be.false;
          expect(isWithinDigitsRange(0.001, [5, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [4, 8]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [4, 4]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123, [4, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [9, 10]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [9, 9]).isPassed).to.be.false;
          expect(isWithinDigitsRange(123.45678, [9, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [0, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [3, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-0.001, [undefined, 3]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [0, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [2, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123, [undefined, 2]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [0, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [7, 7]).isPassed).to.be.false;
          expect(isWithinDigitsRange(-123.45678, [undefined, 7]).isPassed).to.be.false;
        });
      });

      context("infinity,", function() {
        it("should be false", function() {
          expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, 0]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, 1]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [undefined, 1]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [0, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.POSITIVE_INFINITY, [undefined, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, 0]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, 1]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [undefined, 1]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [0, undefined]).isPassed).to.be.false;
          expect(isWithinDigitsRange(Number.NEGATIVE_INFINITY, [undefined, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange("0", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("0.1", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("123.123", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-0.1", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange("-123.123", [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange(true, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange(true, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(true, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(true, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(true, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(true, [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(false, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange([], [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange([], [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([], [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([], [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([], [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange([], [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange([1], [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isWithinDigitsRange({}, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange({}, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({}, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({}, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({}, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange({}, [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange({ a: 1 }, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        const func = () => true;

        expect(isWithinDigitsRange(func, [0, 0]).isPassed).to.be.false;
        expect(isWithinDigitsRange(func, [1, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(func, [0, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(func, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinDigitsRange(func, [0, undefined]).isPassed).to.be.false;
        expect(isWithinDigitsRange(func, [undefined, undefined]).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context("when specifying minimum number of digits,", function() {
      context("specifying maximum number of digits,", function() {
        it("should have the minimum and maximum number of digits as array", function() {
          const expectedNumberOfDigits: [number, number] = [100, 200];

          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum number of digits,", function() {
        it("should have the minimum number of digits and positive infinity as array", function() {
          const expectedNumberOfDigits: [number, undefined] = [100, undefined];

          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
        });
      });
    });

    context("when not specifying minimum number of digits,", function() {
      context("specifying maximum number of digits,", function() {
        it("should have negative infinity and the maximum number of digits as array", function() {
          const expectedNumberOfDigits: [undefined, number] = [undefined, 200];

          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum number of digits,", function() {
        it("should have negative and positive infinity as array", function() {
          const expectedNumberOfDigits: [undefined, undefined] = [undefined, undefined];

          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinDigitsRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isWithinDigitsRange(value, [100, 200]).actual).to.eq(value);
        expect(isWithinDigitsRange(value, [100, undefined]).actual).to.eq(value);
        expect(isWithinDigitsRange(value, [undefined, 200]).actual).to.eq(value);
        expect(isWithinDigitsRange(value, [undefined, undefined]).actual).to.eq(value);
      });
    });
  });
});
