// =============================================================================================================================
// SRC - OPERATORS - NUMBER OPERATOR TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import { createNumberOperator } from "./number-operator";

describe("[ Number Operator ]", function() {
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
    it("should check a target value is number", function() {
      const validators = createNumberOperator().createValidators();

      allTypeValues.forEach((value: any) => {
        expect(validators.type(value).isPassed).to.eq(typeof value === "number");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Value Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("VALUE RULE", function() {
    context("when an expected value is number,", function() {
      it('should call "isEqualToValue" checker,', function() {
        const isEqualToValue = sinon.spy();
        const val = 0;
        const validators = createNumberOperator({ isEqualToValue }).createValidators({ value: val });

        validators.value(targetValue);

        expect(isEqualToValue.calledOnceWith(targetValue, val)).to.be.true;
      });
    });

    context("when an expected value is array,", function() {
      it('should call "isWithinNumberRange" checker,', function() {
        const isWithinNumberRange = sinon.spy();
        const val: [number, number] = [100, 200];
        const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ value: val });

        validators.value(targetValue);

        expect(isWithinNumberRange.calledOnceWith(targetValue, val)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Value
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM VALUE RULE", function() {
    it('should call "isWithinNumberRange" checker with an expected maximum value,', function() {
      const isWithinNumberRange = sinon.spy();
      const maximumValue = 200;
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ maximumValue });

      validators.maximumValue(targetValue);

      expect(isWithinNumberRange.calledOnceWith(targetValue, [undefined, maximumValue])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Value
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM VALUE RULE", function() {
    it('should call "isWithinNumberRange" checker with an expected minimum value,', function() {
      const isWithinNumberRange = sinon.spy();
      const minimumValue = 200;
      const validators = createNumberOperator({ isWithinNumberRange }).createValidators({ minimumValue });

      validators.minimumValue(targetValue);

      expect(isWithinNumberRange.calledOnceWith(targetValue, [minimumValue, undefined])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Integer
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("INTEGER RULE", function() {
    it('should call "isInteger" checker,', function() {
      const isInteger = sinon.spy();
      const validators = createNumberOperator({ isInteger }).createValidators({ integer: true });

      validators.integer(targetValue);

      expect(isInteger.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Float
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("FLOAT RULE", function() {
    it('should call "isDecimal" checker,', function() {
      const isDecimal = sinon.spy();
      const validators = createNumberOperator({ isDecimal }).createValidators({ float: true });

      validators.float(targetValue);

      expect(isDecimal.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Positive
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("POSITIVE RULE", function() {
    it('should call "isPositiveNumber" checker,', function() {
      const isPositiveNumber = sinon.spy();
      const validators = createNumberOperator({ isPositiveNumber }).createValidators({ positive: true });

      validators.positive(targetValue);

      expect(isPositiveNumber.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Negative
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NEGATIVE RULE", function() {
    it('should call "isNegativeNumber" checker,', function() {
      const isNegativeNumber = sinon.spy();
      const validators = createNumberOperator({ isNegativeNumber }).createValidators({ negative: true });

      validators.negative(targetValue);

      expect(isNegativeNumber.calledOnceWith(targetValue)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Digits Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("DIGITS RULE", function() {
    context("when an expected number of digits is number,", function() {
      it('should call "hasDigits" checker,', function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const digits = 3;
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        validators.digits(targetValue);

        expect(hasDigits.calledOnceWith(targetValue, digits)).to.be.true;
        expect(isWithinDigitsRange.calledOnceWith(targetValue, digits)).to.be.false;
      });
    });

    context("when an expected number of digits is array,", function() {
      it('should call "isWithinDigitsRange" checker,', function() {
        const hasDigits = sinon.spy();
        const isWithinDigitsRange = sinon.spy();
        const digits: [number, number] = [2, 4];
        const validators = createNumberOperator({ hasDigits, isWithinDigitsRange }).createValidators({ digits });

        validators.digits(targetValue);

        expect(hasDigits.calledOnceWith(targetValue, digits)).to.be.false;
        expect(isWithinDigitsRange.calledOnceWith(targetValue, digits)).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Maximum Digits
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MAXIMUM DIGITS RULE", function() {
    it('should call "isWithinDigitsRange" checker with an expected maximum number of digits,', function() {
      const isWithinDigitsRange = sinon.spy();
      const maximumDigits = 4;
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ maximumDigits });

      validators.maximumDigits(targetValue);

      expect(isWithinDigitsRange.calledOnceWith(targetValue, [undefined, maximumDigits])).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Minimum Digits
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MINIMUM DIGITS RULE", function() {
    it('should call "isWithinDigitsRange" checker with an expected minimum number of digits,', function() {
      const isWithinDigitsRange = sinon.spy();
      const minimumDigits = 2;
      const validators = createNumberOperator({ isWithinDigitsRange }).createValidators({ minimumDigits });

      validators.minimumDigits(targetValue);

      expect(isWithinDigitsRange.calledOnceWith(targetValue, [minimumDigits, undefined])).to.be.true;
    });
  });
});
