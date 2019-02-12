// =============================================================================================================================
// SRC - OPERATORS - STRING MESSAGES TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { errorMessageCreators } from "./string-messages";

describe("[ String Messages ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Error Message Creators
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ERROR MESSAGE CREATORS ::", function() {
    const dummySubject = "STRING";
    const dummyActual = "ACTUAL";

    describe("VALUE ::", function() {
      it('should have "should be <EXPECTED>" word', function() {
        const dummyExpected = "abc";

        expect(errorMessageCreators.value(dummySubject, dummyActual, dummyExpected)).to.have.string(
          `should be ${dummyExpected}`,
        );
      });
    });

    describe("LENGTH ::", function() {
      context("an expected value is number,", function() {
        it('should not have "between" word', function() {
          expect(errorMessageCreators.length(dummySubject, dummyActual, 123)).not.to.have.string("between");
        });
      });

      context("an expected value is array,", function() {
        it('should have "between" word', function() {
          expect(errorMessageCreators.length(dummySubject, dummyActual, [1, 2])).to.have.string("between");
        });
      });
    });

    describe("MAXIMUM LENGTH ::", function() {
      it('should have "no more than" word', function() {
        expect(errorMessageCreators.maximumLength(dummySubject, dummyActual, 123)).to.have.string("no more than");
      });
    });

    describe("MINIMUM LENGTH ::", function() {
      it('should have "at least" word', function() {
        expect(errorMessageCreators.minimumLength(dummySubject, dummyActual, 123)).to.have.string("at least");
      });
    });

    describe("STARTS WITH ::", function() {
      it('should have "start with" word', function() {
        expect(errorMessageCreators.startsWith(dummySubject, dummyActual, "abc")).to.have.string("start with");
      });
    });

    describe("ENDS WITH ::", function() {
      it('should have "end with" word', function() {
        expect(errorMessageCreators.endsWith(dummySubject, dummyActual, "abc")).to.have.string("end with");
      });
    });

    describe("ALPHANUMERIC ::", function() {
      context("an expected value is true,", function() {
        it('should have"should be alphanumeric"', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, true)).to.have.string("should be alphanumeric");
        });
      });

      context("an expected value is 'lower-camel',", function() {
        it('should have "lowerCamelCase" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-camel")).to.have.string("lowerCamelCase");
        });
      });

      context("an expected value is 'upper-camel',", function() {
        it('should have "UpperCamelCase" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-camel")).to.have.string("UpperCamelCase");
        });
      });

      context("an expected value is 'lower-snake',", function() {
        it('should have "lower_snake_case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-snake")).to.have.string(
            "lower_snake_case",
          );
        });
      });

      context("an expected value is 'upper-snake',", function() {
        it('should have "Upper_Snake_Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-snake")).to.have.string(
            "Upper_Snake_Case",
          );
        });
      });

      context("an expected value is 'lower-kebab',", function() {
        it('should have "lower-kebab-case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-kebab")).to.have.string(
            "lower-kebab-case",
          );
        });
      });

      context("an expected value is 'upper-kebab',", function() {
        it('should have "Upper-Kebab-Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-kebab")).to.have.string(
            "Upper-Kebab-Case",
          );
        });
      });

      context("an expected value is 'lower-space',", function() {
        it('should have "lower space case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-space")).to.have.string(
            "lower space case",
          );
        });
      });

      context("an expected value is 'upper-space',", function() {
        it('should have "Upper Space Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-space")).to.have.string(
            "Upper Space Case",
          );
        });
      });

      context("an expected value is 'lower-dot',", function() {
        it('should have "lower.dot.case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-dot")).to.have.string("lower.dot.case");
        });
      });

      context("an expected value is 'upper-dot',", function() {
        it('should have "Upper.Dot.Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-dot")).to.have.string("Upper.Dot.Case");
        });
      });

      context("an expected value is unexpected,", function() {
        it("should be an empty string", function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "abc" as any)).to.be.empty;
        });
      });
    });

    describe("INCLUDES ::", function() {
      it('should have "include" word', function() {
        expect(errorMessageCreators.includes(dummySubject, dummyActual, "abc")).to.have.string("include");
      });
    });

    describe("PATTERN ::", function() {
      it('should have "conform the pattern" word', function() {
        expect(errorMessageCreators.pattern(dummySubject, dummyActual, /abc/)).to.have.string("conform the pattern");
      });
    });
  });
});
