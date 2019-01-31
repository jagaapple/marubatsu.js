// =============================================================================================================================
// SRC - OPERATORS - NULLARY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createNullaryOperator } from "./nullary";

describe("[ Nullary Operator ]", function() {
  const example = it;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "nullary"', function() {
      const name = createNullaryOperator().name;

      expect(name).to.eq("nullary");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createNullaryOperator().createValidators();

    example("an expected value should be undefined", function() {
      expect(validators.type.expected).to.be.undefined;
    });

    example("an executor should return true", function() {
      expect(validators.type.executor(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Nullary Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NULLARY RULE", function() {
    example("an expected value should be true", function() {
      const validators = createNullaryOperator().createValidators();

      expect(validators.nullary.expected).to.be.true;
    });

    example('an executor should be "isNullary" checker', function() {
      const isNullary = sinon.spy();
      const validators = createNullaryOperator({ isNullary }).createValidators();

      expect(validators.nullary.executor).to.eq(isNullary);
    });
  });
});
