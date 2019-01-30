// =============================================================================================================================
// SRC - CHECKERS - TYPE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isType } from "./type-checker";

describe("[ Type Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should detect undefined type", function() {
      const targetValue = undefined;

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.true;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should detect null type", function() {
      const targetValue = null;

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.true;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    it("should detect number type", function() {
      const targetValue = 123;

      expect(isType(targetValue, "number")).to.be.true;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is string,", function() {
    it("should detect string type", function() {
      const targetValue = "123";

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.true;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is boolean,", function() {
    it("should detect boolean type", function() {
      const targetValue = false;

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.true;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should detect array type", function() {
      const targetValue: any = [];

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.true;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should detect object type", function() {
      const targetValue = {};

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.true;
      expect(isType(targetValue, "function")).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should detect function type", function() {
      const targetValue = () => true;

      expect(isType(targetValue, "number")).to.be.false;
      expect(isType(targetValue, "string")).to.be.false;
      expect(isType(targetValue, "boolean")).to.be.false;
      expect(isType(targetValue, "null")).to.be.false;
      expect(isType(targetValue, "undefined")).to.be.false;
      expect(isType(targetValue, "array")).to.be.false;
      expect(isType(targetValue, "object")).to.be.false;
      expect(isType(targetValue, "function")).to.be.true;
    });
  });
});
