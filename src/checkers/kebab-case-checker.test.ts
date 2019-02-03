// =============================================================================================================================
// SRC - CHECKERS - KEBAB CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isKebabCase } from "./kebab-case-checker";

describe("[ Kebab Case Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isKebabCase(undefined, false).isPassed).to.be.false;
        expect(isKebabCase(undefined, true).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isKebabCase(null, false).isPassed).to.be.false;
        expect(isKebabCase(null, true).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isKebabCase(0, false).isPassed).to.be.true;
          expect(isKebabCase(0, true).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isKebabCase(1, false).isPassed).to.be.true;
          expect(isKebabCase(1, true).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isKebabCase(-1, false).isPassed).to.be.false;
          expect(isKebabCase(-1, true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isKebabCase("", false).isPassed).to.be.true;
          expect(isKebabCase("", true).isPassed).to.be.true;
        });
      });

      context("a lower camel case,", function() {
        it("should be false", function() {
          expect(isKebabCase("lowerCamelCase", false).isPassed).to.be.false;
          expect(isKebabCase("lowerCCamel", false).isPassed).to.be.false;
          expect(isKebabCase("000LowerCamelCase", false).isPassed).to.be.false;
          expect(isKebabCase("lowerCamelCase", true).isPassed).to.be.false;
          expect(isKebabCase("lowerCCamel", true).isPassed).to.be.false;
          expect(isKebabCase("000LowerCamelCase", true).isPassed).to.be.false;
        });
      });

      context("an upper camel case,", function() {
        it("should be false", function() {
          expect(isKebabCase("UpperCamelCase", false).isPassed).to.be.false;
          expect(isKebabCase("UpperCCamel", false).isPassed).to.be.false;
          expect(isKebabCase("000UpperCamelCase", false).isPassed).to.be.false;
          expect(isKebabCase("UpperCamelCase", true).isPassed).to.be.false;
          expect(isKebabCase("UpperCCamel", true).isPassed).to.be.false;
          expect(isKebabCase("000UpperCamelCase", true).isPassed).to.be.false;
        });
      });

      context("a lower snake case,", function() {
        it("should be false", function() {
          expect(isKebabCase("0_0", false).isPassed).to.be.false;
          expect(isKebabCase("lower_snake_case", false).isPassed).to.be.false;
          expect(isKebabCase("_lower_snake_case", false).isPassed).to.be.false;
          expect(isKebabCase("lower_snake_case_", false).isPassed).to.be.false;
          expect(isKebabCase("lower__snake", false).isPassed).to.be.false;
          expect(isKebabCase("0_lower_snake_case", false).isPassed).to.be.false;
          expect(isKebabCase("0_0", true).isPassed).to.be.false;
          expect(isKebabCase("lower_snake_case", true).isPassed).to.be.false;
          expect(isKebabCase("_lower_snake_case", true).isPassed).to.be.false;
          expect(isKebabCase("lower_snake_case_", true).isPassed).to.be.false;
          expect(isKebabCase("lower__snake", true).isPassed).to.be.false;
          expect(isKebabCase("0_lower_snake_case", true).isPassed).to.be.false;
        });
      });

      context("an upper snake case,", function() {
        it("should be false", function() {
          expect(isKebabCase("Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isKebabCase("_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper_Snake_Case_", false).isPassed).to.be.false;
          expect(isKebabCase("Upper__Snake", false).isPassed).to.be.false;
          expect(isKebabCase("0_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isKebabCase("_Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isKebabCase("Upper_Snake_Case_", true).isPassed).to.be.false;
          expect(isKebabCase("Upper__Snake", true).isPassed).to.be.false;
          expect(isKebabCase("0_Upper_Snake_Case", true).isPassed).to.be.false;
        });
      });

      context("a lower kebab case,", function() {
        context('"isUpper" is false,', function() {
          it("should be true", function() {
            expect(isKebabCase("0", false).isPassed).to.be.true;
            expect(isKebabCase("0-0", false).isPassed).to.be.true;
            expect(isKebabCase("short", false).isPassed).to.be.true;
            expect(isKebabCase("lower-kebab-case", false).isPassed).to.be.true;
            expect(isKebabCase("-lower-kebab-case", false).isPassed).to.be.false;
            expect(isKebabCase("lower-kebab-case-", false).isPassed).to.be.false;
            expect(isKebabCase("lower--kebab", false).isPassed).to.be.false;
            expect(isKebabCase("0-lower-kebab-case", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be false", function() {
            expect(isKebabCase("0", true).isPassed).to.be.true;
            expect(isKebabCase("0-0", true).isPassed).to.be.true;
            expect(isKebabCase("short", true).isPassed).to.be.false;
            expect(isKebabCase("lower-kebab-case", true).isPassed).to.be.false;
            expect(isKebabCase("-lower-kebab-case", true).isPassed).to.be.false;
            expect(isKebabCase("lower-kebab-case-", true).isPassed).to.be.false;
            expect(isKebabCase("lower--kebab", true).isPassed).to.be.false;
            expect(isKebabCase("0-lower-kebab-case", true).isPassed).to.be.false;
          });
        });
      });

      context("an upper kebab case,", function() {
        context('"isUpper" is false,', function() {
          it("should be false", function() {
            expect(isKebabCase("Short", false).isPassed).to.be.false;
            expect(isKebabCase("Upper-Kebab-Case", false).isPassed).to.be.false;
            expect(isKebabCase("-Upper-Kebab-Case", false).isPassed).to.be.false;
            expect(isKebabCase("Upper-Kebab-Case-", false).isPassed).to.be.false;
            expect(isKebabCase("Upper--Kebab", false).isPassed).to.be.false;
            expect(isKebabCase("0-Upper-Kebab-Case", false).isPassed).to.be.false;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be true", function() {
            expect(isKebabCase("Short", true).isPassed).to.be.true;
            expect(isKebabCase("Upper-Kebab-Case", true).isPassed).to.be.true;
            expect(isKebabCase("-Upper-Kebab-Case", true).isPassed).to.be.false;
            expect(isKebabCase("Upper-Kebab-Case-", true).isPassed).to.be.false;
            expect(isKebabCase("Upper--Kebab", true).isPassed).to.be.false;
            expect(isKebabCase("0-Upper-Kebab-Case", true).isPassed).to.be.true;
          });
        });
      });

      context("a lower space case,", function() {
        it("should be false", function() {
          expect(isKebabCase("0 0", false).isPassed).to.be.false;
          expect(isKebabCase("lower space case", false).isPassed).to.be.false;
          expect(isKebabCase(" lower space case", false).isPassed).to.be.false;
          expect(isKebabCase("lower space case ", false).isPassed).to.be.false;
          expect(isKebabCase("lower  space", false).isPassed).to.be.false;
          expect(isKebabCase("0 lower space case", false).isPassed).to.be.false;
          expect(isKebabCase("0 0", true).isPassed).to.be.false;
          expect(isKebabCase("lower space case", true).isPassed).to.be.false;
          expect(isKebabCase(" lower space case", true).isPassed).to.be.false;
          expect(isKebabCase("lower space case ", true).isPassed).to.be.false;
          expect(isKebabCase("lower  space", true).isPassed).to.be.false;
          expect(isKebabCase("0 lower space case", true).isPassed).to.be.false;
        });
      });

      context("an upper space case,", function() {
        it("should be false", function() {
          expect(isKebabCase("Upper Space Case", false).isPassed).to.be.false;
          expect(isKebabCase(" Upper Space Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper Space Case ", false).isPassed).to.be.false;
          expect(isKebabCase("Upper  Space", false).isPassed).to.be.false;
          expect(isKebabCase("0 Upper Space Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper Space Case", true).isPassed).to.be.false;
          expect(isKebabCase(" Upper Space Case", true).isPassed).to.be.false;
          expect(isKebabCase("Upper Space Case ", true).isPassed).to.be.false;
          expect(isKebabCase("Upper  Space", true).isPassed).to.be.false;
          expect(isKebabCase("0 Upper Space Case", true).isPassed).to.be.false;
        });
      });

      context("a lower dot case,", function() {
        it("should be false", function() {
          expect(isKebabCase("0.0", false).isPassed).to.be.false;
          expect(isKebabCase("lower.dot.case", false).isPassed).to.be.false;
          expect(isKebabCase(".lower.dot.case", false).isPassed).to.be.false;
          expect(isKebabCase("lower.dot.case.", false).isPassed).to.be.false;
          expect(isKebabCase("lower..dot", false).isPassed).to.be.false;
          expect(isKebabCase("0.lower.dot.case", false).isPassed).to.be.false;
          expect(isKebabCase("0.0", true).isPassed).to.be.false;
          expect(isKebabCase("lower.dot.case", true).isPassed).to.be.false;
          expect(isKebabCase(".lower.dot.case", true).isPassed).to.be.false;
          expect(isKebabCase("lower.dot.case.", true).isPassed).to.be.false;
          expect(isKebabCase("lower..dot", true).isPassed).to.be.false;
          expect(isKebabCase("0.lower.dot.case", true).isPassed).to.be.false;
        });
      });

      context("an upper dot case,", function() {
        it("should be false", function() {
          expect(isKebabCase("Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isKebabCase(".Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper.Dot.Case.", false).isPassed).to.be.false;
          expect(isKebabCase("Upper..Dot", false).isPassed).to.be.false;
          expect(isKebabCase("0.Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isKebabCase("Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isKebabCase(".Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isKebabCase("Upper.Dot.Case.", true).isPassed).to.be.false;
          expect(isKebabCase("Upper..Dot", true).isPassed).to.be.false;
          expect(isKebabCase("0.Upper.Dot.Case", true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isKebabCase(true, false).isPassed).to.be.false;
        expect(isKebabCase(true, true).isPassed).to.be.false;
        expect(isKebabCase(false, false).isPassed).to.be.false;
        expect(isKebabCase(false, true).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isKebabCase([], false).isPassed).to.be.false;
        expect(isKebabCase([], true).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isKebabCase({}, false).isPassed).to.be.false;
        expect(isKebabCase({}, true).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isKebabCase(() => true, false).isPassed).to.be.false;
        expect(isKebabCase(() => true, true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context('when "isUpper" is false,', function() {
      it('should be "lower-kebab-case"', function() {
        expect(isKebabCase("abc-def", false).expected).to.eq("lower-kebab-case");
      });
    });

    context('when "isUpper" is true,', function() {
      it('should be "upper-kebab-case"', function() {
        expect(isKebabCase("Abc-Def", true).expected).to.eq("upper-kebab-case");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isKebabCase(value, true).actual).to.eq(value);
        expect(isKebabCase(value, false).actual).to.eq(value);
      });
    });
  });
});
