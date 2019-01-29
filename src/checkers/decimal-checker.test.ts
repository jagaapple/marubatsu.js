// =============================================================================================================================
// SRC - CHECKERS - DECIMAL CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isDecimal } from "./decimal-checker";

describe("[ Decimal Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isDecimal(undefined)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isDecimal(null)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("integer number,", function() {
      it("should return false", function() {
        expect(isDecimal(0)).to.be.false;
        expect(isDecimal(+0)).to.be.false;
        expect(isDecimal(-0)).to.be.false;
        expect(isDecimal(123)).to.be.false;
        expect(isDecimal(-123)).to.be.false;
      });
    });

    context("not integer number,", function() {
      it("should return true", function() {
        expect(isDecimal(0.1)).to.be.true;
        expect(isDecimal(0.01)).to.be.true;
        expect(isDecimal(123.123)).to.be.true;
        expect(isDecimal(-0.1)).to.be.true;
        expect(isDecimal(-0.01)).to.be.true;
        expect(isDecimal(-123.123)).to.be.true;
      });
    });

    context("infinity,", function() {
      it("should return false", function() {
        expect(isDecimal(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isDecimal(Number.NEGATIVE_INFINITY)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    it("should return false", function() {
      expect(isDecimal("0")).to.be.false;
      expect(isDecimal("0.1")).to.be.false;
      expect(isDecimal("123")).to.be.false;
      expect(isDecimal("123.123")).to.be.false;
      expect(isDecimal("-0.1")).to.be.false;
      expect(isDecimal("-123")).to.be.false;
      expect(isDecimal("-123.123")).to.be.false;
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isDecimal(true)).to.be.false;
      expect(isDecimal(false)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isDecimal([])).to.be.false;
      expect(isDecimal([1])).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isDecimal({})).to.be.false;
      expect(isDecimal({ a: 1 })).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isDecimal(() => 1)).to.be.false;
    });
  });
});
