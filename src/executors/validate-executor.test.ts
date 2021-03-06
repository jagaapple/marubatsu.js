// =============================================================================================================================
// SRC - EXECUTORS - VALIDATE EXECUTOR TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { ErrorMessageCreators, Validators } from "@operators/index";
import { validate } from "./validate-executor";

describe("[ Validate Executor ]", function() {
  const example = it;
  const targetValue = 123;
  const operatorName = "string";
  let validatorExecutor1: sinon.SinonStub;
  let validatorExecutor2: sinon.SinonStub;
  let validatorExecutor3: sinon.SinonStub;
  let validators: Validators;
  let errorMessageCreators: ErrorMessageCreators<any>;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context('when all validation executor\'s "isPassed" return true,', function() {
      beforeEach(function() {
        validatorExecutor1 = sinon.stub().returns({ isPassed: true, expected: 1, actual: 1 });
        validatorExecutor2 = sinon.stub().returns({ isPassed: true, expected: 2, actual: 2 });
        validatorExecutor3 = sinon.stub().returns({ isPassed: true, expected: 3, actual: 3 });

        validators = { validatorExecutor1, validatorExecutor2, validatorExecutor3 };
      });

      it("should be true", function() {
        expect(validate(targetValue, validators, undefined, operatorName).isPassed).to.be.true;
      });

      it("should call all validation executors", function() {
        validate(targetValue, validators, undefined, operatorName);

        expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
        expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
        expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.true;
      });
    });

    context('when one ore more validation executor\'s "isPassed" return false,', function() {
      beforeEach(function() {
        validatorExecutor1 = sinon.stub().returns({ isPassed: true, expected: 1, actual: 1 });
        validatorExecutor2 = sinon.stub().returns({ isPassed: false, expected: 2, actual: 2 });
        validatorExecutor3 = sinon.stub().returns({ isPassed: false, expected: 3, actual: 3 });

        validators = { validatorExecutor1, validatorExecutor2, validatorExecutor3 };
      });

      it("should be false", function() {
        expect(validate(targetValue, validators, undefined, operatorName).isPassed).to.be.false;
      });

      it("should stop to call validation executors when an executor returns false", function() {
        validate(targetValue, validators, undefined, operatorName);

        expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
        expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
        expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Error
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR ::", function() {
    context('when all validation executor\'s "isPassed" return true,', function() {
      beforeEach(function() {
        validatorExecutor1 = sinon.stub().returns({ isPassed: true, expected: 0, actual: 0 });
        validatorExecutor2 = sinon.stub().returns({ isPassed: true, expected: 0, actual: 0 });
        validatorExecutor3 = sinon.stub().returns({ isPassed: true, expected: 0, actual: 0 });

        validators = {
          a: validatorExecutor1,
          b: validatorExecutor2,
          c: validatorExecutor3,
        };
      });

      it("should be undefined", function() {
        const error = validate(targetValue, validators, undefined, operatorName).error;

        expect(error).to.be.undefined;
      });
    });

    context('when one ore more validation executor\'s "isPassed" return false,', function() {
      const validatorExecutor1Result = { isPassed: true, expected: 1, actual: 1 };
      const validatorExecutor2Result = { isPassed: false, expected: 2, actual: 2 };
      const validatorExecutor3Result = { isPassed: false, expected: 3, actual: 3 };
      beforeEach(function() {
        validatorExecutor1 = sinon.stub().returns(validatorExecutor1Result);
        validatorExecutor2 = sinon.stub().returns(validatorExecutor2Result);
        validatorExecutor3 = sinon.stub().returns(validatorExecutor3Result);

        validators = { validatorExecutor1, validatorExecutor2, validatorExecutor3 };

        errorMessageCreators = {
          validatorExecutor2: (subject: string, actual: any, expected: string) =>
            `This is dummy message. The ${subject} should be ${actual}, but ${expected}.`,
        };
      });

      example('"ruleName" property of an error object should be the format <OPERATOR_NAME>-<RULE_NAME>', function() {
        const error = validate(targetValue, validators, undefined, operatorName).error!;

        expect(error.ruleName).to.be.eq(`${operatorName}-${Object.keys(validators)[1]}`);
      });

      example('"expected" property of an error object should be "expected" property of the rule throws an error', function() {
        const error = validate(targetValue, validators, undefined, operatorName).error!;

        expect(error.expected).to.be.eq(validatorExecutor2Result.expected);
      });

      example('"expected" property of an error object should be "actual" property of the rule throws an error', function() {
        const error = validate(targetValue, validators, undefined, operatorName).error!;

        expect(error.actual).to.be.eq(validatorExecutor2Result.actual);
      });

      context("error message creators include the same rule name property,", function() {
        const result = validatorExecutor2Result;

        context("the subject is set,", function() {
          example('"message" property of an error object should be an error message created by creators', function() {
            const subject = "dummy subject";
            const error = validate(targetValue, validators, undefined, operatorName, errorMessageCreators, subject).error!;

            expect(error.message).to.have.string("This is dummy message.");
            expect(error.message).to.have.string(`The ${subject} should be ${result.actual}, but ${result.expected}.`);
          });
        });

        context("the subject is not set,", function() {
          example('the subject of "message" property should be "value"', function() {
            const error = validate(targetValue, validators, undefined, operatorName, errorMessageCreators).error!;

            expect(error.message).to.have.string(`The value should be ${result.actual}, but ${result.expected}.`);
          });
        });
      });

      context("error message creators does not include the same rule name property,", function() {
        example('"message" property of an error object should be the default error message', function() {
          const error = validate(targetValue, validators, undefined, operatorName).error!;

          expect(error.message).to.eq("The error message is not set yet.");
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Modifiers
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("MODIFIERS ::", function() {
    const validatorExecutor1ReturendValue = { isPassed: true, expected: 1, actual: 1 };
    const modifier1ReturnedValue = { isPassed: true, modifierType: "modifier1", expected: 1, catual: 1 };
    let modifier1: sinon.SinonStub;
    const modifier2ReturnedValue = { isPassed: true, modifierType: "modifier2", expected: 2, catual: 2 };
    let modifier2: sinon.SinonStub;
    const modifier3ReturnedValue = { isPassed: true, modifierType: "modifier3", expected: 3, catual: 3 };
    let modifier3: sinon.SinonStub;
    let modifiers: sinon.SinonStub[];
    beforeEach(function() {
      validatorExecutor1 = sinon.stub().returns(validatorExecutor1ReturendValue);
      validators = { validatorExecutor1 };

      modifier1 = sinon.stub().returns(modifier1ReturnedValue);
      modifier2 = sinon.stub().returns(modifier2ReturnedValue);
      modifier3 = sinon.stub().returns(modifier3ReturnedValue);
      modifiers = [modifier1, modifier2, modifier3];
    });

    it("should call the modifiers in inverse order", function() {
      validate(targetValue, validators, modifiers, operatorName);

      expect(modifier3.calledOnceWith(validatorExecutor1ReturendValue)).to.be.true;
      expect(modifier2.calledAfter(modifier3)).to.be.true;
      expect(modifier2.calledOnceWith(modifier3ReturnedValue)).to.be.true;
      expect(modifier1.calledAfter(modifier2)).to.be.true;
      expect(modifier1.calledOnceWith(modifier2ReturnedValue)).to.be.true;
    });

    context('one or more modifier returned "isPassed" is false,', function() {
      const modifierFailedReturnedValue = { isPassed: false, modifierType: "failed-modifier", expected: 0, catual: 0 };
      beforeEach(function() {
        modifier1 = sinon.stub().returns(modifierFailedReturnedValue);
        modifier2 = sinon.stub().returns(modifierFailedReturnedValue);
        modifiers = [modifier1, modifier2, modifier3];
      });

      it("should all modifiers", function() {
        validate(targetValue, validators, modifiers, operatorName);

        expect(modifier3.calledOnce).to.be.true;
        expect(modifier2.calledOnce).to.be.true;
        expect(modifier1.calledOnce).to.be.true;
      });
    });
  });
});
