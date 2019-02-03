// =============================================================================================================================
// SRC - CHECKERS - INTEGER CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isInteger } from "./integer-checker";

describe("[ Integer Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isInteger(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isInteger(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("integer number,", function() {
        it("should be true", function() {
          expect(isInteger(0).isPassed).to.be.true;
          expect(isInteger(+0).isPassed).to.be.true;
          expect(isInteger(-0).isPassed).to.be.true;
          expect(isInteger(123).isPassed).to.be.true;
          expect(isInteger(-123).isPassed).to.be.true;
        });
      });

      context("not integer number,", function() {
        it("should be false", function() {
          expect(isInteger(0.1).isPassed).to.be.false;
          expect(isInteger(0.01).isPassed).to.be.false;
          expect(isInteger(123.123).isPassed).to.be.false;
          expect(isInteger(-0.1).isPassed).to.be.false;
          expect(isInteger(-0.01).isPassed).to.be.false;
          expect(isInteger(-123.123).isPassed).to.be.false;
        });
      });

      context("infinity,", function() {
        it("should be false", function() {
          expect(isInteger(Number.POSITIVE_INFINITY).isPassed).to.be.false;
          expect(isInteger(Number.NEGATIVE_INFINITY).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      it("should be false", function() {
        expect(isInteger("0").isPassed).to.be.false;
        expect(isInteger("0.1").isPassed).to.be.false;
        expect(isInteger("123").isPassed).to.be.false;
        expect(isInteger("123.123").isPassed).to.be.false;
        expect(isInteger("-0.1").isPassed).to.be.false;
        expect(isInteger("-123").isPassed).to.be.false;
        expect(isInteger("-123.123").isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isInteger(true).isPassed).to.be.false;
        expect(isInteger(false).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isInteger([]).isPassed).to.be.false;
        expect(isInteger([1]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isInteger({}).isPassed).to.be.false;
        expect(isInteger({ a: 1 }).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isInteger(() => 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isInteger(value).actual).to.eq(value);
      });
    });
  });
});
