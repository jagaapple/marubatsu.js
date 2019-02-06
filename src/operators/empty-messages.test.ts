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
      it('should have "should be empty" word', function() {
        expect(errorMessageCreators.empty(dummySubject, undefined, undefined)).to.have.string("should be empty");
      });
    });
  });
});
