// =============================================================================================================================
// SRC - CHECKERS - INTEGER CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isInteger } from "./integer-checker";

describe("[ Integer Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isInteger(undefined)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isInteger(null)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("integer number,", function() {
      it("should return true", function() {
        expect(isInteger(0)).to.be.true;
        expect(isInteger(+0)).to.be.true;
        expect(isInteger(-0)).to.be.true;
        expect(isInteger(123)).to.be.true;
        expect(isInteger(-123)).to.be.true;
      });
    });

    context("not integer number,", function() {
      it("should return false", function() {
        expect(isInteger(0.1)).to.be.false;
        expect(isInteger(0.01)).to.be.false;
        expect(isInteger(123.123)).to.be.false;
        expect(isInteger(-0.1)).to.be.false;
        expect(isInteger(-0.01)).to.be.false;
        expect(isInteger(-123.123)).to.be.false;
      });
    });

    context("infinity,", function() {
      it("should return false", function() {
        expect(isInteger(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isInteger(Number.NEGATIVE_INFINITY)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    it("should return false", function() {
      expect(isInteger("0")).to.be.false;
      expect(isInteger("0.1")).to.be.false;
      expect(isInteger("123")).to.be.false;
      expect(isInteger("123.123")).to.be.false;
      expect(isInteger("-0.1")).to.be.false;
      expect(isInteger("-123")).to.be.false;
      expect(isInteger("-123.123")).to.be.false;
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isInteger(true)).to.be.false;
      expect(isInteger(false)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isInteger([])).to.be.false;
      expect(isInteger([1])).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isInteger({})).to.be.false;
      expect(isInteger({ a: 1 })).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isInteger(() => 1)).to.be.false;
    });
  });
});
