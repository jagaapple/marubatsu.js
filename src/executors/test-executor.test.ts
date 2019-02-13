// =============================================================================================================================
// SRC - EXECUTORS - TEST EXECUTOR TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { Validators } from "@operators/index";
import { test } from "./test-executor";

describe("[ Test Executor ]", function() {
  const targetValue = 123;
  afterEach(function() {
    sinon.restore();
  });

  context('when all validation executor\'s "isPassed" return true,', function() {
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
    let validatorExecutor1: sinon.SinonStub;
    let validatorExecutor2: sinon.SinonStub;
    let validatorExecutor3: sinon.SinonStub;
    let validators: Validators;
    beforeEach(function() {
      validatorExecutor1 = sinon.stub().returns({ isPassed: true, expected: 1, actual: 1 });
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
});
