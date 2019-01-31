// =============================================================================================================================
// SRC - OPERATORS - BLANK TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { createBlankOperator } from "./blank";

describe("[ Blank Operator ]", function() {
  const example = it;
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
  // Type Checking
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("TYPE CHECKING", function() {
    const validators = createBlankOperator().createValidators();

    example("an expected value should be undefined", function() {
      expect(validators.type.expected).to.be.undefined;
    });

    example("an executor should return true", function() {
      expect(validators.type.executor(undefined)).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Blank Rule
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("BLANK RULE", function() {
    example("an expected value should be true", function() {
      const validators = createBlankOperator().createValidators();

      expect(validators.blank.expected).to.be.true;
    });

    example('an executor should be "isBlank" checker', function() {
      const isBlank = sinon.spy();
      const validators = createBlankOperator({ isBlank }).createValidators();

      expect(validators.blank.executor).to.eq(isBlank);
    });
  });
});
