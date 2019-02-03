// =============================================================================================================================
// SRC - CHECKERS - REGEXP CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isConformingRegExp } from "./regexp-checker";

describe("[ RegExp Checker ]", function() {
  const sampleRegExp = /^[1-3]+$/;

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isConformingRegExp(undefined, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isConformingRegExp(null, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("conforming a specific regular expression,", function() {
        it("should be true", function() {
          expect(isConformingRegExp(123, sampleRegExp).isPassed).to.be.true;
          expect(isConformingRegExp(123123, sampleRegExp).isPassed).to.be.true;
        });
      });

      context("not conforming a specific regular expression,", function() {
        it("should be false", function() {
          expect(isConformingRegExp(456, sampleRegExp).isPassed).to.be.false;
          expect(isConformingRegExp(1234321, sampleRegExp).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("conforming a specific regular expression,", function() {
        it("should be true", function() {
          expect(isConformingRegExp("123", sampleRegExp).isPassed).to.be.true;
          expect(isConformingRegExp("123123", sampleRegExp).isPassed).to.be.true;
        });
      });

      context("not conforming a specific regular expression,", function() {
        it("should be false", function() {
          expect(isConformingRegExp("456", sampleRegExp).isPassed).to.be.false;
          expect(isConformingRegExp("1234321", sampleRegExp).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isConformingRegExp(true, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp(false, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isConformingRegExp([], sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp([undefined], sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp([null], sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp([1, 2, 3], sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp([""], sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp(["1", "2", "3"], sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isConformingRegExp({}, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp({ a: undefined }, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp({ a: null }, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp({ a: 123 }, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp({ a: "" }, sampleRegExp).isPassed).to.be.false;
        expect(isConformingRegExp({ a: "123" }, sampleRegExp).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isConformingRegExp(() => true, sampleRegExp).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context('when "isPassed" is true,', function() {
      it("should be true", function() {
        expect(isConformingRegExp(123, sampleRegExp).actual).to.be.true;
        expect(isConformingRegExp("123", sampleRegExp).actual).to.be.true;
      });
    });

    context('when "isPassed" is false,', function() {
      it("should be false", function() {
        expect(isConformingRegExp(undefined, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp(null, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp(456, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp("456", sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp(true, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp(false, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp([], sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp({}, sampleRegExp).actual).to.be.false;
        expect(isConformingRegExp(() => true, sampleRegExp).actual).to.be.false;
      });
    });
  });
});
