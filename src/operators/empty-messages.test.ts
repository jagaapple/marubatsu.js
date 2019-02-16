// =============================================================================================================================
// SRC - OPERATORS - EMPTY MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./empty-messages";

describe("[ Empty Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "EMPTY";

    describe("EMPTY ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should be empty" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined)).to.have.string("should be empty");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be empty" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined, "not")).to.have.string("should not be empty");
        });
      });
    });
  });
});
