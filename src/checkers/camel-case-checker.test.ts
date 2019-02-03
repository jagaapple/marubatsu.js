// =============================================================================================================================
// SRC - CHECKERS - CAMEL CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isCamelCase } from "./camel-case-checker";

describe("[ Camel Case Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isCamelCase(undefined, false).isPassed).to.be.false;
        expect(isCamelCase(undefined, true).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isCamelCase(null, false).isPassed).to.be.false;
        expect(isCamelCase(null, true).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isCamelCase(0, false).isPassed).to.be.true;
          expect(isCamelCase(0, true).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isCamelCase(1, false).isPassed).to.be.true;
          expect(isCamelCase(1, true).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isCamelCase(-1, false).isPassed).to.be.false;
          expect(isCamelCase(-1, true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isCamelCase("", false).isPassed).to.be.true;
          expect(isCamelCase("", true).isPassed).to.be.true;
        });
      });

      context("a lower camel case,", function() {
        context('"isUpper" is false,', function() {
          it("should be true", function() {
            expect(isCamelCase("0", false).isPassed).to.be.true;
            expect(isCamelCase("short", false).isPassed).to.be.true;
            expect(isCamelCase("lowerCamelCase", false).isPassed).to.be.true;
            expect(isCamelCase("lowerCCamel", false).isPassed).to.be.true;
            expect(isCamelCase("000LowerCamelCase", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be false", function() {
            expect(isCamelCase("0", true).isPassed).to.be.true;
            expect(isCamelCase("short", true).isPassed).to.be.false;
            expect(isCamelCase("lowerCamelCase", true).isPassed).to.be.false;
            expect(isCamelCase("lowerCCamel", true).isPassed).to.be.false;
            expect(isCamelCase("000LowerCamelCase", true).isPassed).to.be.true;
          });
        });
      });

      context("an upper camel case,", function() {
        context('"isUpper" is false,', function() {
          it("should be false", function() {
            expect(isCamelCase("0", false).isPassed).to.be.true;
            expect(isCamelCase("Short", false).isPassed).to.be.false;
            expect(isCamelCase("UpperCamelCase", false).isPassed).to.be.false;
            expect(isCamelCase("UpperCCamel", false).isPassed).to.be.false;
            expect(isCamelCase("000UpperCamelCase", false).isPassed).to.be.true;
          });
        });

        context('"isUpper" is true,', function() {
          it("should be true", function() {
            expect(isCamelCase("0", true).isPassed).to.be.true;
            expect(isCamelCase("Short", true).isPassed).to.be.true;
            expect(isCamelCase("UpperCamelCase", true).isPassed).to.be.true;
            expect(isCamelCase("UpperCCamel", true).isPassed).to.be.true;
            expect(isCamelCase("000UpperCamelCase", true).isPassed).to.be.true;
          });
        });
      });

      context("a lower snake case,", function() {
        it("should be false", function() {
          expect(isCamelCase("0_0", false).isPassed).to.be.false;
          expect(isCamelCase("lower_snake_case", false).isPassed).to.be.false;
          expect(isCamelCase("_lower_snake_case", false).isPassed).to.be.false;
          expect(isCamelCase("lower_snake_case_", false).isPassed).to.be.false;
          expect(isCamelCase("lower__snake", false).isPassed).to.be.false;
          expect(isCamelCase("0_lower_snake_case", false).isPassed).to.be.false;
          expect(isCamelCase("0_0", true).isPassed).to.be.false;
          expect(isCamelCase("lower_snake_case", true).isPassed).to.be.false;
          expect(isCamelCase("_lower_snake_case", true).isPassed).to.be.false;
          expect(isCamelCase("lower_snake_case_", true).isPassed).to.be.false;
          expect(isCamelCase("lower__snake", true).isPassed).to.be.false;
          expect(isCamelCase("0_lower_snake_case", true).isPassed).to.be.false;
        });
      });

      context("an upper snake case,", function() {
        it("should be false", function() {
          expect(isCamelCase("Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isCamelCase("_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper_Snake_Case_", false).isPassed).to.be.false;
          expect(isCamelCase("Upper__Snake", false).isPassed).to.be.false;
          expect(isCamelCase("0_Upper_Snake_Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isCamelCase("_Upper_Snake_Case", true).isPassed).to.be.false;
          expect(isCamelCase("Upper_Snake_Case_", true).isPassed).to.be.false;
          expect(isCamelCase("Upper__Snake", true).isPassed).to.be.false;
          expect(isCamelCase("0_Upper_Snake_Case", true).isPassed).to.be.false;
        });
      });

      context("a lower kebab case,", function() {
        it("should be false", function() {
          expect(isCamelCase("0-0", false).isPassed).to.be.false;
          expect(isCamelCase("lower-kebab-case", false).isPassed).to.be.false;
          expect(isCamelCase("-lower-kebab-case", false).isPassed).to.be.false;
          expect(isCamelCase("lower-kebab-case-", false).isPassed).to.be.false;
          expect(isCamelCase("lower--kebab", false).isPassed).to.be.false;
          expect(isCamelCase("0-lower-kebab-case", false).isPassed).to.be.false;
          expect(isCamelCase("0-0", true).isPassed).to.be.false;
          expect(isCamelCase("lower-kebab-case", true).isPassed).to.be.false;
          expect(isCamelCase("-lower-kebab-case", true).isPassed).to.be.false;
          expect(isCamelCase("lower-kebab-case-", true).isPassed).to.be.false;
          expect(isCamelCase("lower--kebab", true).isPassed).to.be.false;
          expect(isCamelCase("0-lower-kebab-case", true).isPassed).to.be.false;
        });
      });

      context("an upper kebab case,", function() {
        it("should be false", function() {
          expect(isCamelCase("Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isCamelCase("-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper-Kebab-Case-", false).isPassed).to.be.false;
          expect(isCamelCase("Upper--Kebab", false).isPassed).to.be.false;
          expect(isCamelCase("0-Upper-Kebab-Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isCamelCase("-Upper-Kebab-Case", true).isPassed).to.be.false;
          expect(isCamelCase("Upper-Kebab-Case-", true).isPassed).to.be.false;
          expect(isCamelCase("Upper--Kebab", true).isPassed).to.be.false;
          expect(isCamelCase("0-Upper-Kebab-Case", true).isPassed).to.be.false;
        });
      });

      context("a lower space case,", function() {
        it("should be false", function() {
          expect(isCamelCase("0 0", false).isPassed).to.be.false;
          expect(isCamelCase("lower space case", false).isPassed).to.be.false;
          expect(isCamelCase(" lower space case", false).isPassed).to.be.false;
          expect(isCamelCase("lower space case ", false).isPassed).to.be.false;
          expect(isCamelCase("lower  space", false).isPassed).to.be.false;
          expect(isCamelCase("0 lower space case", false).isPassed).to.be.false;
          expect(isCamelCase("0 0", true).isPassed).to.be.false;
          expect(isCamelCase("lower space case", true).isPassed).to.be.false;
          expect(isCamelCase(" lower space case", true).isPassed).to.be.false;
          expect(isCamelCase("lower space case ", true).isPassed).to.be.false;
          expect(isCamelCase("lower  space", true).isPassed).to.be.false;
          expect(isCamelCase("0 lower space case", true).isPassed).to.be.false;
        });
      });

      context("an upper space case,", function() {
        it("should be false", function() {
          expect(isCamelCase("Upper Space Case", false).isPassed).to.be.false;
          expect(isCamelCase(" Upper Space Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper Space Case ", false).isPassed).to.be.false;
          expect(isCamelCase("Upper  Space", false).isPassed).to.be.false;
          expect(isCamelCase("0 Upper Space Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper Space Case", true).isPassed).to.be.false;
          expect(isCamelCase(" Upper Space Case", true).isPassed).to.be.false;
          expect(isCamelCase("Upper Space Case ", true).isPassed).to.be.false;
          expect(isCamelCase("Upper  Space", true).isPassed).to.be.false;
          expect(isCamelCase("0 Upper Space Case", true).isPassed).to.be.false;
        });
      });

      context("a lower dot case,", function() {
        it("should be false", function() {
          expect(isCamelCase("0.0", false).isPassed).to.be.false;
          expect(isCamelCase("lower.dot.case", false).isPassed).to.be.false;
          expect(isCamelCase(".lower.dot.case", false).isPassed).to.be.false;
          expect(isCamelCase("lower.dot.case.", false).isPassed).to.be.false;
          expect(isCamelCase("lower..dot", false).isPassed).to.be.false;
          expect(isCamelCase("0.lower.dot.case", false).isPassed).to.be.false;
          expect(isCamelCase("0.0", true).isPassed).to.be.false;
          expect(isCamelCase("lower.dot.case", true).isPassed).to.be.false;
          expect(isCamelCase(".lower.dot.case", true).isPassed).to.be.false;
          expect(isCamelCase("lower.dot.case.", true).isPassed).to.be.false;
          expect(isCamelCase("lower..dot", true).isPassed).to.be.false;
          expect(isCamelCase("0.lower.dot.case", true).isPassed).to.be.false;
        });
      });

      context("an upper dot case,", function() {
        it("should be false", function() {
          expect(isCamelCase("Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isCamelCase(".Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper.Dot.Case.", false).isPassed).to.be.false;
          expect(isCamelCase("Upper..Dot", false).isPassed).to.be.false;
          expect(isCamelCase("0.Upper.Dot.Case", false).isPassed).to.be.false;
          expect(isCamelCase("Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isCamelCase(".Upper.Dot.Case", true).isPassed).to.be.false;
          expect(isCamelCase("Upper.Dot.Case.", true).isPassed).to.be.false;
          expect(isCamelCase("Upper..Dot", true).isPassed).to.be.false;
          expect(isCamelCase("0.Upper.Dot.Case", true).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isCamelCase(true, false).isPassed).to.be.false;
        expect(isCamelCase(true, true).isPassed).to.be.false;
        expect(isCamelCase(false, false).isPassed).to.be.false;
        expect(isCamelCase(false, true).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isCamelCase([], false).isPassed).to.be.false;
        expect(isCamelCase([], true).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isCamelCase({}, false).isPassed).to.be.false;
        expect(isCamelCase({}, true).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isCamelCase(() => true, false).isPassed).to.be.false;
        expect(isCamelCase(() => true, true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context('when "isUpper" is false,', function() {
      it('should be "lower-camel-case"', function() {
        expect(isCamelCase("abc", false).expected).to.eq("lower-camel-case");
      });
    });

    context('when "isUpper" is true,', function() {
      it('should be "upper-camel-case"', function() {
        expect(isCamelCase("Abc", true).expected).to.eq("upper-camel-case");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isCamelCase(value, true).actual).to.eq(value);
        expect(isCamelCase(value, false).actual).to.eq(value);
      });
    });
  });
});
