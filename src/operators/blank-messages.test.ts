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
      context('when "modifierType" is undefined,', function() {
        it('should have "should be blank" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined)).to.have.string("should be blank");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be blank" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined, "not")).to.have.string("should not be blank");
        });
      });
    });
  });
});
