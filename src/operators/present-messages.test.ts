// =============================================================================================================================
// SRC - OPERATORS - PRESENT MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./present-messages";

describe("[ Present Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "PRESENT";

    describe("PRESENT ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should be present" word', function() {
          expect(errorMessageCreators.present(dummySubject, undefined, undefined)).to.have.string("should be present");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be present" word', function() {
          expect(errorMessageCreators.present(dummySubject, undefined, undefined, "not")).to.have.string(
            "should not be present",
          );
        });
      });
    });
  });
});
