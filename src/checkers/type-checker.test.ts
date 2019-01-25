// =============================================================================================================================
// SRC - CHECKERS - TYPE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isType } from "./type-checker";

describe("[ Type Checker ]", function() {
  context("when a value is undefined", function() {
    it("should detect undefined type", function() {
      const value = undefined;

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.true;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is null", function() {
    it("should detect null type", function() {
      const value = null;

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.true;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is number", function() {
    it("should detect number type", function() {
      const value = 123;

      expect(isType(value, "number")).to.be.true;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is string", function() {
    it("should detect string type", function() {
      const value = "123";

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.true;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is boolean", function() {
    it("should detect boolean type", function() {
      const value = false;

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.true;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is array", function() {
    it("should detect array type", function() {
      const value: any = [];

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.true;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary)", function() {
    it("should detect object type", function() {
      const value = {};

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.true;
      expect(isType(value, "function")).to.be.false;
    });
  });

  context("when a value is function", function() {
    it("should detect function type", function() {
      const value = () => true;

      expect(isType(value, "number")).to.be.false;
      expect(isType(value, "string")).to.be.false;
      expect(isType(value, "boolean")).to.be.false;
      expect(isType(value, "null")).to.be.false;
      expect(isType(value, "undefined")).to.be.false;
      expect(isType(value, "array")).to.be.false;
      expect(isType(value, "object")).to.be.false;
      expect(isType(value, "function")).to.be.true;
    });
  });
});
