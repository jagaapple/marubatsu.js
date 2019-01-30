// =============================================================================================================================
// SRC - CHECKERS - REGEXP CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isConformingRegExp } from "./regexp-checker";

describe("[ RegExp Checker ]", function() {
  const sampleRegExp = /^[1-3]+$/;

  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(isConformingRegExp(null, sampleRegExp)).to.be.false;
      expect(isConformingRegExp(null, sampleRegExp)).to.be.false;
    });
  });

  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(isConformingRegExp(undefined, sampleRegExp)).to.be.false;
      expect(isConformingRegExp(undefined, sampleRegExp)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("conforming a specific regular expression,", function() {
      it("should return true", function() {
        expect(isConformingRegExp(123, sampleRegExp)).to.be.true;
        expect(isConformingRegExp(123123, sampleRegExp)).to.be.true;
      });
    });

    context("not conforming a specific regular expression,", function() {
      it("should return false", function() {
        expect(isConformingRegExp(456, sampleRegExp)).to.be.false;
        expect(isConformingRegExp(1234321, sampleRegExp)).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    context("conforming a specific regular expression,", function() {
      it("should return true", function() {
        expect(isConformingRegExp("123", sampleRegExp)).to.be.true;
        expect(isConformingRegExp("123123", sampleRegExp)).to.be.true;
      });
    });

    context("not conforming a specific regular expression,", function() {
      it("should return false", function() {
        expect(isConformingRegExp("456", sampleRegExp)).to.be.false;
        expect(isConformingRegExp("1234321", sampleRegExp)).to.be.false;
      });
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(isConformingRegExp(true, sampleRegExp)).to.be.false;
      expect(isConformingRegExp(false, sampleRegExp)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should return false", function() {
      expect(isConformingRegExp([], sampleRegExp)).to.be.false;
      expect(isConformingRegExp([undefined], sampleRegExp)).to.be.false;
      expect(isConformingRegExp([null], sampleRegExp)).to.be.false;
      expect(isConformingRegExp([1, 2, 3], sampleRegExp)).to.be.false;
      expect(isConformingRegExp([""], sampleRegExp)).to.be.false;
      expect(isConformingRegExp(["1", "2", "3"], sampleRegExp)).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isConformingRegExp({}, sampleRegExp)).to.be.false;
      expect(isConformingRegExp({ a: undefined }, sampleRegExp)).to.be.false;
      expect(isConformingRegExp({ a: null }, sampleRegExp)).to.be.false;
      expect(isConformingRegExp({ a: 123 }, sampleRegExp)).to.be.false;
      expect(isConformingRegExp({ a: "" }, sampleRegExp)).to.be.false;
      expect(isConformingRegExp({ a: "123" }, sampleRegExp)).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      expect(isConformingRegExp(() => true, sampleRegExp)).to.be.false;
    });
  });
});
