// =============================================================================================================================
// SRC - OPERATORS - STRING TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import { createStringOperator } from "./string";

describe("[ String ]", function() {
  const targetValue = "123";
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    it("should check a target value is string", function() {
      const validators = createStringOperator()();

      allTypeValues.forEach((value: any) => {
        expect(validators.type(value)).to.eq(typeof value === "string");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Value Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("VALUE RULE", function() {
    context("when an expected value is number", function() {
      it("should compare the number converted to string with the expected value,", function() {
        const val = 123;
        const validators = createStringOperator()({ value: val });

        expect(validators.value(targetValue)).to.be.true;
      });
    });

    context("when an expected value is string", function() {
      it("should compare the string with the expected value", function() {
        const val = "123";
        const validators = createStringOperator()({ value: val });

        expect(validators.value(targetValue)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("LENGTH RULE", function() {
    context("when a target value is array,", function() {
      it('should call "isWithinLengthRange" checker', function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const length: [number, number] = [1, 4];
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength })({ length });

        validators.length(targetValue);

        expect(isWithinLengthRange.calledOnceWith(targetValue, length)).to.be.true;
        expect(isEqualToLength.called).to.be.false;
      });
    });

    context("when a target value is not array,", function() {
      it('should call "isEqualToLength" checker', function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const length = 3;
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength })({ length });

        validators.length(targetValue);

        expect(isWithinLengthRange.called).to.be.false;
        expect(isEqualToLength.calledOnceWith(targetValue, length)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM LENGTH RULE", function() {
    it('should call "isWithinLengthRange" checker with undefined and an expected maximum length as array', function() {
      const isWithinLengthRange = sinon.spy();
      const maximumLength = 4;
      const validators = createStringOperator({ isWithinLengthRange })({ maximumLength });

      validators.maximumLength(targetValue);

      expect(isWithinLengthRange.calledOnceWith(targetValue, [undefined, maximumLength])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM LENGTH RULE", function() {
    it('should call "isWithinLengthRange" checker with an expected minimum length and undefined as array', function() {
      const isWithinLengthRange = sinon.spy();
      const minimumLength = 2;
      const validators = createStringOperator({ isWithinLengthRange })({ minimumLength });

      validators.minimumLength(targetValue);

      expect(isWithinLengthRange.calledOnceWith(targetValue, [minimumLength, undefined])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Starts With Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("STARTS WITH RULE", function() {
    context("when an expected value is number,", function() {
      it('should call "checkToStartsWith" checker with an expected value converted to string', function() {
        const checkToStartsWith = sinon.spy();
        const startsWith = 123;
        const validators = createStringOperator({ checkToStartsWith })({ startsWith });

        validators.startsWith(targetValue);

        expect(checkToStartsWith.calledOnceWith(targetValue, startsWith.toString())).to.be.true;
      });
    });

    context("when an expected value is string,", function() {
      it('should call "checkToStartsWith" checker with an expected value', function() {
        const checkToStartsWith = sinon.spy();
        const startsWith = "123";
        const validators = createStringOperator({ checkToStartsWith })({ startsWith });

        validators.startsWith(targetValue);

        expect(checkToStartsWith.calledOnceWith(targetValue, startsWith)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Ends With Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ENDS WITH RULE", function() {
    context("when an expected value is number,", function() {
      it('should call "checkToEndsWith" checker with an expected value converted to string', function() {
        const checkToEndsWith = sinon.spy();
        const endsWith = 345;
        const validators = createStringOperator({ checkToEndsWith })({ endsWith });

        validators.endsWith(targetValue);

        expect(checkToEndsWith.calledOnceWith(targetValue, endsWith.toString())).to.be.true;
      });
    });

    context("when an expected value is string,", function() {
      it('should call "checkToEndsWith" checker with an expected value', function() {
        const checkToEndsWith = sinon.spy();
        const endsWith = "345";
        const validators = createStringOperator({ checkToEndsWith })({ endsWith });

        validators.endsWith(targetValue);

        expect(checkToEndsWith.calledOnceWith(targetValue, endsWith)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Alphanumeric Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ALPHANUMERIC RULE", function() {
    context("when an expected value is boolean,", function() {
      context("true,", function() {
        it('should be "isAlphanumeric" checker', function() {
          const isAlphanumeric = sinon.spy();
          const validators = createStringOperator({ isAlphanumeric })({ alphanumeric: true });

          expect(validators.alphanumeric).to.eq(isAlphanumeric);
        });
      });

      context("false,", function() {
        it("should be undefined", function() {
          const isAlphanumeric = sinon.spy();
          const validators = createStringOperator({ isAlphanumeric })({ alphanumeric: false });

          expect(validators.alphanumeric).to.be.undefined;
        });
      });
    });

    context('when an expected value is "lower-camel",', function() {
      it('should call "isCamelCase" checker and "isUpper" flag is false', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase })({ alphanumeric: "lower-camel" });

        validators.alphanumeric(targetValue);

        expect(isCamelCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-camel",', function() {
      it('should call "isCamelCase" checker and "isUpper" flag is true', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase })({ alphanumeric: "upper-camel" });

        validators.alphanumeric(targetValue);

        expect(isCamelCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-snake",', function() {
      it('should call "isSnakeCase" checker and "isUpper" flag is false', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase })({ alphanumeric: "lower-snake" });

        validators.alphanumeric(targetValue);

        expect(isSnakeCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-snake",', function() {
      it('should call "isSnakeCase" checker and "isUpper" flag is true', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase })({ alphanumeric: "upper-snake" });

        validators.alphanumeric(targetValue);

        expect(isSnakeCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-kebab",', function() {
      it('should call "isKebabCase" checker and "isUpper" flag is false', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase })({ alphanumeric: "lower-kebab" });

        validators.alphanumeric(targetValue);

        expect(isKebabCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-kebab",', function() {
      it('should call "isKebabCase" checker and "isUpper" flag is true', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase })({ alphanumeric: "upper-kebab" });

        validators.alphanumeric(targetValue);

        expect(isKebabCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-space",', function() {
      it('should call "isSpaceCase" checker and "isUpper" flag is false', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase })({ alphanumeric: "lower-space" });

        validators.alphanumeric(targetValue);

        expect(isSpaceCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-space",', function() {
      it('should call "isSpaceCase" checker and "isUpper" flag is true', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase })({ alphanumeric: "upper-space" });

        validators.alphanumeric(targetValue);

        expect(isSpaceCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-dot",', function() {
      it('should call "isDotCase" checker and "isUpper" flag is false', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase })({ alphanumeric: "lower-dot" });

        validators.alphanumeric(targetValue);

        expect(isDotCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-dot",', function() {
      it('should call "isDotCase" checker and "isUpper" flag is true', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase })({ alphanumeric: "upper-dot" });

        validators.alphanumeric(targetValue);

        expect(isDotCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Includes Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("INCLUDES RULE", function() {
    context("when an expected value is number", function() {
      it('should call "checkToIncludes" checker with the expected value converted to string', function() {
        const checkToIncludes = sinon.spy();
        const includes = 234;
        const validators = createStringOperator({ checkToIncludes })({ includes });

        validators.includes(targetValue);

        expect(checkToIncludes.calledOnceWith(targetValue, includes.toString())).to.be.true;
      });
    });

    context("when an expected value is string", function() {
      it('should call "checkToIncludes" checker with the expected value', function() {
        const checkToIncludes = sinon.spy();
        const includes = "234";
        const validators = createStringOperator({ checkToIncludes })({ includes });

        validators.includes(targetValue);

        expect(checkToIncludes.calledOnceWith(targetValue, includes)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Pattern Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("PATTERN RULE", function() {
    it('should call "isConformingRegExp" checker', function() {
      const isConformingRegExp = sinon.spy();
      const pattern = /^[a-z]+$/;
      const validators = createStringOperator({ isConformingRegExp })({ pattern });

      validators.pattern(targetValue);

      expect(isConformingRegExp.calledOnceWith(targetValue, pattern)).to.be.true;
    });
  });
});
