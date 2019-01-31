// =============================================================================================================================
// SRC - OPERATORS - STRING TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import { createStringOperator } from "./string";

describe("[ String Operator ]", function() {
  const example = it;
  const targetValue = "123";
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "string"', function() {
      const name = createStringOperator().name;

      expect(name).to.eq("string");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createStringOperator().createValidators();

    example("an expected value should be undefined", function() {
      allTypeValues.forEach(() => {
        expect(validators.type.expected).to.be.undefined;
      });
    });

    example("an executor should check a target value is string", function() {
      allTypeValues.forEach((value: any) => {
        expect(validators.type.executor(value)).to.eq(typeof value === "string");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Value Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("VALUE RULE", function() {
    const val = "123";

    example("an expected value should be proper", function() {
      const validators = createStringOperator().createValidators({ value: val });

      expect(validators.value.expected).to.eq(val);
    });

    example("an executor should compare the string with the expected value", function() {
      const validators = createStringOperator().createValidators({ value: val });

      expect(validators.value.executor(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("LENGTH RULE", function() {
    context("when a target value is array,", function() {
      const length: [number, number] = [1, 4];

      example("an expected value should be proper", function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength }).createValidators({ length });

        expect(validators.length.expected).to.eq(length);
      });

      example('an executor should call "isWithinLengthRange" checker', function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength }).createValidators({ length });

        validators.length.executor(targetValue);

        expect(isWithinLengthRange.calledOnceWith(targetValue, length)).to.be.true;
        expect(isEqualToLength.called).to.be.false;
      });
    });

    context("when a target value is not array,", function() {
      const length = 3;

      example("an expected value should be proper", function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength }).createValidators({ length });

        expect(validators.length.expected).to.eq(length);
      });

      example('an executor should call "isEqualToLength" checker', function() {
        const isWithinLengthRange = sinon.spy();
        const isEqualToLength = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange, isEqualToLength }).createValidators({ length });

        validators.length.executor(targetValue);

        expect(isWithinLengthRange.called).to.be.false;
        expect(isEqualToLength.calledOnceWith(targetValue, length)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM LENGTH RULE", function() {
    const maximumLength = 4;

    example("an execpted value should be proper", function() {
      const isWithinLengthRange = sinon.spy();
      const validators = createStringOperator({ isWithinLengthRange }).createValidators({ maximumLength });

      expect(validators.maximumLength.expected).to.eq(maximumLength);
    });

    example(
      'an executor should call "isWithinLengthRange" checker with undefined and an expected maximum length as array',
      function() {
        const isWithinLengthRange = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange }).createValidators({ maximumLength });

        validators.maximumLength.executor(targetValue);

        expect(isWithinLengthRange.calledOnceWith(targetValue, [undefined, maximumLength])).to.be.true;
      },
    );
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Length Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM LENGTH RULE", function() {
    const minimumLength = 2;

    example("an expected value should be proper", function() {
      const isWithinLengthRange = sinon.spy();
      const validators = createStringOperator({ isWithinLengthRange }).createValidators({ minimumLength });

      expect(validators.minimumLength.expected).to.eq(minimumLength);
    });

    example(
      'an executor should call "isWithinLengthRange" checker with an expected minimum length and undefined as array',
      function() {
        const isWithinLengthRange = sinon.spy();
        const validators = createStringOperator({ isWithinLengthRange }).createValidators({ minimumLength });

        validators.minimumLength.executor(targetValue);

        expect(isWithinLengthRange.calledOnceWith(targetValue, [minimumLength, undefined])).to.be.true;
      },
    );
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Starts With Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("STARTS WITH RULE", function() {
    const startsWith = "123";

    example("an expected value should be proper", function() {
      const checkToStartsWith = sinon.spy();
      const validators = createStringOperator({ checkToStartsWith }).createValidators({ startsWith });

      expect(validators.startsWith.expected).to.eq(startsWith);
    });

    example('an executor should call "checkToStartsWith" checker with an expected value', function() {
      const checkToStartsWith = sinon.spy();
      const validators = createStringOperator({ checkToStartsWith }).createValidators({ startsWith });

      validators.startsWith.executor(targetValue);

      expect(checkToStartsWith.calledOnceWith(targetValue, startsWith)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Ends With Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ENDS WITH RULE", function() {
    const endsWith = "345";

    example("an expected value should be proper", function() {
      const checkToEndsWith = sinon.spy();
      const validators = createStringOperator({ checkToEndsWith }).createValidators({ endsWith });

      expect(validators.endsWith.expected).to.eq(endsWith);
    });

    example('an executor should call "checkToEndsWith" checker with an expected value', function() {
      const checkToEndsWith = sinon.spy();
      const validators = createStringOperator({ checkToEndsWith }).createValidators({ endsWith });

      validators.endsWith.executor(targetValue);

      expect(checkToEndsWith.calledOnceWith(targetValue, endsWith)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Alphanumeric Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ALPHANUMERIC RULE", function() {
    context("when an expected value is boolean,", function() {
      context("true,", function() {
        example("an expected value should be true", function() {
          const isAlphanumeric = sinon.spy();
          const validators = createStringOperator({ isAlphanumeric }).createValidators({ alphanumeric: true });

          expect(validators.alphanumeric.expected).to.be.true;
        });

        example('an executor should be "isAlphanumeric" checker', function() {
          const isAlphanumeric = sinon.spy();
          const validators = createStringOperator({ isAlphanumeric }).createValidators({ alphanumeric: true });

          expect(validators.alphanumeric.executor).to.eq(isAlphanumeric);
        });
      });

      context("false,", function() {
        it("should be undefined", function() {
          const isAlphanumeric = sinon.spy();
          const validators = createStringOperator({ isAlphanumeric }).createValidators({ alphanumeric: false });

          expect(validators.alphanumeric).to.be.undefined;
        });
      });
    });

    context('when an expected value is "lower-camel",', function() {
      example('an expected value should be "lower-camel"', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase }).createValidators({ alphanumeric: "lower-camel" });

        expect(validators.alphanumeric.expected).to.eq("lower-camel");
      });

      example('an executor should call "isCamelCase" checker and "isUpper" flag is false', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase }).createValidators({ alphanumeric: "lower-camel" });

        validators.alphanumeric.executor(targetValue);

        expect(isCamelCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-camel",', function() {
      example('an expected value should be "upper-camel"', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase }).createValidators({ alphanumeric: "upper-camel" });

        expect(validators.alphanumeric.expected).to.eq("upper-camel");
      });

      example('an executor should call "isCamelCase" checker and "isUpper" flag is true', function() {
        const isCamelCase = sinon.spy();
        const validators = createStringOperator({ isCamelCase }).createValidators({ alphanumeric: "upper-camel" });

        validators.alphanumeric.executor(targetValue);

        expect(isCamelCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-snake",', function() {
      example('an expected value should be "lower-snake"', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase }).createValidators({ alphanumeric: "lower-snake" });

        expect(validators.alphanumeric.expected).to.eq("lower-snake");
      });

      example('an executor should call "isSnakeCase" checker and "isUpper" flag is false', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase }).createValidators({ alphanumeric: "lower-snake" });

        validators.alphanumeric.executor(targetValue);

        expect(isSnakeCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-snake",', function() {
      example('an expected value should be "upper-snake"', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase }).createValidators({ alphanumeric: "upper-snake" });

        expect(validators.alphanumeric.expected).to.eq("upper-snake");
      });

      example('an executor should call "isSnakeCase" checker and "isUpper" flag is true', function() {
        const isSnakeCase = sinon.spy();
        const validators = createStringOperator({ isSnakeCase }).createValidators({ alphanumeric: "upper-snake" });

        validators.alphanumeric.executor(targetValue);

        expect(isSnakeCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-kebab",', function() {
      example('an expected value should be "lower-kebab"', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase }).createValidators({ alphanumeric: "lower-kebab" });

        expect(validators.alphanumeric.expected).to.eq("lower-kebab");
      });

      example('an executor should call "isKebabCase" checker and "isUpper" flag is false', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase }).createValidators({ alphanumeric: "lower-kebab" });

        validators.alphanumeric.executor(targetValue);

        expect(isKebabCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-kebab",', function() {
      example('an expected value should be "upper-kebab"', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase }).createValidators({ alphanumeric: "upper-kebab" });

        expect(validators.alphanumeric.expected).to.eq("upper-kebab");
      });

      example('an executor should call "isKebabCase" checker and "isUpper" flag is true', function() {
        const isKebabCase = sinon.spy();
        const validators = createStringOperator({ isKebabCase }).createValidators({ alphanumeric: "upper-kebab" });

        validators.alphanumeric.executor(targetValue);

        expect(isKebabCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-space",', function() {
      example('an expected value should be "lower-space"', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase }).createValidators({ alphanumeric: "lower-space" });

        expect(validators.alphanumeric.expected).to.eq("lower-space");
      });

      example('an executor should call "isSpaceCase" checker and "isUpper" flag is false', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase }).createValidators({ alphanumeric: "lower-space" });

        validators.alphanumeric.executor(targetValue);

        expect(isSpaceCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-space",', function() {
      example('an expected value should be "upper-space"', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase }).createValidators({ alphanumeric: "upper-space" });

        expect(validators.alphanumeric.expected).to.eq("upper-space");
      });

      example('an executor should call "isSpaceCase" checker and "isUpper" flag is true', function() {
        const isSpaceCase = sinon.spy();
        const validators = createStringOperator({ isSpaceCase }).createValidators({ alphanumeric: "upper-space" });

        validators.alphanumeric.executor(targetValue);

        expect(isSpaceCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });

    context('when an expected value is "lower-dot",', function() {
      example('an expected value should be "lower-dot"', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase }).createValidators({ alphanumeric: "lower-dot" });

        expect(validators.alphanumeric.expected).to.eq("lower-dot");
      });

      example('an executor should call "isDotCase" checker and "isUpper" flag is false', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase }).createValidators({ alphanumeric: "lower-dot" });

        validators.alphanumeric.executor(targetValue);

        expect(isDotCase.calledOnceWith(targetValue, false)).to.be.true;
      });
    });

    context('when an expected value is "upper-dot",', function() {
      example('an expected value should be "upper-dot"', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase }).createValidators({ alphanumeric: "upper-dot" });

        expect(validators.alphanumeric.expected).to.eq("upper-dot");
      });

      example('an executor should call "isDotCase" checker and "isUpper" flag is true', function() {
        const isDotCase = sinon.spy();
        const validators = createStringOperator({ isDotCase }).createValidators({ alphanumeric: "upper-dot" });

        validators.alphanumeric.executor(targetValue);

        expect(isDotCase.calledOnceWith(targetValue, true)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Includes Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("INCLUDES RULE", function() {
    const includes = "234";

    example("an expected value should be proper", function() {
      const checkToIncludes = sinon.spy();
      const validators = createStringOperator({ checkToIncludes }).createValidators({ includes });

      expect(validators.includes.expected).to.eq(includes);
    });

    example('an executor should call "checkToIncludes" checker with the expected value', function() {
      const checkToIncludes = sinon.spy();
      const validators = createStringOperator({ checkToIncludes }).createValidators({ includes });

      validators.includes.executor(targetValue);

      expect(checkToIncludes.calledOnceWith(targetValue, includes)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Pattern Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("PATTERN RULE", function() {
    const pattern = /^[a-z]+$/;

    example("an expected value should be proper", function() {
      const isConformingRegExp = sinon.spy();
      const validators = createStringOperator({ isConformingRegExp }).createValidators({ pattern });

      expect(validators.pattern.expected).to.eq(pattern);
    });

    example('an executor should call "isConformingRegExp" checker', function() {
      const isConformingRegExp = sinon.spy();
      const validators = createStringOperator({ isConformingRegExp }).createValidators({ pattern });

      validators.pattern.executor(targetValue);

      expect(isConformingRegExp.calledOnceWith(targetValue, pattern)).to.be.true;
    });
  });
});
