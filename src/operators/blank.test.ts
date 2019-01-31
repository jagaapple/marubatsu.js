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
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    it("should return true", function() {
      const validators = createBlankOperator()();

      expect(validators.type(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Blank Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("BLANK RULE", function() {
    it('should be "isBlank" checker', function() {
      const isBlank = sinon.spy();
      const validators = createBlankOperator({ isBlank })();

      expect(validators.blank).to.eq(isBlank);
    });
  });
});
