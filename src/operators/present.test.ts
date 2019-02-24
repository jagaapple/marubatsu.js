// =============================================================================================================================
// SRC - OPERATORS - PRESENT TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createPresentOperator } from "./present";

describe("[ Present Operator ]", function() {
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
  // Present Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("PRESENT RULE", function() {
    it('should be "isPresent" checker', function() {
      const isPresent = sinon.spy();
      const validators = createPresentOperator({ isPresent }).createValidators();

      expect(validators.present).to.eq(isPresent);
    });
  });
});
