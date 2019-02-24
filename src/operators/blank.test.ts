// =============================================================================================================================
// SRC - OPERATORS - BLANK TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createBlankOperator } from "./blank";

describe("[ Blank Operator ]", function() {
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Name
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("NAME", function() {
    it('should be "blank"', function() {
      const name = createBlankOperator().name;

      expect(name).to.eq("blank");
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Blank Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("BLANK RULE", function() {
    it('should be "isBlank" checker', function() {
      const isBlank = sinon.spy();
      const validators = createBlankOperator({ isBlank }).createValidators();

      expect(validators.blank).to.eq(isBlank);
    });
  });
});
