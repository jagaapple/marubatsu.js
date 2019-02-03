// =============================================================================================================================
// SRC - CHECKERS - DOT CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isDotCase } from "./dot-case-checker";

describe("[ Dot Case Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isDotCase(undefined, false).isPassed).to.be.false;
        expect(isDotCase(undefined, true).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isDotCase(null, false).isPassed).to.be.false;
        expect(isDotCase(null, true).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isDotCase(0, false).isPassed).to.be.true;
          expect(isDotCase(0, true).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isDotCase(1, false).isPassed).to.be.true;
          expect(isDotCase(1, true).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isDotCase(-1, false).isPassed).to.be.false;
          expect(isDotCase(-1, true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isDotCase("", false).isPassed).to.be.true;
          expect(isDotCase("", true).isPassed).to.be.true;
        });
      });

      context("a lower camel case,", function() {
        it("should be false", function() {
          expect(isDotCase("lowerCamelCase", false).isPassed).to.be.false;
          expect(isDotCase("lowerCCamel", false).isPassed).to.be.false;
          expect(isDotCase("000LowerCamelCase", false).isPassed).to.be.false;
          expect(isDotCase("lowerCamelCase", true).isPassed).to.be.false;
          expect(isDotCase("lowerCCamel", true).isPassed).to.be.false;
          expect(isDotCase("000LowerCamelCase", true).isPassed).to.be.false;
        });
      });

      context("an upper camel case,", function() {
        it("should be false", function() {
          expect(isDotCase("UpperCamelCase", false).isPassed).to.be.false;
          expect(isDotCase("UpperCCamel", false).isPassed).to.be.false;
          expect(isDotCase("000UpperCamelCase", false).isPassed).to.be.false;
          expect(isDotCase("UpperCamelCase", true).isPassed).to.be.false;
          expect(isDotCase("UpperCCamel", true).isPassed).to.be.false;
          expect(isDotCase("000UpperCamelCase", true).isPassed).to.be.false;
        });
      });

      context("a lower snake case,", function() {
        it("should be false", function() {
          expect(isDotCase("0_0", false).isPassed).to.be.false;
          expect(isDotCase("lower_snake_case", false).isPassed).to.be.false;
          expect(isDotCase("_lower_snake_case", false).isPassed).to.be.false;
          expect(isDotCase("lower_snake_case_", false).isPassed).to.be.false;
          expect(isDotCase("lower__snake", false).isPassed).to.be.false;
          expect(isDotCase("0_lower_snake_case", false).isPassed).to.be.false;
          expect(isDotCase("0_0", true).isPassed).to.be.false;
          expect(isDotCase("lower_snake_case", true).isPassed).to.be.false;
          expect(isDotCase("_lower_snake_case", true).isPassed).to.be.false;
          expect(isDotCase("lower_snake_case_", true).isPassed).to.be.false;
          expect(isDotCase("lower__snake", true).isPassed).to.be.false;
          expect(isDotCase("0_lower_snake_case", true).isPassed).to.be.false;
        });
      });

      context("an upper snake case,", function() {
        it("should be false", function() {
          expect(isDotCase("Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isDotCase("_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper_Snake_Case_", false).isPassed).to.be.false;
          expect(isDotCase("Upper__Snake", false).isPassed).to.be.false;
          expect(isDotCase("0_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isDotCase("_Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isDotCase("Upper_Snake_Case_", true).isPassed).to.be.false;
          expect(isDotCase("Upper__Snake", true).isPassed).to.be.false;
          expect(isDotCase("0_Upper_Snake_Case", true).isPassed).to.be.false;
        });
      });

      context("a lower kebab case,", function() {
        it("should be false", function() {
          expect(isDotCase("0-0", false).isPassed).to.be.false;
          expect(isDotCase("lower-kebab-case", false).isPassed).to.be.false;
          expect(isDotCase("-lower-kebab-case", false).isPassed).to.be.false;
          expect(isDotCase("lower-kebab-case-", false).isPassed).to.be.false;
          expect(isDotCase("lower--kebab", false).isPassed).to.be.false;
          expect(isDotCase("0-lower-kebab-case", false).isPassed).to.be.false;
          expect(isDotCase("0-0", true).isPassed).to.be.false;
          expect(isDotCase("lower-kebab-case", true).isPassed).to.be.false;
          expect(isDotCase("-lower-kebab-case", true).isPassed).to.be.false;
          expect(isDotCase("lower-kebab-case-", true).isPassed).to.be.false;
          expect(isDotCase("lower--kebab", true).isPassed).to.be.false;
          expect(isDotCase("0-lower-kebab-case", true).isPassed).to.be.false;
        });
      });

      context("an upper kebab case,", function() {
        it("should be false", function() {
          expect(isDotCase("Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isDotCase("-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper-Kebab-Case-", false).isPassed).to.be.false;
          expect(isDotCase("Upper--Kebab", false).isPassed).to.be.false;
          expect(isDotCase("0-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isDotCase("-Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isDotCase("Upper-Kebab-Case-", true).isPassed).to.be.false;
          expect(isDotCase("Upper--Kebab", true).isPassed).to.be.false;
          expect(isDotCase("0-Upper-Kebab-Case", true).isPassed).to.be.false;
        });
      });

      context("a lower space case,", function() {
        it("should be false", function() {
          expect(isDotCase("0 0", false).isPassed).to.be.false;
          expect(isDotCase("lower space case", false).isPassed).to.be.false;
          expect(isDotCase(" lower space case", false).isPassed).to.be.false;
          expect(isDotCase("lower space case ", false).isPassed).to.be.false;
          expect(isDotCase("lower  space", false).isPassed).to.be.false;
          expect(isDotCase("0 lower space case", false).isPassed).to.be.false;
          expect(isDotCase("0 0", true).isPassed).to.be.false;
          expect(isDotCase("lower space case", true).isPassed).to.be.false;
          expect(isDotCase(" lower space case", true).isPassed).to.be.false;
          expect(isDotCase("lower space case ", true).isPassed).to.be.false;
          expect(isDotCase("lower  space", true).isPassed).to.be.false;
          expect(isDotCase("0 lower space case", true).isPassed).to.be.false;
        });
      });

      context("an upper space case,", function() {
        it("should be false", function() {
          expect(isDotCase("Upper Space Case", false).isPassed).to.be.false;
          expect(isDotCase(" Upper Space Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper Space Case ", false).isPassed).to.be.false;
          expect(isDotCase("Upper  Space", false).isPassed).to.be.false;
          expect(isDotCase("0 Upper Space Case", false).isPassed).to.be.false;
          expect(isDotCase("Upper Space Case", true).isPassed).to.be.false;
          expect(isDotCase(" Upper Space Case", true).isPassed).to.be.false;
          expect(isDotCase("Upper Space Case ", true).isPassed).to.be.false;
          expect(isDotCase("Upper  Space", true).isPassed).to.be.false;
          expect(isDotCase("0 Upper Space Case", true).isPassed).to.be.false;
        });
      });

      context("a lower dot case,", function() {
        context('"isUpper" is false,', function() {
          it("should be true", function() {
            expect(isDotCase("0", false).isPassed).to.be.true;
            expect(isDotCase("0.0", false).isPassed).to.be.true;
            expect(isDotCase("short", false).isPassed).to.be.true;
            expect(isDotCase("lower.dot.case", false).isPassed).to.be.true;
            expect(isDotCase(".lower.dot.case", false).isPassed).to.be.false;
            expect(isDotCase("lower.dot.case.", false).isPassed).to.be.false;
            expect(isDotCase("lower..dot", false).isPassed).to.be.false;
            expect(isDotCase("0.lower.dot.case", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be false", function() {
            expect(isDotCase("0", true).isPassed).to.be.true;
            expect(isDotCase("0.0", true).isPassed).to.be.true;
            expect(isDotCase("short", true).isPassed).to.be.false;
            expect(isDotCase("lower.dot.case", true).isPassed).to.be.false;
            expect(isDotCase(".lower.dot.case", true).isPassed).to.be.false;
            expect(isDotCase("lower.dot.case.", true).isPassed).to.be.false;
            expect(isDotCase("lower..dot", true).isPassed).to.be.false;
            expect(isDotCase("0.lower.dot.case", true).isPassed).to.be.false;
          });
        });
      });

      context("an upper dot case,", function() {
        context('"isUpper" is false,', function() {
          it("should be false", function() {
            expect(isDotCase("Short", false).isPassed).to.be.false;
            expect(isDotCase("Upper.Dot.Case", false).isPassed).to.be.false;
            expect(isDotCase(".Upper.Dot.Case", false).isPassed).to.be.false;
            expect(isDotCase("Upper.Dot.Case.", false).isPassed).to.be.false;
            expect(isDotCase("Upper..Dot", false).isPassed).to.be.false;
            expect(isDotCase("0.Upper.Dot.Case", false).isPassed).to.be.false;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be true", function() {
            expect(isDotCase("Short", true).isPassed).to.be.true;
            expect(isDotCase("Upper.Dot.Case", true).isPassed).to.be.true;
            expect(isDotCase(".Upper.Dot.Case", true).isPassed).to.be.false;
            expect(isDotCase("Upper.Dot.Case.", true).isPassed).to.be.false;
            expect(isDotCase("Upper..Dot", true).isPassed).to.be.false;
            expect(isDotCase("0.Upper.Dot.Case", true).isPassed).to.be.true;
          });
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isDotCase(true, false).isPassed).to.be.false;
        expect(isDotCase(true, true).isPassed).to.be.false;
        expect(isDotCase(false, false).isPassed).to.be.false;
        expect(isDotCase(false, true).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isDotCase([], false).isPassed).to.be.false;
        expect(isDotCase([], true).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isDotCase({}, false).isPassed).to.be.false;
        expect(isDotCase({}, true).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isDotCase(() => true, false).isPassed).to.be.false;
        expect(isDotCase(() => true, true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context('when "isUpper" is false,', function() {
      it('should be "lower-dot-case"', function() {
        expect(isDotCase("abc.def", false).expected).to.eq("lower-dot-case");
      });
    });

    context('when "isUpper" is true,', function() {
      it('should be "upper-dot-case"', function() {
        expect(isDotCase("Abc.Def", true).expected).to.eq("upper-dot-case");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isDotCase(value, true).actual).to.eq(value);
        expect(isDotCase(value, false).actual).to.eq(value);
      });
    });
  });
});
