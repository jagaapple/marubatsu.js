// =============================================================================================================================
// SRC - OPERATORS - NULLARY TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import * as sinon from "sinon";
import { createNullaryOperator } from "./nullary";

describe("[ Nullary ]", function() {
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    it("should return true", function() {
      const validators = createNullaryOperator()();

      expect(validators.type(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Nullary Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NULlARY RULE", function() {
    it('should be "isNullary" checker', function() {
      const spy = sinon.spy();
      const validators = createNullaryOperator({ isNullary: spy })();

      expect(validators.nullary).to.eq(spy);
    });
  });
});
