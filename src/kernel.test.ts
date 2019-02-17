// =============================================================================================================================
// SRC - KERNEL TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import * as operators from "@operators/index";
import * as executors from "@executors/index";
import { Kernel } from "./kernel";

describe("[ Kernel ]", function() {
  const example = it;
  let instance: Kernel;
  const operatorName = "dummyOperator";
  beforeEach(function() {
    instance = new Kernel();
  });
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // REGITER OPERATOR (PRIVATE API)
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("REGISTER OPERATOR (PRIVATE API) ::", function() {
    const validators = {
      dummyValidator1: (value: any) => ({ isPassed: true, expected: 1, actual: value }),
    };

    it("should register to managed validators", function() {
      (instance as any).registerOperator(operatorName, validators);

      const validatorsByOperatorName = (instance as any).validatorsByOperatorName;
      expect(Object.keys(validatorsByOperatorName).length).to.eq(1);
      expect(Object.keys(validatorsByOperatorName[operatorName]).length).to.eq(1);
      expect(validatorsByOperatorName[operatorName]).to.eql(validators);
    });

    it("should merge new validators with the same operator's validators", function() {
      const newVlaidators = {
        dummyValidator2: (value: any) => ({ isPassed: true, expected: 2, actual: value }),
      };
      (instance as any).registerOperator(operatorName, validators);
      (instance as any).registerOperator(operatorName, newVlaidators);

      const validatorsByOperatorName = (instance as any).validatorsByOperatorName;
      expect(Object.keys(validatorsByOperatorName).length).to.eq(1);
      expect(Object.keys(validatorsByOperatorName[operatorName]).length).to.eq(2);
      expect(validatorsByOperatorName[operatorName]).to.eql({ ...validators, ...newVlaidators });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // REGITER MODIFIER (PRIVATE API)
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("REGISTER MODIFIER (PRIVATE API) ::", function() {
    const validators = {
      dummyValidator1: (value: any) => ({ isPassed: true, expected: 1, actual: value }),
    };

    it("should register to managed modifiers at the number count of validators index", function() {
      const modifiersByOperatorIndex = (instance as any).modifiersByOperatorIndex;

      const modifier0 = sinon.stub().returns({ isPassed: true, modifierType: "modifier0", expected: 0, catual: 0 });
      (instance as any).registerModifier(modifier0);
      expect(modifiersByOperatorIndex.length).to.eq(1);
      expect(modifiersByOperatorIndex[0].length).to.eq(1);
      expect(modifiersByOperatorIndex[0][0]).to.eql(modifier0);

      const modifier1 = sinon.stub().returns({ isPassed: true, modifierType: "modifier1", expected: 1, catual: 1 });
      const modifier2 = sinon.stub().returns({ isPassed: true, modifierType: "modifier2", expected: 2, catual: 2 });
      const modifier3 = sinon.stub().returns({ isPassed: true, modifierType: "modifier3", expected: 3, catual: 3 });
      (instance as any).registerOperator(operatorName, validators);
      (instance as any).registerModifier(modifier1);
      (instance as any).registerModifier(modifier2);
      (instance as any).registerModifier(modifier3);
      expect(modifiersByOperatorIndex.length).to.eq(2);
      expect(modifiersByOperatorIndex[1].length).to.eq(3);
      expect(modifiersByOperatorIndex[1][0]).to.eql(modifier1);
      expect(modifiersByOperatorIndex[1][1]).to.eql(modifier2);
      expect(modifiersByOperatorIndex[1][2]).to.eql(modifier3);
    });

    context("when register modifiers already registered", function() {
      it("should push the modifiers", function() {
        const modifiersByOperatorIndex = (instance as any).modifiersByOperatorIndex;

        const modifier = sinon.stub().returns({ isPassed: true, modifierType: "modifier", expected: 0, catual: 0 });
        (instance as any).registerModifier(modifier);
        (instance as any).registerModifier(modifier);
        (instance as any).registerModifier(modifier);

        expect(modifiersByOperatorIndex.length).to.eq(1);
        expect(modifiersByOperatorIndex[0].length).to.eq(3);
        expect(modifiersByOperatorIndex[0][0]).to.eql(modifier);
        expect(modifiersByOperatorIndex[0][1]).to.eql(modifier);
        expect(modifiersByOperatorIndex[0][2]).to.eql(modifier);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // TEST
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TEST ::", function() {
    const operatorName1 = "dummyOperator1";
    const operatorName2 = "dummyOperator2";
    const operatorName3 = "dummyOperator3";
    const operatorName4 = "dummyOperator4";
    const validators = {
      dummyValidator1: (value: any) => ({ isPassed: true, expected: 1, actual: value }),
      dummyValidator2: (value: any) => ({ isPassed: true, expected: 2, actual: value }),
      dummyValidator3: (value: any) => ({ isPassed: true, expected: 3, actual: value }),
    };

    it('should call "test" executor with validators and value', function() {
      (instance as any).registerOperator(operatorName, validators);

      const stub = sinon.stub(executors, "test").returns(true);
      const targetValue = 123;

      instance.test(targetValue);

      expect(stub.calledWith(targetValue, validators)).to.be.true;
    });

    context('when all "test" executors return true,', function() {
      let stub: sinon.SinonStub;
      beforeEach(function() {
        (instance as any).registerOperator(operatorName1, validators);
        (instance as any).registerOperator(operatorName2, validators);
        (instance as any).registerOperator(operatorName3, validators);
        (instance as any).registerOperator(operatorName4, validators);

        stub = sinon.stub(executors, "test");
        stub.onCall(0).returns(true);
        stub.onCall(1).returns(true);
        stub.onCall(2).returns(true);
        stub.onCall(3).returns(true);
      });

      it("should call numer of registered operators times", function() {
        instance.test(123);

        expect(stub.callCount).to.eq(4);
      });

      it("should return true", function() {
        expect(instance.test(123)).to.be.true;
      });
    });

    context('when some of "test" executors return false,', function() {
      let stub: sinon.SinonStub;
      beforeEach(function() {
        (instance as any).registerOperator(operatorName1, validators);
        (instance as any).registerOperator(operatorName2, validators);
        (instance as any).registerOperator(operatorName3, validators);
        (instance as any).registerOperator(operatorName4, validators);

        stub = sinon.stub(executors, "test");
        stub.onCall(0).returns(true);
        stub.onCall(1).returns(false);
        stub.onCall(2).returns(false);
        stub.onCall(3).returns(true);
      });

      it("should stop to call executors when an executor returns false", function() {
        instance.test(123);
        expect(stub.callCount).to.eq(2);
      });

      it("should return false", function() {
        expect(instance.test(123)).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // VALIDATE
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("VALIDATE ::", function() {
    const operatorName1 = "dummyOperator1";
    const operatorName2 = "dummyOperator2";
    const operatorName3 = "dummyOperator3";
    const operatorName4 = "dummyOperator4";
    const validators = {
      dummyValidator1: (value: any) => ({ isPassed: true, expected: 1, actual: value }),
      dummyValidator2: (value: any) => ({ isPassed: true, expected: 2, actual: value }),
      dummyValidator3: (value: any) => ({ isPassed: true, expected: 3, actual: value }),
    };

    context("proper error message creators exist,", function() {
      const operatorMessageCreators = {
        [operatorName]: {
          error: {
            bar: (subject: string) => `The ${subject} is invalid.`,
          },
        },
      };
      beforeEach(function() {
        sinon.stub(operators, "builtInOperatorMessageCreators").value(operatorMessageCreators);
      });

      it('should call "validate" executor with operator name, validators, value, and error message creators', function() {
        (instance as any).registerOperator(operatorName, validators);

        const stub = sinon.stub(executors, "validate").returns({ isPassed: true });
        const targetValue = 123;

        instance.validate(123);

        expect(
          stub.calledWith(targetValue, validators, undefined, operatorName, operatorMessageCreators[operatorName].error),
        ).to.be.true;
      });
    });

    context("proper error message creators does not exist,", function() {
      const operatorMessageCreators = {
        foo: {
          error: {
            bar: (subject: string) => `The ${subject} is invalid.`,
          },
        },
      };
      beforeEach(function() {
        sinon.stub(operators, "builtInOperatorMessageCreators").value(operatorMessageCreators);
      });

      it('should call "validate" executor with operator name, validators, and value', function() {
        (instance as any).registerOperator(operatorName, validators);

        const stub = sinon.stub(executors, "validate").returns({ isPassed: true });
        const targetValue = 123;

        instance.validate(123);

        expect(stub.calledWith(targetValue, validators, undefined, operatorName, undefined)).to.be.true;
      });
    });

    context('when all "validate" executor\'s "isPassed" is true,', function() {
      let stub: sinon.SinonStub;
      beforeEach(function() {
        (instance as any).registerOperator(operatorName1, validators);
        (instance as any).registerOperator(operatorName2, validators);
        (instance as any).registerOperator(operatorName3, validators);
        (instance as any).registerOperator(operatorName4, validators);

        stub = sinon.stub(executors, "validate");
        stub.onCall(0).returns({ isPassed: true });
        stub.onCall(1).returns({ isPassed: true });
        stub.onCall(2).returns({ isPassed: true });
        stub.onCall(3).returns({ isPassed: true });
      });

      it("should call numer of registered operators times", function() {
        instance.validate(123);

        expect(stub.callCount).to.eq(4);
      });

      example('a returned object\'s "isPassed" is true', function() {
        expect(instance.validate(123).isPassed).to.be.true;
      });

      example('a returned object\'s "error" is undefined', function() {
        expect(instance.validate(123).error).to.be.undefined;
      });
    });

    context('when some of "validate" executor\'s "isPassed" is false,', function() {
      let stub: sinon.SinonStub;
      const firstErrorObject = { ruleName: "a", expected: 1, message: "abc" };
      const secondErrorObject = { ruleName: "b", expected: 1, message: "def" };
      beforeEach(function() {
        (instance as any).registerOperator(operatorName1, validators);
        (instance as any).registerOperator(operatorName2, validators);
        (instance as any).registerOperator(operatorName3, validators);
        (instance as any).registerOperator(operatorName4, validators);

        stub = sinon.stub(executors, "validate");
        stub.onCall(0).returns({ isPassed: true });
        stub.onCall(1).returns({ isPassed: false, error: firstErrorObject });
        stub.onCall(2).returns({ isPassed: false, error: secondErrorObject });
        stub.onCall(3).returns({ isPassed: true });
      });

      it('should stop to call executors when an executor\'s "isPassed" is false', function() {
        instance.validate(123);

        expect(stub.callCount).to.eq(2);
      });

      example('a returned object\'s "isPassed" is false', function() {
        expect(instance.validate(123).isPassed).to.be.false;
      });

      example('a returned object\'s "error" is the error object of the first executor returned value', function() {
        expect(instance.validate(123).error).to.eql(firstErrorObject);
      });
    });
  });
});
