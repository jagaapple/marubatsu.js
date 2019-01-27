// =============================================================================================================================
// SRC - CHECKERS - SNAKE CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isSnakeCase } from "./snake-case-checker";

describe("[ Snake Case Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isSnakeCase(undefined, false)).to.be.false;
      expect(isSnakeCase(undefined, true)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isSnakeCase(null, false)).to.be.false;
      expect(isSnakeCase(null, true)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isSnakeCase(0, false)).to.be.true;
        expect(isSnakeCase(0, true)).to.be.true;
      });
    });

    context("a positive number,", function() {
      it("should return true", function() {
        expect(isSnakeCase(1, false)).to.be.true;
        expect(isSnakeCase(1, true)).to.be.true;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isSnakeCase(-1, false)).to.be.false;
        expect(isSnakeCase(-1, true)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isSnakeCase("", false)).to.be.true;
        expect(isSnakeCase("", true)).to.be.true;
      });
    });

    context("a lower camel case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("lowerCamelCase", false)).to.be.false;
        expect(isSnakeCase("lowerCCamel", false)).to.be.false;
        expect(isSnakeCase("000LowerCamelCase", false)).to.be.false;
        expect(isSnakeCase("lowerCamelCase", true)).to.be.false;
        expect(isSnakeCase("lowerCCamel", true)).to.be.false;
        expect(isSnakeCase("000LowerCamelCase", true)).to.be.false;
      });
    });

    context("an upper camel case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("UpperCamelCase", false)).to.be.false;
        expect(isSnakeCase("UpperCCamel", false)).to.be.false;
        expect(isSnakeCase("000UpperCamelCase", false)).to.be.false;
        expect(isSnakeCase("UpperCamelCase", true)).to.be.false;
        expect(isSnakeCase("UpperCCamel", true)).to.be.false;
        expect(isSnakeCase("000UpperCamelCase", true)).to.be.false;
      });
    });

    context("a lower snake case,", function() {
      context('"isUpper" is false,', function() {
        it("should return true", function() {
          expect(isSnakeCase("0", false)).to.be.true;
          expect(isSnakeCase("0_0", false)).to.be.true;
          expect(isSnakeCase("short", false)).to.be.true;
          expect(isSnakeCase("lower_snake_case", false)).to.be.true;
          expect(isSnakeCase("_lower_snake_case", false)).to.be.false;
          expect(isSnakeCase("lower_snake_case_", false)).to.be.false;
          expect(isSnakeCase("lower__snake", false)).to.be.false;
          expect(isSnakeCase("0_lower_snake_case", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return false", function() {
          expect(isSnakeCase("0", true)).to.be.true;
          expect(isSnakeCase("0_0", true)).to.be.true;
          expect(isSnakeCase("short", true)).to.be.false;
          expect(isSnakeCase("lower_snake_case", true)).to.be.false;
          expect(isSnakeCase("_lower_snake_case", true)).to.be.false;
          expect(isSnakeCase("lower_snake_case_", true)).to.be.false;
          expect(isSnakeCase("lower__snake", true)).to.be.false;
          expect(isSnakeCase("0_lower_snake_case", true)).to.be.false;
        });
      });
    });

    context("an upper snake case,", function() {
      context('"isUpper" is false,', function() {
        it("should return false", function() {
          expect(isSnakeCase("Short", false)).to.be.false;
          expect(isSnakeCase("Upper_Snake_Case", false)).to.be.false;
          expect(isSnakeCase("_Upper_Snake_Case", false)).to.be.false;
          expect(isSnakeCase("Upper_Snake_Case_", false)).to.be.false;
          expect(isSnakeCase("Upper__Snake", false)).to.be.false;
          expect(isSnakeCase("0_Upper_Snake_Case", false)).to.be.false;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return true", function() {
          expect(isSnakeCase("Short", true)).to.be.true;
          expect(isSnakeCase("Upper_Snake_Case", true)).to.be.true;
          expect(isSnakeCase("_Upper_Snake_Case", true)).to.be.false;
          expect(isSnakeCase("Upper_Snake_Case_", true)).to.be.false;
          expect(isSnakeCase("Upper__Snake", true)).to.be.false;
          expect(isSnakeCase("0_Upper_Snake_Case", true)).to.be.true;
        });
      });
    });

    context("a lower kebab case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("0-0", false)).to.be.false;
        expect(isSnakeCase("lower-kebab-case", false)).to.be.false;
        expect(isSnakeCase("-lower-kebab-case", false)).to.be.false;
        expect(isSnakeCase("lower-kebab-case-", false)).to.be.false;
        expect(isSnakeCase("lower--kebab", false)).to.be.false;
        expect(isSnakeCase("0-lower-kebab-case", false)).to.be.false;
        expect(isSnakeCase("0-0", true)).to.be.false;
        expect(isSnakeCase("lower-kebab-case", true)).to.be.false;
        expect(isSnakeCase("-lower-kebab-case", true)).to.be.false;
        expect(isSnakeCase("lower-kebab-case-", true)).to.be.false;
        expect(isSnakeCase("lower--kebab", true)).to.be.false;
        expect(isSnakeCase("0-lower-kebab-case", true)).to.be.false;
      });
    });

    context("an upper kebab case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("Upper-Kebab-Case", false)).to.be.false;
        expect(isSnakeCase("-Upper-Kebab-Case", false)).to.be.false;
        expect(isSnakeCase("Upper-Kebab-Case-", false)).to.be.false;
        expect(isSnakeCase("Upper--Kebab", false)).to.be.false;
        expect(isSnakeCase("0-Upper-Kebab-Case", false)).to.be.false;
        expect(isSnakeCase("Upper-Kebab-Case", true)).to.be.false;
        expect(isSnakeCase("-Upper-Kebab-Case", true)).to.be.false;
        expect(isSnakeCase("Upper-Kebab-Case-", true)).to.be.false;
        expect(isSnakeCase("Upper--Kebab", true)).to.be.false;
        expect(isSnakeCase("0-Upper-Kebab-Case", true)).to.be.false;
      });
    });

    context("a lower space case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("0 0", false)).to.be.false;
        expect(isSnakeCase("lower space case", false)).to.be.false;
        expect(isSnakeCase(" lower space case", false)).to.be.false;
        expect(isSnakeCase("lower space case ", false)).to.be.false;
        expect(isSnakeCase("lower  space", false)).to.be.false;
        expect(isSnakeCase("0 lower space case", false)).to.be.false;
        expect(isSnakeCase("0 0", true)).to.be.false;
        expect(isSnakeCase("lower space case", true)).to.be.false;
        expect(isSnakeCase(" lower space case", true)).to.be.false;
        expect(isSnakeCase("lower space case ", true)).to.be.false;
        expect(isSnakeCase("lower  space", true)).to.be.false;
        expect(isSnakeCase("0 lower space case", true)).to.be.false;
      });
    });

    context("an upper space case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("Upper Space Case", false)).to.be.false;
        expect(isSnakeCase(" Upper Space Case", false)).to.be.false;
        expect(isSnakeCase("Upper Space Case ", false)).to.be.false;
        expect(isSnakeCase("Upper  Space", false)).to.be.false;
        expect(isSnakeCase("0 Upper Space Case", false)).to.be.false;
        expect(isSnakeCase("Upper Space Case", true)).to.be.false;
        expect(isSnakeCase(" Upper Space Case", true)).to.be.false;
        expect(isSnakeCase("Upper Space Case ", true)).to.be.false;
        expect(isSnakeCase("Upper  Space", true)).to.be.false;
        expect(isSnakeCase("0 Upper Space Case", true)).to.be.false;
      });
    });

    context("a lower dot case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("0.0", false)).to.be.false;
        expect(isSnakeCase("lower.dot.case", false)).to.be.false;
        expect(isSnakeCase(".lower.dot.case", false)).to.be.false;
        expect(isSnakeCase("lower.dot.case.", false)).to.be.false;
        expect(isSnakeCase("lower..dot", false)).to.be.false;
        expect(isSnakeCase("0.lower.dot.case", false)).to.be.false;
        expect(isSnakeCase("0.0", true)).to.be.false;
        expect(isSnakeCase("lower.dot.case", true)).to.be.false;
        expect(isSnakeCase(".lower.dot.case", true)).to.be.false;
        expect(isSnakeCase("lower.dot.case.", true)).to.be.false;
        expect(isSnakeCase("lower..dot", true)).to.be.false;
        expect(isSnakeCase("0.lower.dot.case", true)).to.be.false;
      });
    });

    context("an upper dot case,", function() {
      it("should return false", function() {
        expect(isSnakeCase("Upper.Dot.Case", false)).to.be.false;
        expect(isSnakeCase(".Upper.Dot.Case", false)).to.be.false;
        expect(isSnakeCase("Upper.Dot.Case.", false)).to.be.false;
        expect(isSnakeCase("Upper..Dot", false)).to.be.false;
        expect(isSnakeCase("0.Upper.Dot.Case", false)).to.be.false;
        expect(isSnakeCase("Upper.Dot.Case", true)).to.be.false;
        expect(isSnakeCase(".Upper.Dot.Case", true)).to.be.false;
        expect(isSnakeCase("Upper.Dot.Case.", true)).to.be.false;
        expect(isSnakeCase("Upper..Dot", true)).to.be.false;
        expect(isSnakeCase("0.Upper.Dot.Case", true)).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isSnakeCase(true, false)).to.be.false;
      expect(isSnakeCase(true, true)).to.be.false;
      expect(isSnakeCase(false, false)).to.be.false;
      expect(isSnakeCase(false, true)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isSnakeCase([], false)).to.be.false;
      expect(isSnakeCase([], true)).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isSnakeCase({}, false)).to.be.false;
      expect(isSnakeCase({}, true)).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isSnakeCase(() => true, false)).to.be.false;
      expect(isSnakeCase(() => true, true)).to.be.false;
    });
  });
});
