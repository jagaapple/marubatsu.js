// =============================================================================================================================
// SRC - OPERATORS - EMPTY OPERATOR TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createEmptyOperator } from "./empty-operator";

describe("[ Empty Operator ]", function() {
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
  // Empty Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EMPTY RULE", function() {
    it('should be "isEmpty" checker', function() {
      const isEmpty = sinon.spy();
      const validators = createEmptyOperator({ isEmpty }).createValidators();

      expect(validators.empty).to.eq(isEmpty);
    });
  });
});
