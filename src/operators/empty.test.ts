// =============================================================================================================================
// SRC - OPERATORS - EMPTY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createEmptyOperator } from "./empty";

describe("[ Empty Operator ]", function() {
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
      const isEmpty = sinon.spy();
      const validators = createEmptyOperator({ isEmpty })();

      expect(validators.empty).to.eq(isEmpty);
    });
  });
});
