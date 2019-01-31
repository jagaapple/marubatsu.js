// =============================================================================================================================
// SRC - EXECUTORS - TEST TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { test } from "./test";

describe("[ Test Executor ]", function() {
  const targetValue = 123;
  afterEach(function() {
    sinon.restore();
  });

  context("when all validation executors return true,", function() {
    let validatorExecutor1: sinon.SinonStub;
    let validatorExecutor2: sinon.SinonStub;
    let validatorExecutor3: sinon.SinonStub;
    let validators: any;
    beforeEach(function() {
      validatorExecutor1 = sinon.stub().returns(true);
      validatorExecutor2 = sinon.stub().returns(true);
      validatorExecutor3 = sinon.stub().returns(true);

      validators = {
        a: validatorExecutor1,
        b: validatorExecutor2,
        c: validatorExecutor3,
      } as any;
    });

    it("should return true", function() {
      expect(test(validators, targetValue)).to.be.true;
    });

    it("should call all validation executors", function() {
      test(validators, targetValue);

      expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.true;
    });
  });

  context("when one of validation executors returns false,", function() {
    let validatorExecutor1: sinon.SinonStub;
    let validatorExecutor2: sinon.SinonStub;
    let validatorExecutor3: sinon.SinonStub;
    let validators: any;
    beforeEach(function() {
      validatorExecutor1 = sinon.stub().returns(true);
      validatorExecutor2 = sinon.stub().returns(false);
      validatorExecutor3 = sinon.stub().returns(true);

      validators = {
        a: validatorExecutor1,
        b: validatorExecutor2,
        c: validatorExecutor3,
      } as any;
    });

    it("should return false", function() {
      expect(test(validators, targetValue)).to.be.false;
    });

    it("should stop to call validation executors when an executor returns false", function() {
      test(validators, targetValue);

      expect(validatorExecutor1.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor2.calledOnceWith(targetValue)).to.be.true;
      expect(validatorExecutor3.calledOnceWith(targetValue)).to.be.false;
    });
  });
});
