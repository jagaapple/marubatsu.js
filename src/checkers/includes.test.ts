// =============================================================================================================================
// SRC - CHECKERS - INCLUDES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { includes } from "./includes";

describe("[ Includes Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(includes(null, "null").isPassed).to.be.false;
        expect(includes(null, "ul").isPassed).to.be.false;
      });
    });

    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(includes(undefined, "undefined").isPassed).to.be.false;
        expect(includes(undefined, "defi").isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("the value converted to string includes an expected string,", function() {
        it("should be true", function() {
          expect(includes(0, "0").isPassed).to.be.true;
          expect(includes(12345, "234").isPassed).to.be.true;
          expect(includes(-12345, "-123").isPassed).to.be.true;
          expect(includes(123.45, "3.4").isPassed).to.be.true;
          expect(includes(-123.45, "-123.4").isPassed).to.be.true;
        });
      });

      context("the value converted to string does not include an expected string,", function() {
        it("should be false", function() {
          expect(includes(0, "1").isPassed).to.be.false;
          expect(includes(12345, "245").isPassed).to.be.false;
          expect(includes(-12345, "-124").isPassed).to.be.false;
          expect(includes(123.45, "3.46").isPassed).to.be.false;
          expect(includes(-123.45, "-123.5").isPassed).to.be.false;
        });
      });

      context("infinity,", function() {
        it("should be false", function() {
          expect(includes(Number.POSITIVE_INFINITY, "0").isPassed).to.be.false;
          expect(includes(Number.POSITIVE_INFINITY, "Inf").isPassed).to.be.false;
          expect(includes(Number.POSITIVE_INFINITY, "fin").isPassed).to.be.false;
          expect(includes(Number.NEGATIVE_INFINITY, "0").isPassed).to.be.false;
          expect(includes(Number.NEGATIVE_INFINITY, "-Inf").isPassed).to.be.false;
          expect(includes(Number.NEGATIVE_INFINITY, "fin").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("including an expected characters,", function() {
        it("should be true", function() {
          expect(includes("0", "0").isPassed).to.be.true;
          expect(includes("12345", "234").isPassed).to.be.true;
        });
      });

      context("not including an expected characters,", function() {
        it("should be false", function() {
          expect(includes("12345", "0").isPassed).to.be.false;
          expect(includes("12345", "56").isPassed).to.be.false;
          expect(includes("12345", "235").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(includes(true, "true").isPassed).to.be.false;
        expect(includes(true, "ru").isPassed).to.be.false;
        expect(includes(false, "false").isPassed).to.be.false;
        expect(includes(false, "als").isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      context("one or more elements are equal to an expected characters,", function() {
        it("should be true", function() {
          expect(includes([1, 2, 3, 4, 5], "3").isPassed).to.be.true;
          expect(includes(["1", "2", "3", "4", "5"], "3").isPassed).to.be.true;
          expect(includes(["abc", "def", "ghi"], "def").isPassed).to.be.true;
        });
      });

      context("all elements not are equal to an expected characters,", function() {
        it("should be false", function() {
          expect(includes([1, 2, 3, 4, 5], "0").isPassed).to.be.false;
          expect(includes([123, 456], "4").isPassed).to.be.false;
          expect(includes([[123], () => true], "4").isPassed).to.be.false;
          expect(includes(["1", "2", "3", "4", "5"], "3.0").isPassed).to.be.false;
          expect(includes(["abc", "def", "ghi"], "deg").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(includes({}, "object").isPassed).to.be.false;
        expect(includes({}, "bje").isPassed).to.be.false;
        expect(includes({}, "{}").isPassed).to.be.false;
        expect(includes({ a: undefined }, "defi").isPassed).to.be.false;
        expect(includes({ a: null }, "ul").isPassed).to.be.false;
        expect(includes({ a: 12345 }, "234").isPassed).to.be.false;
        expect(includes({ a: "" }, '""').isPassed).to.be.false;
        expect(includes({ a: "12345" }, "234").isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        const func = () => true;

        expect(includes(func, "object").isPassed).to.be.false;
        expect(includes(func, "bje").isPassed).to.be.false;
        expect(includes(func, "function").isPassed).to.be.false;
        expect(includes(func, "ctio").isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected value", function() {
      ["abc", "def", "123", "456"].forEach((expectedValue: string) => {
        expect(includes("abc", expectedValue).expected).to.eq(expectedValue);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it("should be undefined", function() {
        expect(includes(undefined, "def").actual).to.be.undefined;
      });
    });

    context("when a target value is null,", function() {
      it("should be null", function() {
        expect(includes(null, "ull").actual).to.be.null;
      });
    });

    context("when a target value is number,", function() {
      context("not infinity,", function() {
        it("should be a number converted to string", function() {
          [0, 123, -123, 123.45, -123.45].forEach((targetValue: number) => {
            expect(includes(targetValue, "123").actual).to.eq(`${targetValue}`);
          });
        });
      });

      context("infinity,", function() {
        it("should be the number", function() {
          [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((targetValue: number) => {
            expect(includes(targetValue, "123").actual).to.eq(targetValue);
          });
        });
      });
    });

    context("when a target value is string,", function() {
      const targetValue = "abcde";

      it("should be the string", function() {
        expect(includes(targetValue, "bcd").actual).to.eq(targetValue);
      });
    });

    context("when a target value is boolean,", function() {
      it("should be the boolean", function() {
        expect(includes(true, "tru").actual).to.be.true;
        expect(includes(false, "als").actual).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be the array", function() {
        [[undefined, undefined], [null, null], [123, 456], ["123", "456"]].forEach((targetValue: any[]) => {
          expect(includes(targetValue, "123").actual).to.eq(targetValue);
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be the object", function() {
        [{}, { a: true }].forEach((value: any) => {
          expect(includes(value, "obj").actual).to.eq(value);
        });
      });
    });

    context("when a target value is function,", function() {
      const func = () => true;

      it("should be the function", function() {
        expect(includes(func, "fun").actual).to.eq(func);
      });
    });
  });
});
