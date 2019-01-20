// =============================================================================================================================
// SPEC - CHECKERS - NULLARY CHECKER SPEC
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { isNullary } from "./nullary-checker";

describe("[ Nullary Checker ]", function() {
  context("when calling with `null`", function() {
    it("should return true", function() {
      expect(isNullary(null)).to.be.true;
    });
  });

  context("when calling with `undefined`", function() {
    it("should return true", function() {
      expect(isNullary(undefined)).to.be.true;
    });
  });

  context("when calling with number", function() {
    it("should return false", function() {
      expect(isNullary(-1)).to.be.false;
      expect(isNullary(0)).to.be.false;
      expect(isNullary(1)).to.be.false;
    });
  });

  context("when calling with string", function() {
    it("should return false", function() {
      expect(isNullary("")).to.be.false;
      expect(isNullary("a")).to.be.false;
    });
  });

  context("when calling with boolean", function() {
    it("should return false", function() {
      expect(isNullary(true)).to.be.false;
      expect(isNullary(false)).to.be.false;
    });
  });

  context("when calling with array", function() {
    it("should return false", function() {
      expect(isNullary([])).to.be.false;
      expect(isNullary([undefined])).to.be.false;
      expect(isNullary([1, 2, 3])).to.be.false;
    });
  });

  context("when calling with object", function() {
    it("should return false", function() {
      expect(isNullary({})).to.be.false;
      expect(isNullary({ a: undefined })).to.be.false;
      expect(isNullary({ a: true })).to.be.false;
      expect(isNullary(() => true)).to.be.false;
    });
  });
});
