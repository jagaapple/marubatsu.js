// =============================================================================================================================
// SRC - CHECKERS - SNAKE CASE TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isSnakeCase } from "./snake-case";

describe("[ Snake Case Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isSnakeCase(undefined, false).isPassed).to.be.false;
        expect(isSnakeCase(undefined, true).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isSnakeCase(null, false).isPassed).to.be.false;
        expect(isSnakeCase(null, true).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isSnakeCase(0, false).isPassed).to.be.true;
          expect(isSnakeCase(0, true).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isSnakeCase(1, false).isPassed).to.be.true;
          expect(isSnakeCase(1, true).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isSnakeCase(-1, false).isPassed).to.be.false;
          expect(isSnakeCase(-1, true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isSnakeCase("", false).isPassed).to.be.true;
          expect(isSnakeCase("", true).isPassed).to.be.true;
        });
      });

      context("a lower camel case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("lowerCamelCase", false).isPassed).to.be.false;
          expect(isSnakeCase("lowerCCamel", false).isPassed).to.be.false;
          expect(isSnakeCase("000LowerCamelCase", false).isPassed).to.be.false;
          expect(isSnakeCase("lowerCamelCase", true).isPassed).to.be.false;
          expect(isSnakeCase("lowerCCamel", true).isPassed).to.be.false;
          expect(isSnakeCase("000LowerCamelCase", true).isPassed).to.be.false;
        });
      });

      context("an upper camel case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("UpperCamelCase", false).isPassed).to.be.false;
          expect(isSnakeCase("UpperCCamel", false).isPassed).to.be.false;
          expect(isSnakeCase("000UpperCamelCase", false).isPassed).to.be.false;
          expect(isSnakeCase("UpperCamelCase", true).isPassed).to.be.false;
          expect(isSnakeCase("UpperCCamel", true).isPassed).to.be.false;
          expect(isSnakeCase("000UpperCamelCase", true).isPassed).to.be.false;
        });
      });

      context("a lower snake case,", function() {
        context('"isUpper" is false,', function() {
          it("should be true", function() {
            expect(isSnakeCase("0", false).isPassed).to.be.true;
            expect(isSnakeCase("0_0", false).isPassed).to.be.true;
            expect(isSnakeCase("short", false).isPassed).to.be.true;
            expect(isSnakeCase("lower_snake_case", false).isPassed).to.be.true;
            expect(isSnakeCase("_lower_snake_case", false).isPassed).to.be.false;
            expect(isSnakeCase("lower_snake_case_", false).isPassed).to.be.false;
            expect(isSnakeCase("lower__snake", false).isPassed).to.be.false;
            expect(isSnakeCase("0_lower_snake_case", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be false", function() {
            expect(isSnakeCase("0", true).isPassed).to.be.true;
            expect(isSnakeCase("0_0", true).isPassed).to.be.true;
            expect(isSnakeCase("short", true).isPassed).to.be.false;
            expect(isSnakeCase("lower_snake_case", true).isPassed).to.be.false;
            expect(isSnakeCase("_lower_snake_case", true).isPassed).to.be.false;
            expect(isSnakeCase("lower_snake_case_", true).isPassed).to.be.false;
            expect(isSnakeCase("lower__snake", true).isPassed).to.be.false;
            expect(isSnakeCase("0_lower_snake_case", true).isPassed).to.be.false;
          });
        });
      });

      context("an upper snake case,", function() {
        context('"isUpper" is false,', function() {
          it("should be false", function() {
            expect(isSnakeCase("Short", false).isPassed).to.be.false;
            expect(isSnakeCase("Upper_Snake_Case", false).isPassed).to.be.false;
            expect(isSnakeCase("_Upper_Snake_Case", false).isPassed).to.be.false;
            expect(isSnakeCase("Upper_Snake_Case_", false).isPassed).to.be.false;
            expect(isSnakeCase("Upper__Snake", false).isPassed).to.be.false;
            expect(isSnakeCase("0_Upper_Snake_Case", false).isPassed).to.be.false;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be true", function() {
            expect(isSnakeCase("Short", true).isPassed).to.be.true;
            expect(isSnakeCase("Upper_Snake_Case", true).isPassed).to.be.true;
            expect(isSnakeCase("_Upper_Snake_Case", true).isPassed).to.be.false;
            expect(isSnakeCase("Upper_Snake_Case_", true).isPassed).to.be.false;
            expect(isSnakeCase("Upper__Snake", true).isPassed).to.be.false;
            expect(isSnakeCase("0_Upper_Snake_Case", true).isPassed).to.be.true;
          });
        });
      });

      context("a lower kebab case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("0-0", false).isPassed).to.be.false;
          expect(isSnakeCase("lower-kebab-case", false).isPassed).to.be.false;
          expect(isSnakeCase("-lower-kebab-case", false).isPassed).to.be.false;
          expect(isSnakeCase("lower-kebab-case-", false).isPassed).to.be.false;
          expect(isSnakeCase("lower--kebab", false).isPassed).to.be.false;
          expect(isSnakeCase("0-lower-kebab-case", false).isPassed).to.be.false;
          expect(isSnakeCase("0-0", true).isPassed).to.be.false;
          expect(isSnakeCase("lower-kebab-case", true).isPassed).to.be.false;
          expect(isSnakeCase("-lower-kebab-case", true).isPassed).to.be.false;
          expect(isSnakeCase("lower-kebab-case-", true).isPassed).to.be.false;
          expect(isSnakeCase("lower--kebab", true).isPassed).to.be.false;
          expect(isSnakeCase("0-lower-kebab-case", true).isPassed).to.be.false;
        });
      });

      context("an upper kebab case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSnakeCase("-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper-Kebab-Case-", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper--Kebab", false).isPassed).to.be.false;
          expect(isSnakeCase("0-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isSnakeCase("-Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper-Kebab-Case-", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper--Kebab", true).isPassed).to.be.false;
          expect(isSnakeCase("0-Upper-Kebab-Case", true).isPassed).to.be.false;
        });
      });

      context("a lower space case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("0 0", false).isPassed).to.be.false;
          expect(isSnakeCase("lower space case", false).isPassed).to.be.false;
          expect(isSnakeCase(" lower space case", false).isPassed).to.be.false;
          expect(isSnakeCase("lower space case ", false).isPassed).to.be.false;
          expect(isSnakeCase("lower  space", false).isPassed).to.be.false;
          expect(isSnakeCase("0 lower space case", false).isPassed).to.be.false;
          expect(isSnakeCase("0 0", true).isPassed).to.be.false;
          expect(isSnakeCase("lower space case", true).isPassed).to.be.false;
          expect(isSnakeCase(" lower space case", true).isPassed).to.be.false;
          expect(isSnakeCase("lower space case ", true).isPassed).to.be.false;
          expect(isSnakeCase("lower  space", true).isPassed).to.be.false;
          expect(isSnakeCase("0 lower space case", true).isPassed).to.be.false;
        });
      });

      context("an upper space case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("Upper Space Case", false).isPassed).to.be.false;
          expect(isSnakeCase(" Upper Space Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper Space Case ", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper  Space", false).isPassed).to.be.false;
          expect(isSnakeCase("0 Upper Space Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper Space Case", true).isPassed).to.be.false;
          expect(isSnakeCase(" Upper Space Case", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper Space Case ", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper  Space", true).isPassed).to.be.false;
          expect(isSnakeCase("0 Upper Space Case", true).isPassed).to.be.false;
        });
      });

      context("a lower dot case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("0.0", false).isPassed).to.be.false;
          expect(isSnakeCase("lower.dot.case", false).isPassed).to.be.false;
          expect(isSnakeCase(".lower.dot.case", false).isPassed).to.be.false;
          expect(isSnakeCase("lower.dot.case.", false).isPassed).to.be.false;
          expect(isSnakeCase("lower..dot", false).isPassed).to.be.false;
          expect(isSnakeCase("0.lower.dot.case", false).isPassed).to.be.false;
          expect(isSnakeCase("0.0", true).isPassed).to.be.false;
          expect(isSnakeCase("lower.dot.case", true).isPassed).to.be.false;
          expect(isSnakeCase(".lower.dot.case", true).isPassed).to.be.false;
          expect(isSnakeCase("lower.dot.case.", true).isPassed).to.be.false;
          expect(isSnakeCase("lower..dot", true).isPassed).to.be.false;
          expect(isSnakeCase("0.lower.dot.case", true).isPassed).to.be.false;
        });
      });

      context("an upper dot case,", function() {
        it("should be false", function() {
          expect(isSnakeCase("Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSnakeCase(".Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper.Dot.Case.", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper..Dot", false).isPassed).to.be.false;
          expect(isSnakeCase("0.Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isSnakeCase("Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isSnakeCase(".Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper.Dot.Case.", true).isPassed).to.be.false;
          expect(isSnakeCase("Upper..Dot", true).isPassed).to.be.false;
          expect(isSnakeCase("0.Upper.Dot.Case", true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isSnakeCase(true, false).isPassed).to.be.false;
        expect(isSnakeCase(true, true).isPassed).to.be.false;
        expect(isSnakeCase(false, false).isPassed).to.be.false;
        expect(isSnakeCase(false, true).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isSnakeCase([], false).isPassed).to.be.false;
        expect(isSnakeCase([], true).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isSnakeCase({}, false).isPassed).to.be.false;
        expect(isSnakeCase({}, true).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isSnakeCase(() => true, false).isPassed).to.be.false;
        expect(isSnakeCase(() => true, true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context('when "isUpper" is false,', function() {
      it('should be "lower-snake-case"', function() {
        expect(isSnakeCase("abc_def", false).expected).to.eq("lower-snake-case");
      });
    });

    context('when "isUpper" is true,', function() {
      it('should be "upper-snake-case"', function() {
        expect(isSnakeCase("Abc_Def", true).expected).to.eq("upper-snake-case");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isSnakeCase(value, true).actual).to.eq(value);
        expect(isSnakeCase(value, false).actual).to.eq(value);
      });
    });
  });
});
