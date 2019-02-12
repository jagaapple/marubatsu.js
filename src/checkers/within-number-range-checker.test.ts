// =============================================================================================================================
// SRC - CHECKERS - WITHIN NUMBER RANGE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isWithinNumberRange } from "./within-number-range-checker";

describe("[ Within Number Range Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isWithinNumberRange(undefined, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange(undefined, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(undefined, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(undefined, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange(undefined, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(undefined, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isWithinNumberRange(null, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange(null, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(null, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(null, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange(null, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(null, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("the number is equal to or less than a specific maximum value,", function() {
        it("should be true", function() {
          expect(isWithinNumberRange(3, [2, 4]).isPassed).to.be.true;
          expect(isWithinNumberRange(3, [3, 3]).isPassed).to.be.true;
          expect(isWithinNumberRange(3, [0, 3]).isPassed).to.be.true;
          expect(isWithinNumberRange(3.1, [0, 3.1]).isPassed).to.be.true;
          expect(isWithinNumberRange(3.1, [0, 3.2]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3, [-6, -3]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3.1, [-6, -3.1]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3.1, [-6, -3]).isPassed).to.be.true;
          expect(isWithinNumberRange(3, [undefined, 3]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3, [undefined, -3]).isPassed).to.be.true;
        });
      });

      context("the number is more than a specific maximum value,", function() {
        it("should be false", function() {
          expect(isWithinNumberRange(4, [0, 3]).isPassed).to.be.false;
          expect(isWithinNumberRange(4, [3, 3]).isPassed).to.be.false;
          expect(isWithinNumberRange(4.1, [0, 4]).isPassed).to.be.false;
          expect(isWithinNumberRange(-4, [-6, -4.1]).isPassed).to.be.false;
          expect(isWithinNumberRange(-3.9, [-6, -4]).isPassed).to.be.false;
          expect(isWithinNumberRange(4, [undefined, 3]).isPassed).to.be.false;
          expect(isWithinNumberRange(-3.9, [undefined, -4]).isPassed).to.be.false;
        });
      });

      context("the number is equal to or more than a specific minimum value,", function() {
        it("should be true", function() {
          expect(isWithinNumberRange(3, [3, 5]).isPassed).to.be.true;
          expect(isWithinNumberRange(3.1, [3.1, 5]).isPassed).to.be.true;
          expect(isWithinNumberRange(3.1, [3, 5]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3, [-3, 0]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3.1, [-3.1, 0]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3.1, [-3.2, 0]).isPassed).to.be.true;
          expect(isWithinNumberRange(3, [3, undefined]).isPassed).to.be.true;
          expect(isWithinNumberRange(-3, [-3, undefined]).isPassed).to.be.true;
        });
      });

      context("the number is less than a specific minimum value,", function() {
        it("should be false", function() {
          expect(isWithinNumberRange(3, [4, 5]).isPassed).to.be.false;
          expect(isWithinNumberRange(3, [4, 4]).isPassed).to.be.false;
          expect(isWithinNumberRange(2.9, [3, 5]).isPassed).to.be.false;
          expect(isWithinNumberRange(-3, [-2.9, 0]).isPassed).to.be.false;
          expect(isWithinNumberRange(-3.1, [-3, 0]).isPassed).to.be.false;
          expect(isWithinNumberRange(3, [4, 5]).isPassed).to.be.false;
          expect(isWithinNumberRange(-3, [-2, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isWithinNumberRange("", [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange("", [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("", [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("", [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange("", [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange("", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange("0", [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange("abc", [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isWithinNumberRange(true, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange(true, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(true, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(true, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange(true, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(true, [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(false, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isWithinNumberRange([], [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange([], [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([], [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([], [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange([], [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange([], [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange([undefined], [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange([0, 1], [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isWithinNumberRange({}, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange({}, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange({}, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange({}, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange({}, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange({}, [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange({ a: 0 }, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        const func = () => 1;

        expect(isWithinNumberRange(func, [0, 0]).isPassed).to.be.false;
        expect(isWithinNumberRange(func, [1, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(func, [0, 1]).isPassed).to.be.false;
        expect(isWithinNumberRange(func, [undefined, 5]).isPassed).to.be.false;
        expect(isWithinNumberRange(func, [1, undefined]).isPassed).to.be.false;
        expect(isWithinNumberRange(func, [undefined, undefined]).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context("when specifying minimum value,", function() {
      context("specifying maximum value,", function() {
        it("should have the minimum and maximum value as array", function() {
          const expectedNumberOfDigits: [number, number] = [100, 200];

          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum value,", function() {
        it("should have the minimum value and positive infinity as array", function() {
          const expectedNumberOfDigits: [number, undefined] = [100, undefined];

          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
        });
      });
    });

    context("when not specifying minimum value,", function() {
      context("specifying maximum value,", function() {
        it("should have negative infinity and the maximum value as array", function() {
          const expectedNumberOfDigits: [undefined, number] = [undefined, 200];

          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum value,", function() {
        it("should have negative and positive infinity as array", function() {
          const expectedNumberOfDigits: [undefined, undefined] = [undefined, undefined];

          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinNumberRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
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
        expect(isWithinNumberRange(value, [100, 200]).actual).to.eq(value);
        expect(isWithinNumberRange(value, [100, undefined]).actual).to.eq(value);
        expect(isWithinNumberRange(value, [undefined, 200]).actual).to.eq(value);
        expect(isWithinNumberRange(value, [undefined, undefined]).actual).to.eq(value);
      });
    });
  });
});
