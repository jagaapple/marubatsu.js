// =============================================================================================================================
// SRC - CHECKERS - DOT CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isDotCase } from "./dot-case-checker";

describe("[ Dot Case Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isDotCase(undefined, false)).to.be.false;
      expect(isDotCase(undefined, true)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isDotCase(null, false)).to.be.false;
      expect(isDotCase(null, true)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isDotCase(0, false)).to.be.true;
        expect(isDotCase(0, true)).to.be.true;
      });
    });

    context("a positive number,", function() {
      it("should return true", function() {
        expect(isDotCase(1, false)).to.be.true;
        expect(isDotCase(1, true)).to.be.true;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isDotCase(-1, false)).to.be.false;
        expect(isDotCase(-1, true)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isDotCase("", false)).to.be.true;
        expect(isDotCase("", true)).to.be.true;
      });
    });

    context("a lower camel case,", function() {
      it("should return false", function() {
        expect(isDotCase("lowerCamelCase", false)).to.be.false;
        expect(isDotCase("lowerCCamel", false)).to.be.false;
        expect(isDotCase("000LowerCamelCase", false)).to.be.false;
        expect(isDotCase("lowerCamelCase", true)).to.be.false;
        expect(isDotCase("lowerCCamel", true)).to.be.false;
        expect(isDotCase("000LowerCamelCase", true)).to.be.false;
      });
    });

    context("an upper camel case,", function() {
      it("should return false", function() {
        expect(isDotCase("UpperCamelCase", false)).to.be.false;
        expect(isDotCase("UpperCCamel", false)).to.be.false;
        expect(isDotCase("000UpperCamelCase", false)).to.be.false;
        expect(isDotCase("UpperCamelCase", true)).to.be.false;
        expect(isDotCase("UpperCCamel", true)).to.be.false;
        expect(isDotCase("000UpperCamelCase", true)).to.be.false;
      });
    });

    context("a lower snake case,", function() {
      it("should return false", function() {
        expect(isDotCase("0_0", false)).to.be.false;
        expect(isDotCase("lower_snake_case", false)).to.be.false;
        expect(isDotCase("_lower_snake_case", false)).to.be.false;
        expect(isDotCase("lower_snake_case_", false)).to.be.false;
        expect(isDotCase("lower__snake", false)).to.be.false;
        expect(isDotCase("0_lower_snake_case", false)).to.be.false;
        expect(isDotCase("0_0", true)).to.be.false;
        expect(isDotCase("lower_snake_case", true)).to.be.false;
        expect(isDotCase("_lower_snake_case", true)).to.be.false;
        expect(isDotCase("lower_snake_case_", true)).to.be.false;
        expect(isDotCase("lower__snake", true)).to.be.false;
        expect(isDotCase("0_lower_snake_case", true)).to.be.false;
      });
    });

    context("an upper snake case,", function() {
      it("should return false", function() {
        expect(isDotCase("Upper_Snake_Case", false)).to.be.false;
        expect(isDotCase("_Upper_Snake_Case", false)).to.be.false;
        expect(isDotCase("Upper_Snake_Case_", false)).to.be.false;
        expect(isDotCase("Upper__Snake", false)).to.be.false;
        expect(isDotCase("0_Upper_Snake_Case", false)).to.be.false;
        expect(isDotCase("Upper_Snake_Case", true)).to.be.false;
        expect(isDotCase("_Upper_Snake_Case", true)).to.be.false;
        expect(isDotCase("Upper_Snake_Case_", true)).to.be.false;
        expect(isDotCase("Upper__Snake", true)).to.be.false;
        expect(isDotCase("0_Upper_Snake_Case", true)).to.be.false;
      });
    });

    context("a lower kebab case,", function() {
      it("should return false", function() {
        expect(isDotCase("0-0", false)).to.be.false;
        expect(isDotCase("lower-kebab-case", false)).to.be.false;
        expect(isDotCase("-lower-kebab-case", false)).to.be.false;
        expect(isDotCase("lower-kebab-case-", false)).to.be.false;
        expect(isDotCase("lower--kebab", false)).to.be.false;
        expect(isDotCase("0-lower-kebab-case", false)).to.be.false;
        expect(isDotCase("0-0", true)).to.be.false;
        expect(isDotCase("lower-kebab-case", true)).to.be.false;
        expect(isDotCase("-lower-kebab-case", true)).to.be.false;
        expect(isDotCase("lower-kebab-case-", true)).to.be.false;
        expect(isDotCase("lower--kebab", true)).to.be.false;
        expect(isDotCase("0-lower-kebab-case", true)).to.be.false;
      });
    });

    context("an upper kebab case,", function() {
      it("should return false", function() {
        expect(isDotCase("Upper-Kebab-Case", false)).to.be.false;
        expect(isDotCase("-Upper-Kebab-Case", false)).to.be.false;
        expect(isDotCase("Upper-Kebab-Case-", false)).to.be.false;
        expect(isDotCase("Upper--Kebab", false)).to.be.false;
        expect(isDotCase("0-Upper-Kebab-Case", false)).to.be.false;
        expect(isDotCase("Upper-Kebab-Case", true)).to.be.false;
        expect(isDotCase("-Upper-Kebab-Case", true)).to.be.false;
        expect(isDotCase("Upper-Kebab-Case-", true)).to.be.false;
        expect(isDotCase("Upper--Kebab", true)).to.be.false;
        expect(isDotCase("0-Upper-Kebab-Case", true)).to.be.false;
      });
    });

    context("a lower space case,", function() {
      it("should return false", function() {
        expect(isDotCase("0 0", false)).to.be.false;
        expect(isDotCase("lower space case", false)).to.be.false;
        expect(isDotCase(" lower space case", false)).to.be.false;
        expect(isDotCase("lower space case ", false)).to.be.false;
        expect(isDotCase("lower  space", false)).to.be.false;
        expect(isDotCase("0 lower space case", false)).to.be.false;
        expect(isDotCase("0 0", true)).to.be.false;
        expect(isDotCase("lower space case", true)).to.be.false;
        expect(isDotCase(" lower space case", true)).to.be.false;
        expect(isDotCase("lower space case ", true)).to.be.false;
        expect(isDotCase("lower  space", true)).to.be.false;
        expect(isDotCase("0 lower space case", true)).to.be.false;
      });
    });

    context("an upper space case,", function() {
      it("should return false", function() {
        expect(isDotCase("Upper Space Case", false)).to.be.false;
        expect(isDotCase(" Upper Space Case", false)).to.be.false;
        expect(isDotCase("Upper Space Case ", false)).to.be.false;
        expect(isDotCase("Upper  Space", false)).to.be.false;
        expect(isDotCase("0 Upper Space Case", false)).to.be.false;
        expect(isDotCase("Upper Space Case", true)).to.be.false;
        expect(isDotCase(" Upper Space Case", true)).to.be.false;
        expect(isDotCase("Upper Space Case ", true)).to.be.false;
        expect(isDotCase("Upper  Space", true)).to.be.false;
        expect(isDotCase("0 Upper Space Case", true)).to.be.false;
      });
    });

    context("a lower dot case,", function() {
      context('"isUpper" is false,', function() {
        it("should return true", function() {
          expect(isDotCase("0", false)).to.be.true;
          expect(isDotCase("0.0", false)).to.be.true;
          expect(isDotCase("short", false)).to.be.true;
          expect(isDotCase("lower.dot.case", false)).to.be.true;
          expect(isDotCase(".lower.dot.case", false)).to.be.false;
          expect(isDotCase("lower.dot.case.", false)).to.be.false;
          expect(isDotCase("lower..dot", false)).to.be.false;
          expect(isDotCase("0.lower.dot.case", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return false", function() {
          expect(isDotCase("0", true)).to.be.true;
          expect(isDotCase("0.0", true)).to.be.true;
          expect(isDotCase("short", true)).to.be.false;
          expect(isDotCase("lower.dot.case", true)).to.be.false;
          expect(isDotCase(".lower.dot.case", true)).to.be.false;
          expect(isDotCase("lower.dot.case.", true)).to.be.false;
          expect(isDotCase("lower..dot", true)).to.be.false;
          expect(isDotCase("0.lower.dot.case", true)).to.be.false;
        });
      });
    });

    context("an upper dot case,", function() {
      context('"isUpper" is false,', function() {
        it("should return false", function() {
          expect(isDotCase("Short", false)).to.be.false;
          expect(isDotCase("Upper.Dot.Case", false)).to.be.false;
          expect(isDotCase(".Upper.Dot.Case", false)).to.be.false;
          expect(isDotCase("Upper.Dot.Case.", false)).to.be.false;
          expect(isDotCase("Upper..Dot", false)).to.be.false;
          expect(isDotCase("0.Upper.Dot.Case", false)).to.be.false;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return true", function() {
          expect(isDotCase("Short", true)).to.be.true;
          expect(isDotCase("Upper.Dot.Case", true)).to.be.true;
          expect(isDotCase(".Upper.Dot.Case", true)).to.be.false;
          expect(isDotCase("Upper.Dot.Case.", true)).to.be.false;
          expect(isDotCase("Upper..Dot", true)).to.be.false;
          expect(isDotCase("0.Upper.Dot.Case", true)).to.be.true;
        });
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isDotCase(true, false)).to.be.false;
      expect(isDotCase(true, true)).to.be.false;
      expect(isDotCase(false, false)).to.be.false;
      expect(isDotCase(false, true)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isDotCase([], false)).to.be.false;
      expect(isDotCase([], true)).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isDotCase({}, false)).to.be.false;
      expect(isDotCase({}, true)).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isDotCase(() => true, false)).to.be.false;
      expect(isDotCase(() => true, true)).to.be.false;
    });
  });
});
