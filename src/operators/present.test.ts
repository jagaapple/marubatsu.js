// =============================================================================================================================
// SRC - OPERATORS - PRESENT TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import * as sinon from "sinon";
import { createPresentOperator } from "./present";

describe("[ Present ]", function() {
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    it("should return true", function() {
      const validators = createPresentOperator()();
      expect(validators.type(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Present Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("PRESENT RULE", function() {
    it('should call "isBlank" checker', function() {
      const spy = sinon.spy();
      const validators = createPresentOperator({ isBlank: spy })();

      const argumentValue = 123;
      validators.present(argumentValue);

      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(argumentValue)).to.be.true;
    });

    it('should return an inverted value returned from "isBlank" checker', function() {
      const stub = sinon.stub();
      const validators = createPresentOperator({ isBlank: stub })();

      stub.returns(true);
      expect(validators.present(undefined)).to.be.false;

      stub.returns(false);
      expect(validators.present(undefined)).to.be.true;
    });
  });
});
