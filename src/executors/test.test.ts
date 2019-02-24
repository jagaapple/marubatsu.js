// =============================================================================================================================
// SRC - EXECUTORS - TEST TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { Validators } from "@operators/index";
import { test } from "./test";

describe("[ Test Executor ]", function() {
  const targetValue = 123;
  let validatorExecutor1: sinon.SinonStub;
  let validatorExecutor2: sinon.SinonStub;
  let validatorExecutor3: sinon.SinonStub;
  let validators: Validators;
  beforeEach(function() {
    validatorExecutor1 = sinon.stub().returns({ isPassed: true, expected: 1, actual: 1 });
    validatorExecutor2 = sinon.stub().returns({ isPassed: true, expected: 2, actual: 2 });
    validatorExecutor3 = sinon.stub().returns({ isPassed: true, expected: 3, actual: 3 });

    validators = { validatorExecutor1, validatorExecutor2, validatorExecutor3 };
  });
  afterEach(function() {
    sinon.restore();
  });

  context('when all validation executor\'s "isPassed" return true,', function() {
    it("should return true", function() {
      expect(test(targetValue, validators)).to.be.true;
    });

    it("should call all validation executors", function() {
      test(targetValue, validators);

      expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.true;
    });
  });

  context('when one ore more validation executor\'s "isPassed" return false,', function() {
    beforeEach(function() {
      validatorExecutor2 = sinon.stub().returns({ isPassed: false, expected: 2, actual: 2 });
      validatorExecutor3 = sinon.stub().returns({ isPassed: false, expected: 3, actual: 3 });

      validators = { validatorExecutor1, validatorExecutor2, validatorExecutor3 };
    });

    it("should return false", function() {
      expect(test(targetValue, validators)).to.be.false;
    });

    it("should stop to call validation executors when an executor returns false", function() {
      test(targetValue, validators);

      expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.false;
    });
  });

  context("when specifying modifiers,", function() {
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
      test(targetValue, validators, modifiers);

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
        test(targetValue, validators, modifiers);

        expect(modifier3.calledOnce).to.be.true;
        expect(modifier2.calledOnce).to.be.true;
        expect(modifier1.calledOnce).to.be.true;
      });
    });
  });
});
