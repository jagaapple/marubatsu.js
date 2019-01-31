// =============================================================================================================================
// SRC - OPERATORS - NUMBER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import { createNumberOperator } from "./number";

describe("[ Number Operator ]", function() {
  const example = it;
  const targetValue = 123;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "string"', function() {
      const name = createNumberOperator().name;

      expect(name).to.eq("number");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createNumberOperator().createValidators();

    example("an expected value should be undefined", function() {
      allTypeValues.forEach(() => {
        expect(validators.type.expected).to.be.undefined;
      });
    });

    example("an executor should check a target value is number", function() {
      allTypeValues.forEach((value: any) => {
        expect(validators.type.executor(value)).to.eq(typeof value === "number");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Value Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("VALUE RULE", function() {
    context("when an expected value is number,", function() {
      example("an expected value should be proper", function() {
        const validators = createNumberOperator().createValidators({ value: targetValue });

        expect(validators.value.expected).to.eq(targetValue);
      });

      example("an executor should compare the number with the expected value", function() {
        const validators = createNumberOperator().createValidators({ value: targetValue });

        expect(validators.value.executor(targetValue)).to.be.true;
      });
    });

    context("when an expected value is array,", function() {
      const val: [number, number] = [100, 200];

      example("an expected value should be proper", function() {
        const isWithinNumberRange = sinon.spy();
        const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ value: val });

        expect(validators.value.expected).to.eq(val);
      });

      example('an executor should call "isWithinNumberRange" checker,', function() {
        const isWithinNumberRange = sinon.spy();
        const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ value: val });

        validators.value.executor(targetValue);

        expect(isWithinNumberRange.calledOnceWith(targetValue, val)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Value
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM VALUE RULE", function() {
    const maximumValue = 200;

    example("an expected value should be proper", function() {
      const isWithinNumberRange = sinon.spy();
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ maximumValue });

      expect(validators.maximumValue.expected).to.eq(maximumValue);
    });

    example('an executor should call "isWithinNumberRange" checker with an expected maximum value,', function() {
      const isWithinNumberRange = sinon.spy();
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ maximumValue });

      validators.maximumValue.executor(targetValue);

      expect(isWithinNumberRange.calledOnceWith(targetValue, [undefined, maximumValue])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Value
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM VALUE RULE", function() {
    const minimumValue = 200;

    example("an expected value should be proper", function() {
      const isWithinNumberRange = sinon.spy();
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ minimumValue });

      expect(validators.minimumValue.expected).to.eq(minimumValue);
    });

    example('an executor should call "isWithinNumberRange" checker with an expected minimum value,', function() {
      const isWithinNumberRange = sinon.spy();
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ minimumValue });

      validators.minimumValue.executor(targetValue);

      expect(isWithinNumberRange.calledOnceWith(targetValue, [minimumValue, undefined])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Integer
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("INTEGER RULE", function() {
    example("an expected value should be true", function() {
      const isInteger = sinon.spy();
      const validators = createNumberOperator({ isInteger }).createValidators({ integer: true });

      expect(validators.integer.expected).to.be.true;
    });

    example('an executor should call "isInteger" checker,', function() {
      const isInteger = sinon.spy();
      const validators = createNumberOperator({ isInteger }).createValidators({ integer: true });

      validators.integer.executor(targetValue);

      expect(isInteger.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Float
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("FLOAT RULE", function() {
    example("an expected value should be true", function() {
      const isDecimal = sinon.spy();
      const validators = createNumberOperator({ isDecimal }).createValidators({ float: true });

      expect(validators.float.expected).to.be.true;
    });

    example('an executor should call "isDecimal" checker,', function() {
      const isDecimal = sinon.spy();
      const validators = createNumberOperator({ isDecimal }).createValidators({ float: true });

      validators.float.executor(targetValue);

      expect(isDecimal.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Positive
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("POSITIVE RULE", function() {
    example("an expected value should be true", function() {
      const isPositiveNumber = sinon.spy();
      const validators = createNumberOperator({ isPositiveNumber }).createValidators({ positive: true });

      expect(validators.positive.expected).to.be.true;
    });

    example('an executor should call "isPositiveNumber" checker,', function() {
      const isPositiveNumber = sinon.spy();
      const validators = createNumberOperator({ isPositiveNumber }).createValidators({ positive: true });

      validators.positive.executor(targetValue);

      expect(isPositiveNumber.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Negative
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NEGATIVE RULE", function() {
    example("an expected value should be true", function() {
      const isNegativeNumber = sinon.spy();
      const validators = createNumberOperator({ isNegativeNumber }).createValidators({ negative: true });

      expect(validators.negative.expected).to.be.true;
    });

    example('an executor should call "isNegativeNumber" checker,', function() {
      const isNegativeNumber = sinon.spy();
      const validators = createNumberOperator({ isNegativeNumber }).createValidators({ negative: true });

      validators.negative.executor(targetValue);

      expect(isNegativeNumber.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Digits Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("DIGITS RULE", function() {
    context("when an expected number of digits is number,", function() {
      const digits = 3;

      example("an expected value should be proper", function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        expect(validators.digits.expected).to.eq(digits);
      });

      example('an executor should call "hasDigits" checker,', function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        validators.digits.executor(targetValue);

        expect(hasDigits.calledOnceWith(targetValue, digits)).to.be.true;
        expect(isWithinDigitsRange.calledOnceWith(targetValue, digits)).to.be.false;
      });
    });

    context("when an expected number of digits is array,", function() {
      const digits: [number, number] = [2, 4];

      example("an expected value should be proper", function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        expect(validators.digits.expected).to.eq(digits);
      });

      example('an executor should call "isWithinDigitsRange" checker,', function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        validators.digits.executor(targetValue);

        expect(hasDigits.calledOnceWith(targetValue, digits)).to.be.false;
        expect(isWithinDigitsRange.calledOnceWith(targetValue, digits)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Digits
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM DIGITS RULE", function() {
    const maximumDigits = 4;

    example("an expected value should be proper", function() {
      const isWithinDigitsRange = sinon.spy();
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ maximumDigits });

      expect(validators.maximumDigits.expected).to.eq(maximumDigits);
    });

    example('an executor should call "isWithinDigitsRange" checker with an expected maximum number of digits,', function() {
      const isWithinDigitsRange = sinon.spy();
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ maximumDigits });

      validators.maximumDigits.executor(targetValue);

      expect(isWithinDigitsRange.calledOnceWith(targetValue, [undefined, maximumDigits])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Digits
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM DIGITS RULE", function() {
    const minimumDigits = 2;

    example("an expected value should be proper", function() {
      const isWithinDigitsRange = sinon.spy();
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ minimumDigits });

      expect(validators.minimumDigits.expected).to.eq(minimumDigits);
    });

    example('an executor should call "isWithinDigitsRange" checker with an expected minimum number of digits,', function() {
      const isWithinDigitsRange = sinon.spy();
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ minimumDigits });

      validators.minimumDigits.executor(targetValue);

      expect(isWithinDigitsRange.calledOnceWith(targetValue, [minimumDigits, undefined])).to.be.true;
    });
  });
});
