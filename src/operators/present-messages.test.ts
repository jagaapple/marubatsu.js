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
      it('should have "should be present" word', function() {
        expect(errorMessageCreators.present(dummySubject, undefined, undefined)).to.have.string("should be present");
      });
    });
  });
});
