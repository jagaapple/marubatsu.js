// =============================================================================================================================
// SRC - CHECKERS - SHARED - TYPE GETTER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { getType } from "./type-getter";

describe("[ Type Getter ]", function() {
  context("when a target value is undefined,", function() {
    it('should be "undefined"', function() {
      expect(getType(undefined)).to.eq("undefined");
    });
  });

  context("when a target value is null,", function() {
    it('should be "null"', function() {
      expect(getType(null)).to.eq("null");
    });
  });

  context("when a target value is number,", function() {
    it('should be "number"', function() {
      expect(getType(0)).to.eq("number");
      expect(getType(123)).to.eq("number");
      expect(getType(-123)).to.eq("number");
      expect(getType(123.123)).to.eq("number");
      expect(getType(-123.123)).to.eq("number");
      expect(getType(Number.POSITIVE_INFINITY)).to.eq("number");
      expect(getType(Number.NEGATIVE_INFINITY)).to.eq("number");
    });
  });

  context("when a target value is string,", function() {
    it('should be "string"', function() {
      expect(getType("")).to.eq("string");
      expect(getType(" ")).to.eq("string");
      expect(getType("abc")).to.eq("string");
    });
  });

  context("when a target value is boolean,", function() {
    it('should be "boolean"', function() {
      expect(getType(true)).to.eq("boolean");
      expect(getType(false)).to.eq("boolean");
    });
  });

  context("when a target value is array,", function() {
    it('should be "array"', function() {
      expect(getType([])).to.eq("array");
      expect(getType([undefined])).to.eq("array");
      expect(getType([null])).to.eq("array");
      expect(getType([0])).to.eq("array");
      expect(getType([""])).to.eq("array");
      expect(getType([false])).to.eq("array");
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it('should be "object"', function() {
      expect(getType({})).to.eq("object");
      expect(getType({ a: undefined })).to.eq("object");
      expect(getType({ a: null })).to.eq("object");
      expect(getType({ a: 0 })).to.eq("object");
      expect(getType({ a: "" })).to.eq("object");
      expect(getType({ a: false })).to.eq("object");
    });
  });

  context("when a target value is function,", function() {
    it('should be "function"', function() {
      expect(getType(() => undefined)).to.eq("function");
      expect(getType(() => null)).to.eq("function");
      expect(getType(() => false)).to.eq("function");
    });
  });
});
