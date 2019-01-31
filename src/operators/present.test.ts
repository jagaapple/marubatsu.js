// =============================================================================================================================
// SRC - OPERATORS - PRESENT TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createPresentOperator } from "./present";

describe("[ Present Operator ]", function() {
  const example = it;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "present"', function() {
      const name = createPresentOperator().name;

      expect(name).to.eq("present");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createPresentOperator().createValidators();

    example("an expected value should be undefined", function() {
      expect(validators.type.expected).to.be.undefined;
    });

    example("an executor should return true", function() {
      expect(validators.type.executor(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Present Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("PRESENT RULE", function() {
    example("an expected value should be true", function() {
      const validators = createPresentOperator().createValidators();

      expect(validators.present.expected).to.be.true;
    });

    example('an executor should call "isBlank" checker', function() {
      const isBlank = sinon.spy();
      const validators = createPresentOperator({ isBlank }).createValidators();

      const argumentValue = 123;
      validators.present.executor(argumentValue);

      expect(isBlank.calledOnce).to.be.true;
      expect(isBlank.calledWith(argumentValue)).to.be.true;
    });

    example('an executor should return an inverted value returned from "isBlank" checker', function() {
      const isBlank = sinon.stub();
      const validators = createPresentOperator({ isBlank }).createValidators();

      isBlank.returns(true);
      expect(validators.present.executor(undefined)).to.be.false;

      isBlank.returns(false);
      expect(validators.present.executor(undefined)).to.be.true;
    });
  });
});
