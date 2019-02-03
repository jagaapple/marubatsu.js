// =============================================================================================================================
// SRC - OPERATORS - NULLARY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createNullaryOperator } from "./nullary";

describe("[ Nullary Operator ]", function() {
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
  // Nullary Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NULLARY RULE", function() {
    it('should be "isNullary" checker', function() {
      const isNullary = sinon.spy();
      const validators = createNullaryOperator({ isNullary }).createValidators();

      expect(validators.nullary).to.eq(isNullary);
    });
  });
});
