// =============================================================================================================================
// SRC - CHECKERS - SPACE CASE TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isSpaceCase } from "./space-case";

describe("[ Space Case Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isSpaceCase(undefined, false).isPassed).to.be.false;
        expect(isSpaceCase(undefined, true).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isSpaceCase(null, false).isPassed).to.be.false;
        expect(isSpaceCase(null, true).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isSpaceCase(0, false).isPassed).to.be.true;
          expect(isSpaceCase(0, true).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isSpaceCase(1, false).isPassed).to.be.true;
          expect(isSpaceCase(1, true).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isSpaceCase(-1, false).isPassed).to.be.false;
          expect(isSpaceCase(-1, true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isSpaceCase("", false).isPassed).to.be.true;
          expect(isSpaceCase("", true).isPassed).to.be.true;
        });
      });

      context("a lower camel case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("lowerCamelCase", false).isPassed).to.be.false;
          expect(isSpaceCase("lowerCCamel", false).isPassed).to.be.false;
          expect(isSpaceCase("000LowerCamelCase", false).isPassed).to.be.false;
          expect(isSpaceCase("lowerCamelCase", true).isPassed).to.be.false;
          expect(isSpaceCase("lowerCCamel", true).isPassed).to.be.false;
          expect(isSpaceCase("000LowerCamelCase", true).isPassed).to.be.false;
        });
      });

      context("an upper camel case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("UpperCamelCase", false).isPassed).to.be.false;
          expect(isSpaceCase("UpperCCamel", false).isPassed).to.be.false;
          expect(isSpaceCase("000UpperCamelCase", false).isPassed).to.be.false;
          expect(isSpaceCase("UpperCamelCase", true).isPassed).to.be.false;
          expect(isSpaceCase("UpperCCamel", true).isPassed).to.be.false;
          expect(isSpaceCase("000UpperCamelCase", true).isPassed).to.be.false;
        });
      });

      context("a lower snake case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("0_0", false).isPassed).to.be.false;
          expect(isSpaceCase("lower_snake_case", false).isPassed).to.be.false;
          expect(isSpaceCase("_lower_snake_case", false).isPassed).to.be.false;
          expect(isSpaceCase("lower_snake_case_", false).isPassed).to.be.false;
          expect(isSpaceCase("lower__snake", false).isPassed).to.be.false;
          expect(isSpaceCase("0_lower_snake_case", false).isPassed).to.be.false;
          expect(isSpaceCase("0_0", true).isPassed).to.be.false;
          expect(isSpaceCase("lower_snake_case", true).isPassed).to.be.false;
          expect(isSpaceCase("_lower_snake_case", true).isPassed).to.be.false;
          expect(isSpaceCase("lower_snake_case_", true).isPassed).to.be.false;
          expect(isSpaceCase("lower__snake", true).isPassed).to.be.false;
          expect(isSpaceCase("0_lower_snake_case", true).isPassed).to.be.false;
        });
      });

      context("an upper snake case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isSpaceCase("_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper_Snake_Case_", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper__Snake", false).isPassed).to.be.false;
          expect(isSpaceCase("0_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isSpaceCase("_Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper_Snake_Case_", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper__Snake", true).isPassed).to.be.false;
          expect(isSpaceCase("0_Upper_Snake_Case", true).isPassed).to.be.false;
        });
      });

      context("a lower kebab case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("0-0", false).isPassed).to.be.false;
          expect(isSpaceCase("lower-kebab-case", false).isPassed).to.be.false;
          expect(isSpaceCase("-lower-kebab-case", false).isPassed).to.be.false;
          expect(isSpaceCase("lower-kebab-case-", false).isPassed).to.be.false;
          expect(isSpaceCase("lower--kebab", false).isPassed).to.be.false;
          expect(isSpaceCase("0-lower-kebab-case", false).isPassed).to.be.false;
          expect(isSpaceCase("0-0", true).isPassed).to.be.false;
          expect(isSpaceCase("lower-kebab-case", true).isPassed).to.be.false;
          expect(isSpaceCase("-lower-kebab-case", true).isPassed).to.be.false;
          expect(isSpaceCase("lower-kebab-case-", true).isPassed).to.be.false;
          expect(isSpaceCase("lower--kebab", true).isPassed).to.be.false;
          expect(isSpaceCase("0-lower-kebab-case", true).isPassed).to.be.false;
        });
      });

      context("an upper kebab case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSpaceCase("-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper-Kebab-Case-", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper--Kebab", false).isPassed).to.be.false;
          expect(isSpaceCase("0-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isSpaceCase("-Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper-Kebab-Case-", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper--Kebab", true).isPassed).to.be.false;
          expect(isSpaceCase("0-Upper-Kebab-Case", true).isPassed).to.be.false;
        });
      });

      context("a lower space case,", function() {
        context('"isUpper" is false,', function() {
          it("should be true", function() {
            expect(isSpaceCase("0", false).isPassed).to.be.true;
            expect(isSpaceCase("0 0", false).isPassed).to.be.true;
            expect(isSpaceCase("short", false).isPassed).to.be.true;
            expect(isSpaceCase("lower space case", false).isPassed).to.be.true;
            expect(isSpaceCase(" lower space case", false).isPassed).to.be.false;
            expect(isSpaceCase("lower space case ", false).isPassed).to.be.false;
            expect(isSpaceCase("lower  space", false).isPassed).to.be.false;
            expect(isSpaceCase("0 lower space case", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be false", function() {
            expect(isSpaceCase("0", true).isPassed).to.be.true;
            expect(isSpaceCase("0 0", true).isPassed).to.be.true;
            expect(isSpaceCase("short", true).isPassed).to.be.false;
            expect(isSpaceCase("lower space case", true).isPassed).to.be.false;
            expect(isSpaceCase(" lower space case", true).isPassed).to.be.false;
            expect(isSpaceCase("lower space case ", true).isPassed).to.be.false;
            expect(isSpaceCase("lower  space", true).isPassed).to.be.false;
            expect(isSpaceCase("0 lower space case", true).isPassed).to.be.false;
          });
        });
      });

      context("an upper space case,", function() {
        context('"isUpper" is false,', function() {
          it("should be false", function() {
            expect(isSpaceCase("Short", false).isPassed).to.be.false;
            expect(isSpaceCase("Upper Space Case", false).isPassed).to.be.false;
            expect(isSpaceCase(" Upper Space Case", false).isPassed).to.be.false;
            expect(isSpaceCase("Upper Space Case ", false).isPassed).to.be.false;
            expect(isSpaceCase("Upper  Space", false).isPassed).to.be.false;
            expect(isSpaceCase("0 Upper Space Case", false).isPassed).to.be.false;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be true", function() {
            expect(isSpaceCase("Short", true).isPassed).to.be.true;
            expect(isSpaceCase("Upper Space Case", true).isPassed).to.be.true;
            expect(isSpaceCase(" Upper Space Case", true).isPassed).to.be.false;
            expect(isSpaceCase("Upper Space Case ", true).isPassed).to.be.false;
            expect(isSpaceCase("Upper  Space", true).isPassed).to.be.false;
            expect(isSpaceCase("0 Upper Space Case", true).isPassed).to.be.true;
          });
        });
      });

      context("a lower dot case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("0.0", false).isPassed).to.be.false;
          expect(isSpaceCase("lower.dot.case", false).isPassed).to.be.false;
          expect(isSpaceCase(".lower.dot.case", false).isPassed).to.be.false;
          expect(isSpaceCase("lower.dot.case.", false).isPassed).to.be.false;
          expect(isSpaceCase("lower..dot", false).isPassed).to.be.false;
          expect(isSpaceCase("0.lower.dot.case", false).isPassed).to.be.false;
          expect(isSpaceCase("0.0", true).isPassed).to.be.false;
          expect(isSpaceCase("lower.dot.case", true).isPassed).to.be.false;
          expect(isSpaceCase(".lower.dot.case", true).isPassed).to.be.false;
          expect(isSpaceCase("lower.dot.case.", true).isPassed).to.be.false;
          expect(isSpaceCase("lower..dot", true).isPassed).to.be.false;
          expect(isSpaceCase("0.lower.dot.case", true).isPassed).to.be.false;
        });
      });

      context("an upper dot case,", function() {
        it("should be false", function() {
          expect(isSpaceCase("Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSpaceCase(".Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper.Dot.Case.", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper..Dot", false).isPassed).to.be.false;
          expect(isSpaceCase("0.Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSpaceCase("Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isSpaceCase(".Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper.Dot.Case.", true).isPassed).to.be.false;
          expect(isSpaceCase("Upper..Dot", true).isPassed).to.be.false;
          expect(isSpaceCase("0.Upper.Dot.Case", true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isSpaceCase(true, false).isPassed).to.be.false;
        expect(isSpaceCase(true, true).isPassed).to.be.false;
        expect(isSpaceCase(false, false).isPassed).to.be.false;
        expect(isSpaceCase(false, true).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isSpaceCase([], false).isPassed).to.be.false;
        expect(isSpaceCase([], true).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isSpaceCase({}, false).isPassed).to.be.false;
        expect(isSpaceCase({}, true).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isSpaceCase(() => true, false).isPassed).to.be.false;
        expect(isSpaceCase(() => true, true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context('when "isUpper" is false,', function() {
      it('should be "lower-space-case"', function() {
        expect(isSpaceCase("abc def", false).expected).to.eq("lower-space-case");
      });
    });

    context('when "isUpper" is true,', function() {
      it('should be "upper-space-case"', function() {
        expect(isSpaceCase("Abc Def", true).expected).to.eq("upper-space-case");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isSpaceCase(value, true).actual).to.eq(value);
        expect(isSpaceCase(value, false).actual).to.eq(value);
      });
    });
  });
});
