// =============================================================================================================================
// SRC - CHECKERS - CAMEL CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isCamelCase } from "./camel-case-checker";

describe("[ Camel Case Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(isCamelCase(undefined, false)).to.be.false;
      expect(isCamelCase(undefined, true)).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(isCamelCase(null, false)).to.be.false;
      expect(isCamelCase(null, true)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isCamelCase(0, false)).to.be.true;
        expect(isCamelCase(0, true)).to.be.true;
      });
    });

    context("a positive number,", function() {
      it("should return true", function() {
        expect(isCamelCase(1, false)).to.be.true;
        expect(isCamelCase(1, true)).to.be.true;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isCamelCase(-1, false)).to.be.false;
        expect(isCamelCase(-1, true)).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isCamelCase("", false)).to.be.true;
        expect(isCamelCase("", true)).to.be.true;
      });
    });

    context("a lower camel case,", function() {
      context('"isUpper" is false,', function() {
        it("should return true", function() {
          expect(isCamelCase("0", false)).to.be.true;
          expect(isCamelCase("short", false)).to.be.true;
          expect(isCamelCase("lowerCamelCase", false)).to.be.true;
          expect(isCamelCase("lowerCCamel", false)).to.be.true;
          expect(isCamelCase("000LowerCamelCase", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return false", function() {
          expect(isCamelCase("0", true)).to.be.true;
          expect(isCamelCase("short", true)).to.be.false;
          expect(isCamelCase("lowerCamelCase", true)).to.be.false;
          expect(isCamelCase("lowerCCamel", true)).to.be.false;
          expect(isCamelCase("000LowerCamelCase", true)).to.be.true;
        });
      });
    });

    context("an upper camel case,", function() {
      context('"isUpper" is false,', function() {
        it("should return false", function() {
          expect(isCamelCase("0", false)).to.be.true;
          expect(isCamelCase("Short", false)).to.be.false;
          expect(isCamelCase("UpperCamelCase", false)).to.be.false;
          expect(isCamelCase("UpperCCamel", false)).to.be.false;
          expect(isCamelCase("000UpperCamelCase", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return true", function() {
          expect(isCamelCase("0", true)).to.be.true;
          expect(isCamelCase("Short", true)).to.be.true;
          expect(isCamelCase("UpperCamelCase", true)).to.be.true;
          expect(isCamelCase("UpperCCamel", true)).to.be.true;
          expect(isCamelCase("000UpperCamelCase", true)).to.be.true;
        });
      });
    });

    context("a lower snake case,", function() {
      it("should return false", function() {
        expect(isCamelCase("0_0", false)).to.be.false;
        expect(isCamelCase("lower_snake_case", false)).to.be.false;
        expect(isCamelCase("_lower_snake_case", false)).to.be.false;
        expect(isCamelCase("lower_snake_case_", false)).to.be.false;
        expect(isCamelCase("lower__snake", false)).to.be.false;
        expect(isCamelCase("0_lower_snake_case", false)).to.be.false;
        expect(isCamelCase("0_0", true)).to.be.false;
        expect(isCamelCase("lower_snake_case", true)).to.be.false;
        expect(isCamelCase("_lower_snake_case", true)).to.be.false;
        expect(isCamelCase("lower_snake_case_", true)).to.be.false;
        expect(isCamelCase("lower__snake", true)).to.be.false;
        expect(isCamelCase("0_lower_snake_case", true)).to.be.false;
      });
    });

    context("an upper snake case,", function() {
      it("should return false", function() {
        expect(isCamelCase("Upper_Snake_Case", false)).to.be.false;
        expect(isCamelCase("_Upper_Snake_Case", false)).to.be.false;
        expect(isCamelCase("Upper_Snake_Case_", false)).to.be.false;
        expect(isCamelCase("Upper__Snake", false)).to.be.false;
        expect(isCamelCase("0_Upper_Snake_Case", false)).to.be.false;
        expect(isCamelCase("Upper_Snake_Case", true)).to.be.false;
        expect(isCamelCase("_Upper_Snake_Case", true)).to.be.false;
        expect(isCamelCase("Upper_Snake_Case_", true)).to.be.false;
        expect(isCamelCase("Upper__Snake", true)).to.be.false;
        expect(isCamelCase("0_Upper_Snake_Case", true)).to.be.false;
      });
    });

    context("a lower kebab case,", function() {
      it("should return false", function() {
        expect(isCamelCase("0-0", false)).to.be.false;
        expect(isCamelCase("lower-kebab-case", false)).to.be.false;
        expect(isCamelCase("-lower-kebab-case", false)).to.be.false;
        expect(isCamelCase("lower-kebab-case-", false)).to.be.false;
        expect(isCamelCase("lower--kebab", false)).to.be.false;
        expect(isCamelCase("0-lower-kebab-case", false)).to.be.false;
        expect(isCamelCase("0-0", true)).to.be.false;
        expect(isCamelCase("lower-kebab-case", true)).to.be.false;
        expect(isCamelCase("-lower-kebab-case", true)).to.be.false;
        expect(isCamelCase("lower-kebab-case-", true)).to.be.false;
        expect(isCamelCase("lower--kebab", true)).to.be.false;
        expect(isCamelCase("0-lower-kebab-case", true)).to.be.false;
      });
    });

    context("an upper kebab case,", function() {
      it("should return false", function() {
        expect(isCamelCase("Upper-Kebab-Case", false)).to.be.false;
        expect(isCamelCase("-Upper-Kebab-Case", false)).to.be.false;
        expect(isCamelCase("Upper-Kebab-Case-", false)).to.be.false;
        expect(isCamelCase("Upper--Kebab", false)).to.be.false;
        expect(isCamelCase("0-Upper-Kebab-Case", false)).to.be.false;
        expect(isCamelCase("Upper-Kebab-Case", true)).to.be.false;
        expect(isCamelCase("-Upper-Kebab-Case", true)).to.be.false;
        expect(isCamelCase("Upper-Kebab-Case-", true)).to.be.false;
        expect(isCamelCase("Upper--Kebab", true)).to.be.false;
        expect(isCamelCase("0-Upper-Kebab-Case", true)).to.be.false;
      });
    });

    context("a lower space case,", function() {
      it("should return false", function() {
        expect(isCamelCase("0 0", false)).to.be.false;
        expect(isCamelCase("lower space case", false)).to.be.false;
        expect(isCamelCase(" lower space case", false)).to.be.false;
        expect(isCamelCase("lower space case ", false)).to.be.false;
        expect(isCamelCase("lower  space", false)).to.be.false;
        expect(isCamelCase("0 lower space case", false)).to.be.false;
        expect(isCamelCase("0 0", true)).to.be.false;
        expect(isCamelCase("lower space case", true)).to.be.false;
        expect(isCamelCase(" lower space case", true)).to.be.false;
        expect(isCamelCase("lower space case ", true)).to.be.false;
        expect(isCamelCase("lower  space", true)).to.be.false;
        expect(isCamelCase("0 lower space case", true)).to.be.false;
      });
    });

    context("an upper space case,", function() {
      it("should return false", function() {
        expect(isCamelCase("Upper Space Case", false)).to.be.false;
        expect(isCamelCase(" Upper Space Case", false)).to.be.false;
        expect(isCamelCase("Upper Space Case ", false)).to.be.false;
        expect(isCamelCase("Upper  Space", false)).to.be.false;
        expect(isCamelCase("0 Upper Space Case", false)).to.be.false;
        expect(isCamelCase("Upper Space Case", true)).to.be.false;
        expect(isCamelCase(" Upper Space Case", true)).to.be.false;
        expect(isCamelCase("Upper Space Case ", true)).to.be.false;
        expect(isCamelCase("Upper  Space", true)).to.be.false;
        expect(isCamelCase("0 Upper Space Case", true)).to.be.false;
      });
    });

    context("a lower dot case,", function() {
      it("should return false", function() {
        expect(isCamelCase("0.0", false)).to.be.false;
        expect(isCamelCase("lower.dot.case", false)).to.be.false;
        expect(isCamelCase(".lower.dot.case", false)).to.be.false;
        expect(isCamelCase("lower.dot.case.", false)).to.be.false;
        expect(isCamelCase("lower..dot", false)).to.be.false;
        expect(isCamelCase("0.lower.dot.case", false)).to.be.false;
        expect(isCamelCase("0.0", true)).to.be.false;
        expect(isCamelCase("lower.dot.case", true)).to.be.false;
        expect(isCamelCase(".lower.dot.case", true)).to.be.false;
        expect(isCamelCase("lower.dot.case.", true)).to.be.false;
        expect(isCamelCase("lower..dot", true)).to.be.false;
        expect(isCamelCase("0.lower.dot.case", true)).to.be.false;
      });
    });

    context("an upper dot case,", function() {
      it("should return false", function() {
        expect(isCamelCase("Upper.Dot.Case", false)).to.be.false;
        expect(isCamelCase(".Upper.Dot.Case", false)).to.be.false;
        expect(isCamelCase("Upper.Dot.Case.", false)).to.be.false;
        expect(isCamelCase("Upper..Dot", false)).to.be.false;
        expect(isCamelCase("0.Upper.Dot.Case", false)).to.be.false;
        expect(isCamelCase("Upper.Dot.Case", true)).to.be.false;
        expect(isCamelCase(".Upper.Dot.Case", true)).to.be.false;
        expect(isCamelCase("Upper.Dot.Case.", true)).to.be.false;
        expect(isCamelCase("Upper..Dot", true)).to.be.false;
        expect(isCamelCase("0.Upper.Dot.Case", true)).to.be.false;
      });
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(isCamelCase(true, false)).to.be.false;
      expect(isCamelCase(true, true)).to.be.false;
      expect(isCamelCase(false, false)).to.be.false;
      expect(isCamelCase(false, true)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should return false", function() {
      expect(isCamelCase([], false)).to.be.false;
      expect(isCamelCase([], true)).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isCamelCase({}, false)).to.be.false;
      expect(isCamelCase({}, true)).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      expect(isCamelCase(() => true, false)).to.be.false;
      expect(isCamelCase(() => true, true)).to.be.false;
    });
  });
});
