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
      context('when "modifierType" is undefined,', function() {
        it('should have "should be <EXPECTED>" word', function() {
          const dummyExpected = "abc";

          expect(errorMessageCreators.value(dummySubject, dummyActual, dummyExpected)).to.have.string(
            `should be ${dummyExpected}`,
          );
        });
      });
      context('when "modifierType" is "not",', function() {
        it('should have "should not be <EXPECTED>" word', function() {
          const dummyExpected = "abc";

          expect(errorMessageCreators.value(dummySubject, dummyActual, dummyExpected, "not")).to.have.string(
            `should not be ${dummyExpected}`,
          );
        });
      });
    });

    describe("LENGTH ::", function() {
      context("an expected value is number,", function() {
        context('"modifierType" is undefined,', function() {
          it('should not have "between" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, 123)).not.to.have.string("between");
          });

          it('should have "should be" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, 123)).to.have.string("should be");
          });
        });

        context('"modifierType" is "not",', function() {
          it('should not have "between" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, 123, "not")).not.to.have.string("between");
          });

          it('should have "should not be" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, 123, "not")).to.have.string("should not be");
          });
        });
      });

      context("an expected value is array,", function() {
        context('"modifierType" is undefined,', function() {
          it('should have "between" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, [1, 2])).to.have.string("between");
          });

          it('should have "should be" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, [1, 2])).to.have.string("should be");
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "between" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, [1, 2], "not")).to.have.string("between");
          });

          it('should have "should not be" word', function() {
            expect(errorMessageCreators.length(dummySubject, dummyActual, [1, 2], "not")).to.have.string("should not be");
          });
        });
      });
    });

    describe("MAXIMUM LENGTH ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should be no more than" word', function() {
          expect(errorMessageCreators.maximumLength(dummySubject, dummyActual, 123)).to.have.string("should be no more than");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be no more than" word', function() {
          expect(errorMessageCreators.maximumLength(dummySubject, dummyActual, 123, "not")).to.have.string(
            "should not be no more than",
          );
        });
      });
    });

    describe("MINIMUM LENGTH ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should be at least" word', function() {
          expect(errorMessageCreators.minimumLength(dummySubject, dummyActual, 123)).to.have.string("should be at least");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not be at least" word', function() {
          expect(errorMessageCreators.minimumLength(dummySubject, dummyActual, 123, "not")).to.have.string(
            "should not be at least",
          );
        });
      });
    });

    describe("STARTS WITH ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should start with" word', function() {
          expect(errorMessageCreators.startsWith(dummySubject, dummyActual, "abc")).to.have.string("should start with");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not start with" word', function() {
          expect(errorMessageCreators.startsWith(dummySubject, dummyActual, "abc", "not")).to.have.string(
            "should not start with",
          );
        });
      });
    });

    describe("ENDS WITH ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should end with" word', function() {
          expect(errorMessageCreators.endsWith(dummySubject, dummyActual, "abc")).to.have.string("should end with");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not end with" word', function() {
          expect(errorMessageCreators.endsWith(dummySubject, dummyActual, "abc", "not")).to.have.string("should not end with");
        });
      });
    });

    describe("ALPHANUMERIC ::", function() {
      context("an expected value is true,", function() {
        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, true)).to.have.string("should be alphanumeric");
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, true, "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'lower-camel',", function() {
        it('should have "lowerCamelCase" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-camel")).to.have.string("lowerCamelCase");
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-camel")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-camel", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'upper-camel',", function() {
        it('should have "UpperCamelCase" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-camel")).to.have.string("UpperCamelCase");
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-camel")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-camel", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'lower-snake',", function() {
        it('should have "lower_snake_case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-snake")).to.have.string(
            "lower_snake_case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-snake")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-snake", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'upper-snake',", function() {
        it('should have "Upper_Snake_Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-snake")).to.have.string(
            "Upper_Snake_Case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-snake")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-snake", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'lower-kebab',", function() {
        it('should have "lower-kebab-case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-kebab")).to.have.string(
            "lower-kebab-case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-kebab")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-kebab", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'upper-kebab',", function() {
        it('should have "Upper-Kebab-Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-kebab")).to.have.string(
            "Upper-Kebab-Case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-kebab")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-kebab", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'lower-space',", function() {
        it('should have "lower space case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-space")).to.have.string(
            "lower space case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-space")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-space", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'upper-space',", function() {
        it('should have "Upper Space Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-space")).to.have.string(
            "Upper Space Case",
          );
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-space")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-space", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'lower-dot',", function() {
        it('should have "lower.dot.case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-dot")).to.have.string("lower.dot.case");
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-dot")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "lower-dot", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is 'upper-dot',", function() {
        it('should have "Upper.Dot.Case" word', function() {
          expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-dot")).to.have.string("Upper.Dot.Case");
        });

        context('"modifierType" is undefined,', function() {
          it('should have "should be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-dot")).to.have.string(
              "should be alphanumeric",
            );
          });
        });

        context('"modifierType" is "not",', function() {
          it('should have "should not be alphanumeric"', function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "upper-dot", "not")).to.have.string(
              "should not be alphanumeric",
            );
          });
        });
      });

      context("an expected value is unexpected,", function() {
        context('"modifierType" is undefined,', function() {
          it("should be an empty string", function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "abc" as any)).to.be.empty;
          });
        });

        context('"modifierType" is "not",', function() {
          it("should be an empty string", function() {
            expect(errorMessageCreators.alphanumeric(dummySubject, dummyActual, "abc" as any, "not")).to.be.empty;
          });
        });
      });
    });

    describe("INCLUDES ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should include" word', function() {
          expect(errorMessageCreators.includes(dummySubject, dummyActual, "abc")).to.have.string("should include");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not include" word', function() {
          expect(errorMessageCreators.includes(dummySubject, dummyActual, "abc", "not")).to.have.string("should not include");
        });
      });
    });

    describe("PATTERN ::", function() {
      context('when "modifierType" is undefined,', function() {
        it('should have "should conform the pattern" word', function() {
          expect(errorMessageCreators.pattern(dummySubject, dummyActual, /abc/)).to.have.string("should conform the pattern");
        });
      });

      context('when "modifierType" is "not",', function() {
        it('should have "should not conform the pattern" word', function() {
          expect(errorMessageCreators.pattern(dummySubject, dummyActual, /abc/, "not")).to.have.string(
            "should not conform the pattern",
          );
        });
      });
    });
  });
});
