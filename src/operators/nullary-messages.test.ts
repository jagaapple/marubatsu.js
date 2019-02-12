// =============================================================================================================================
// SRC - OPERATORS - NULLARY MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./nullary-messages";

describe("[ Nullary Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "NULLARY";

    describe("NULLARY ::", function() {
      it('should have "should be null or undefined" word', function() {
        expect(errorMessageCreators.nullary(dummySubject, undefined, undefined)).to.have.string("should be null or undefined");
      });
    });
  });
});
