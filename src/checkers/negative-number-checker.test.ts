// =============================================================================================================================
// SRC - CHECKERS - NEGATIVE NUMBER CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isNegativeNumber } from "./negative-number-checker";

describe("[ Negative Number Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(isNegativeNumber(undefined)).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(isNegativeNumber(null)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("zero,", function() {
      it("should return false", function() {
        expect(isNegativeNumber(0)).to.be.false;
        expect(isNegativeNumber(+0)).to.be.false;
        expect(isNegativeNumber(-0)).to.be.false;
      });
    });

    context("positive number,", function() {
      it("should return false", function() {
        expect(isNegativeNumber(123)).to.be.false;
        expect(isNegativeNumber(0.1)).to.be.false;
        expect(isNegativeNumber(0.01)).to.be.false;
        expect(isNegativeNumber(123.123)).to.be.false;
      });
    });

    context("negative number,", function() {
      it("should return true", function() {
        expect(isNegativeNumber(-123)).to.be.true;
        expect(isNegativeNumber(-0.1)).to.be.true;
        expect(isNegativeNumber(-0.01)).to.be.true;
        expect(isNegativeNumber(-123.123)).to.be.true;
      });
    });

    context("positive infinity,", function() {
      it("should return false", function() {
        expect(isNegativeNumber(Number.POSITIVE_INFINITY)).to.be.false;
      });
    });

    context("negative infinity,", function() {
      it("should return true", function() {
        expect(isNegativeNumber(Number.NEGATIVE_INFINITY)).to.be.true;
      });
    });
  });

  context("when a target value is string,", function() {
    it("should return false", function() {
      expect(isNegativeNumber("0")).to.be.false;
      expect(isNegativeNumber("0.1")).to.be.false;
      expect(isNegativeNumber("123")).to.be.false;
      expect(isNegativeNumber("123.123")).to.be.false;
      expect(isNegativeNumber("-0.1")).to.be.false;
      expect(isNegativeNumber("-123")).to.be.false;
      expect(isNegativeNumber("-123.123")).to.be.false;
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(isNegativeNumber(true)).to.be.false;
      expect(isNegativeNumber(false)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should return false", function() {
      expect(isNegativeNumber([])).to.be.false;
      expect(isNegativeNumber([1])).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isNegativeNumber({})).to.be.false;
      expect(isNegativeNumber({ a: 1 })).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      expect(isNegativeNumber(() => 1)).to.be.false;
    });
  });
});
