// =============================================================================================================================
// SRC - OPERATORS - EMPTY TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import * as sinon from "sinon";
import { createEmptyOperator } from "./empty";

describe("[ Empty ]", function() {
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    it("should return true", function() {
      const validators = createEmptyOperator()();

      expect(validators.type(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Empty Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EMPTY RULE", function() {
    it('should be "isEmpty" checker', function() {
      const spy = sinon.spy();
      const validators = createEmptyOperator({ isEmpty: spy })();

      expect(validators.empty).to.eq(spy);
    });
  });
});
