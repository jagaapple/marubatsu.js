// =============================================================================================================================
// SRC - CHECKERS - PATTERN TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { pattern } from "./pattern";

describe("[ RegExp Checker ]", function() {
  const sampleRegExp = /^[1-3]+$/;

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(pattern(undefined, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(pattern(null, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("conforming a specific regular expression,", function() {
        it("should be true", function() {
          expect(pattern(123, sampleRegExp).isPassed).to.be.true;
          expect(pattern(123123, sampleRegExp).isPassed).to.be.true;
        });
      });

      context("not conforming a specific regular expression,", function() {
        it("should be false", function() {
          expect(pattern(456, sampleRegExp).isPassed).to.be.false;
          expect(pattern(1234321, sampleRegExp).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("conforming a specific regular expression,", function() {
        it("should be true", function() {
          expect(pattern("123", sampleRegExp).isPassed).to.be.true;
          expect(pattern("123123", sampleRegExp).isPassed).to.be.true;
        });
      });

      context("not conforming a specific regular expression,", function() {
        it("should be false", function() {
          expect(pattern("456", sampleRegExp).isPassed).to.be.false;
          expect(pattern("1234321", sampleRegExp).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(pattern(true, sampleRegExp).isPassed).to.be.false;
        expect(pattern(false, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(pattern([], sampleRegExp).isPassed).to.be.false;
        expect(pattern([undefined], sampleRegExp).isPassed).to.be.false;
        expect(pattern([null], sampleRegExp).isPassed).to.be.false;
        expect(pattern([0], sampleRegExp).isPassed).to.be.false;
        expect(pattern([""], sampleRegExp).isPassed).to.be.false;
        expect(pattern([false], sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(pattern({}, sampleRegExp).isPassed).to.be.false;
        expect(pattern({ a: undefined }, sampleRegExp).isPassed).to.be.false;
        expect(pattern({ a: null }, sampleRegExp).isPassed).to.be.false;
        expect(pattern({ a: 0 }, sampleRegExp).isPassed).to.be.false;
        expect(pattern({ a: "" }, sampleRegExp).isPassed).to.be.false;
        expect(pattern({ a: false }, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(pattern(() => undefined, sampleRegExp).isPassed).to.be.false;
        expect(pattern(() => null, sampleRegExp).isPassed).to.be.false;
        expect(pattern(() => false, sampleRegExp).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context('when "isPassed" is true,', function() {
      it("should be true", function() {
        expect(pattern(123, sampleRegExp).actual).to.be.true;
        expect(pattern("123", sampleRegExp).actual).to.be.true;
      });
    });

    context('when "isPassed" is false,', function() {
      it("should be false", function() {
        expect(pattern(undefined, sampleRegExp).actual).to.be.false;
        expect(pattern(null, sampleRegExp).actual).to.be.false;
        expect(pattern(456, sampleRegExp).actual).to.be.false;
        expect(pattern("456", sampleRegExp).actual).to.be.false;
        expect(pattern(true, sampleRegExp).actual).to.be.false;
        expect(pattern(false, sampleRegExp).actual).to.be.false;
        expect(pattern([], sampleRegExp).actual).to.be.false;
        expect(pattern({}, sampleRegExp).actual).to.be.false;
        expect(pattern(() => true, sampleRegExp).actual).to.be.false;
      });
    });
  });
});
