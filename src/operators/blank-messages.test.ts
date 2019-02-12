// =============================================================================================================================
// SRC - OPERATORS - BLANK MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./blank-messages";

describe("[ Blank Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "BLANK";

    describe("BLANK ::", function() {
      it('should have "should be blank" word', function() {
        expect(errorMessageCreators.blank(dummySubject, undefined, undefined)).to.have.string("should be blank");
      });
    });
  });
});
