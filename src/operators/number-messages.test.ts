// =============================================================================================================================
// SRC - OPERATORS - NUMBER MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./number-messages";

describe("[ String Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "NUMBER";
    const dummyActual = 123;

    describe("TYPE ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should be number" word', function() {
          expect(errorMessageCreators.type(dummySubject, dummyActual, true)).to.have.string("should be number");
        });
      });
      context('when "modifierType" is "not",', function() {
        it('should have "should not be number" word', function() {
          expect(errorMessageCreators.type(dummySubject, dummyActual, true, "not")).to.have.string("should not be number");
        });
      });
    });

    describe("VALUE ::", function() {
      context("an expected value is number,", function() {
        it('should have "should be <EXPECTED>" word', function() {
          const dummyExpected = 456;

          expect(errorMessageCreators.value(dummySubject, dummyActual, dummyExpected)).to.have.string(
            `should be ${dummyExpected}`,
          );
        });
      });

      context("an expected value is array,", function() {
        it('should have "between" word', function() {
          expect(errorMessageCreators.value(dummySubject, dummyActual, [100, 500])).to.have.string("between");
        });
      });
    });

    describe("MAXIMUM VALUE ::", function() {
      it('should have "no more than" word', function() {
        expect(errorMessageCreators.maximumValue(dummySubject, dummyActual, 123)).to.have.string("no more than");
      });
    });

    describe("MINIMUM VALUE ::", function() {
      it('should have "no less than" word', function() {
        expect(errorMessageCreators.minimumValue(dummySubject, dummyActual, 123)).to.have.string("no less than");
      });
    });

    describe("INTEGER ::", function() {
      it('should have "should be an integer number" word', function() {
        expect(errorMessageCreators.integer(dummySubject, dummyActual, true)).to.have.string("should be an integer number");
      });
    });

    describe("FLOAT ::", function() {
      it('should have "should have decimal" word', function() {
        expect(errorMessageCreators.float(dummySubject, dummyActual, true)).to.have.string("should have decimal");
      });
    });

    describe("POSITIVE ::", function() {
      it('should have "should be a positive number" word', function() {
        expect(errorMessageCreators.positive(dummySubject, dummyActual, true)).to.have.string("should be a positive number");
      });
    });

    describe("NEGATIVE ::", function() {
      it('should have "should be a negative number" word', function() {
        expect(errorMessageCreators.negative(dummySubject, dummyActual, true)).to.have.string("should be a negative number");
      });
    });

    describe("DIGITS ::", function() {
      context("an expected value is number,", function() {
        it('should have "should be <EXPECTED> number of digits" word', function() {
          const dummyExpected = 456;

          expect(errorMessageCreators.digits(dummySubject, dummyActual, dummyExpected)).to.have.string(
            `should be ${dummyExpected} number of digits`,
          );
        });
      });

      context("an expected value is array,", function() {
        it('should have "between" word', function() {
          expect(errorMessageCreators.digits(dummySubject, dummyActual, [1, 5])).to.have.string("between");
        });
      });
    });

    describe("MAXIMUM DIGITS ::", function() {
      it('should have "no more than" word', function() {
        expect(errorMessageCreators.maximumDigits(dummySubject, dummyActual, 3)).to.have.string("no more than");
      });
    });

    describe("MINIMUM DIGITS ::", function() {
      it('should have "no less than" word', function() {
        expect(errorMessageCreators.minimumDigits(dummySubject, dummyActual, 3)).to.have.string("no less than");
      });
    });
  });
});
