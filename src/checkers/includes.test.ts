// =============================================================================================================================
// SRC - CHECKERS - INCLUDES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
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
      it("should be false", function() {
        expect(includes(0, "0").isPassed).to.be.false;
        expect(includes(12345, "234").isPassed).to.be.false;
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
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(includes(false, "false").isPassed).to.be.false;
        expect(includes(false, "als").isPassed).to.be.false;
        expect(includes(true, "true").isPassed).to.be.false;
        expect(includes(true, "ru").isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      context("one or more elements are equal to an expected characters,", function() {
        it("should be true", function() {
          expect(includes([1, 2, 3, 4, 5], "3").isPassed).to.be.true;
          expect(includes(["1", "2", "3", "4", "5"], "3").isPassed).to.be.true;
          expect(includes(["a", "b", "c", "d", "e"], "b").isPassed).to.be.true;
        });
      });

      context("all elements not are equal to an expected characters,", function() {
        it("should be false", function() {
          expect(includes([1, 2, 3, 4, 5], "0").isPassed).to.be.false;
          expect(includes([123, 456], "4").isPassed).to.be.false;
          expect(includes([[123], () => true], "4").isPassed).to.be.false;
          expect(includes(["1", "2", "3", "4", "5"], "0").isPassed).to.be.false;
          expect(includes(["a", "b", "c", "d", "e"], "f").isPassed).to.be.false;
          expect(includes(["abc", "def"], "c").isPassed).to.be.false;
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
      ["abc", "def", "ghi"].forEach((expectedValue: string) => {
        expect(includes("abc", expectedValue).expected).to.eq(expectedValue);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(includes(value, "abc").actual).to.eq(value);
      });
    });
  });
});
