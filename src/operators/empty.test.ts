// =============================================================================================================================
// SRC - OPERATORS - EMPTY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createEmptyOperator } from "./empty";

describe("[ Empty Operator ]", function() {
  const example = it;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "empty"', function() {
      const name = createEmptyOperator().name;

      expect(name).to.eq("empty");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createEmptyOperator().createValidators();

    example("an expected value should be undefined", function() {
      expect(validators.type.expected).to.be.undefined;
    });

    example("an executor should return true", function() {
      expect(validators.type.executor(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Empty Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EMPTY RULE", function() {
    example("an expected value should be true", function() {
      const validators = createEmptyOperator().createValidators();

      expect(validators.empty.expected).to.be.true;
    });

    example('an executor should be "isEmpty" checker', function() {
      const isEmpty = sinon.spy();
      const validators = createEmptyOperator({ isEmpty }).createValidators();

      expect(validators.empty.executor).to.eq(isEmpty);
    });
  });
});
