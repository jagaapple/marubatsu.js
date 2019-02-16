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
      context('when "modifierType" is undefined,', function() {
        it('should have "should be null or undefined" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined)).to.have.string("should be null or undefined");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be null or undefined" word', function() {
          expect(errorMessageCreators.type(dummySubject, undefined, undefined, "not")).to.have.string(
            "should not be null or undefined",
          );
        });
      });
    });
  });
});
