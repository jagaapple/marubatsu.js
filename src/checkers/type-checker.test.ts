// =============================================================================================================================
// SRC - CHECKERS - TYPE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isType } from "./type-checker";

describe("[ Type Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should detect undefined type", function() {
        const targetValue = undefined;

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.true;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should detect null type", function() {
        const targetValue = null;

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.true;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      it("should detect number type", function() {
        const targetValue = 123;

        expect(isType(targetValue, "number").isPassed).to.be.true;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is string,", function() {
      it("should detect string type", function() {
        const targetValue = "123";

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.true;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is boolean,", function() {
      it("should detect boolean type", function() {
        const targetValue = false;

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.true;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should detect array type", function() {
        const targetValue: any = [];

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.true;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should detect object type", function() {
        const targetValue = {};

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.true;
        expect(isType(targetValue, "function").isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should detect function type", function() {
        const targetValue = () => true;

        expect(isType(targetValue, "number").isPassed).to.be.false;
        expect(isType(targetValue, "string").isPassed).to.be.false;
        expect(isType(targetValue, "boolean").isPassed).to.be.false;
        expect(isType(targetValue, "null").isPassed).to.be.false;
        expect(isType(targetValue, "undefined").isPassed).to.be.false;
        expect(isType(targetValue, "array").isPassed).to.be.false;
        expect(isType(targetValue, "object").isPassed).to.be.false;
        expect(isType(targetValue, "function").isPassed).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected type", function() {
      ["number", "string", "boolean", "null", "undefined", "array", "object", "function"].forEach((expectedType: string) => {
        expect(isType(123, expectedType as any).expected).to.eq(expectedType);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it('should be "undefined"', function() {
        expect(isType(undefined, "undefined").actual).to.eq("undefined");
      });
    });

    context("when a target value is null,", function() {
      it('should be "null"', function() {
        expect(isType(null, "null").actual).to.eq("null");
      });
    });

    context("when a target value is number,", function() {
      it('should be "number"', function() {
        expect(isType(123, "number").actual).to.eq("number");
      });
    });

    context("when a target value is string,", function() {
      it('should be "string"', function() {
        expect(isType("abc", "string").actual).to.eq("string");
      });
    });

    context("when a target value is boolean,", function() {
      it('should be "boolean"', function() {
        expect(isType(true, "boolean").actual).to.eq("boolean");
      });
    });

    context("when a target value is array,", function() {
      it('should be "array"', function() {
        expect(isType([], "array").actual).to.eq("array");
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it('should be "object"', function() {
        expect(isType({}, "object").actual).to.eq("object");
      });
    });

    context("when a target value is function,", function() {
      it('should be "function"', function() {
        expect(isType(() => true, "function").actual).to.eq("function");
      });
    });
  });
});
