// =============================================================================================================================
// SRC - CHECKERS - POSITIVE NUMBER CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isPositiveNumber } from "./positive-number-checker";

describe("[ Decimal Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isPositiveNumber(undefined)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isPositiveNumber(null)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return false", function() {
        expect(isPositiveNumber(0)).to.be.false;
        expect(isPositiveNumber(+0)).to.be.false;
        expect(isPositiveNumber(-0)).to.be.false;
      });
    });

    context("positive number,", function() {
      it("should return true", function() {
        expect(isPositiveNumber(123)).to.be.true;
        expect(isPositiveNumber(0.1)).to.be.true;
        expect(isPositiveNumber(0.01)).to.be.true;
        expect(isPositiveNumber(123.123)).to.be.true;
      });
    });

    context("negative number,", function() {
      it("should return false", function() {
        expect(isPositiveNumber(-123)).to.be.false;
        expect(isPositiveNumber(-0.1)).to.be.false;
        expect(isPositiveNumber(-0.01)).to.be.false;
        expect(isPositiveNumber(-123.123)).to.be.false;
      });
    });

    context("positive infinity,", function() {
      it("should return true", function() {
        expect(isPositiveNumber(Number.POSITIVE_INFINITY)).to.be.true;
      });
    });

    context("negative infinity,", function() {
      it("should return false", function() {
        expect(isPositiveNumber(Number.NEGATIVE_INFINITY)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    it("should return false", function() {
      expect(isPositiveNumber("0")).to.be.false;
      expect(isPositiveNumber("0.1")).to.be.false;
      expect(isPositiveNumber("123")).to.be.false;
      expect(isPositiveNumber("123.123")).to.be.false;
      expect(isPositiveNumber("-0.1")).to.be.false;
      expect(isPositiveNumber("-123")).to.be.false;
      expect(isPositiveNumber("-123.123")).to.be.false;
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isPositiveNumber(true)).to.be.false;
      expect(isPositiveNumber(false)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isPositiveNumber([])).to.be.false;
      expect(isPositiveNumber([1])).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isPositiveNumber({})).to.be.false;
      expect(isPositiveNumber({ a: 1 })).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isPositiveNumber(() => 1)).to.be.false;
    });
  });
});
