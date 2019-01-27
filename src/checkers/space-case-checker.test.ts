// =============================================================================================================================
// SRC - CHECKERS - SPACE CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isSpaceCase } from "./space-case-checker";

describe("[ Space Case Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isSpaceCase(undefined, false)).to.be.false;
      expect(isSpaceCase(undefined, true)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isSpaceCase(null, false)).to.be.false;
      expect(isSpaceCase(null, true)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isSpaceCase(0, false)).to.be.true;
        expect(isSpaceCase(0, true)).to.be.true;
      });
    });

    context("a positive number,", function() {
      it("should return true", function() {
        expect(isSpaceCase(1, false)).to.be.true;
        expect(isSpaceCase(1, true)).to.be.true;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isSpaceCase(-1, false)).to.be.false;
        expect(isSpaceCase(-1, true)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isSpaceCase("", false)).to.be.true;
        expect(isSpaceCase("", true)).to.be.true;
      });
    });

    context("a lower camel case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("lowerCamelCase", false)).to.be.false;
        expect(isSpaceCase("lowerCCamel", false)).to.be.false;
        expect(isSpaceCase("000LowerCamelCase", false)).to.be.false;
        expect(isSpaceCase("lowerCamelCase", true)).to.be.false;
        expect(isSpaceCase("lowerCCamel", true)).to.be.false;
        expect(isSpaceCase("000LowerCamelCase", true)).to.be.false;
      });
    });

    context("an upper camel case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("UpperCamelCase", false)).to.be.false;
        expect(isSpaceCase("UpperCCamel", false)).to.be.false;
        expect(isSpaceCase("000UpperCamelCase", false)).to.be.false;
        expect(isSpaceCase("UpperCamelCase", true)).to.be.false;
        expect(isSpaceCase("UpperCCamel", true)).to.be.false;
        expect(isSpaceCase("000UpperCamelCase", true)).to.be.false;
      });
    });

    context("a lower snake case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("0_0", false)).to.be.false;
        expect(isSpaceCase("lower_snake_case", false)).to.be.false;
        expect(isSpaceCase("_lower_snake_case", false)).to.be.false;
        expect(isSpaceCase("lower_snake_case_", false)).to.be.false;
        expect(isSpaceCase("lower__snake", false)).to.be.false;
        expect(isSpaceCase("0_lower_snake_case", false)).to.be.false;
        expect(isSpaceCase("0_0", true)).to.be.false;
        expect(isSpaceCase("lower_snake_case", true)).to.be.false;
        expect(isSpaceCase("_lower_snake_case", true)).to.be.false;
        expect(isSpaceCase("lower_snake_case_", true)).to.be.false;
        expect(isSpaceCase("lower__snake", true)).to.be.false;
        expect(isSpaceCase("0_lower_snake_case", true)).to.be.false;
      });
    });

    context("an upper snake case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("Upper_Snake_Case", false)).to.be.false;
        expect(isSpaceCase("_Upper_Snake_Case", false)).to.be.false;
        expect(isSpaceCase("Upper_Snake_Case_", false)).to.be.false;
        expect(isSpaceCase("Upper__Snake", false)).to.be.false;
        expect(isSpaceCase("0_Upper_Snake_Case", false)).to.be.false;
        expect(isSpaceCase("Upper_Snake_Case", true)).to.be.false;
        expect(isSpaceCase("_Upper_Snake_Case", true)).to.be.false;
        expect(isSpaceCase("Upper_Snake_Case_", true)).to.be.false;
        expect(isSpaceCase("Upper__Snake", true)).to.be.false;
        expect(isSpaceCase("0_Upper_Snake_Case", true)).to.be.false;
      });
    });

    context("a lower kebab case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("0-0", false)).to.be.false;
        expect(isSpaceCase("lower-kebab-case", false)).to.be.false;
        expect(isSpaceCase("-lower-kebab-case", false)).to.be.false;
        expect(isSpaceCase("lower-kebab-case-", false)).to.be.false;
        expect(isSpaceCase("lower--kebab", false)).to.be.false;
        expect(isSpaceCase("0-lower-kebab-case", false)).to.be.false;
        expect(isSpaceCase("0-0", true)).to.be.false;
        expect(isSpaceCase("lower-kebab-case", true)).to.be.false;
        expect(isSpaceCase("-lower-kebab-case", true)).to.be.false;
        expect(isSpaceCase("lower-kebab-case-", true)).to.be.false;
        expect(isSpaceCase("lower--kebab", true)).to.be.false;
        expect(isSpaceCase("0-lower-kebab-case", true)).to.be.false;
      });
    });

    context("an upper kebab case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("Upper-Kebab-Case", false)).to.be.false;
        expect(isSpaceCase("-Upper-Kebab-Case", false)).to.be.false;
        expect(isSpaceCase("Upper-Kebab-Case-", false)).to.be.false;
        expect(isSpaceCase("Upper--Kebab", false)).to.be.false;
        expect(isSpaceCase("0-Upper-Kebab-Case", false)).to.be.false;
        expect(isSpaceCase("Upper-Kebab-Case", true)).to.be.false;
        expect(isSpaceCase("-Upper-Kebab-Case", true)).to.be.false;
        expect(isSpaceCase("Upper-Kebab-Case-", true)).to.be.false;
        expect(isSpaceCase("Upper--Kebab", true)).to.be.false;
        expect(isSpaceCase("0-Upper-Kebab-Case", true)).to.be.false;
      });
    });

    context("a lower space case,", function() {
      context('"isUpper" is false,', function() {
        it("should return true", function() {
          expect(isSpaceCase("0", false)).to.be.true;
          expect(isSpaceCase("0 0", false)).to.be.true;
          expect(isSpaceCase("short", false)).to.be.true;
          expect(isSpaceCase("lower space case", false)).to.be.true;
          expect(isSpaceCase(" lower space case", false)).to.be.false;
          expect(isSpaceCase("lower space case ", false)).to.be.false;
          expect(isSpaceCase("lower  space", false)).to.be.false;
          expect(isSpaceCase("0 lower space case", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return false", function() {
          expect(isSpaceCase("0", true)).to.be.true;
          expect(isSpaceCase("0 0", true)).to.be.true;
          expect(isSpaceCase("short", true)).to.be.false;
          expect(isSpaceCase("lower space case", true)).to.be.false;
          expect(isSpaceCase(" lower space case", true)).to.be.false;
          expect(isSpaceCase("lower space case ", true)).to.be.false;
          expect(isSpaceCase("lower  space", true)).to.be.false;
          expect(isSpaceCase("0 lower space case", true)).to.be.false;
        });
      });
    });

    context("an upper space case,", function() {
      context('"isUpper" is false,', function() {
        it("should return false", function() {
          expect(isSpaceCase("Short", false)).to.be.false;
          expect(isSpaceCase("Upper Space Case", false)).to.be.false;
          expect(isSpaceCase(" Upper Space Case", false)).to.be.false;
          expect(isSpaceCase("Upper Space Case ", false)).to.be.false;
          expect(isSpaceCase("Upper  Space", false)).to.be.false;
          expect(isSpaceCase("0 Upper Space Case", false)).to.be.false;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return true", function() {
          expect(isSpaceCase("Short", true)).to.be.true;
          expect(isSpaceCase("Upper Space Case", true)).to.be.true;
          expect(isSpaceCase(" Upper Space Case", true)).to.be.false;
          expect(isSpaceCase("Upper Space Case ", true)).to.be.false;
          expect(isSpaceCase("Upper  Space", true)).to.be.false;
          expect(isSpaceCase("0 Upper Space Case", true)).to.be.true;
        });
      });
    });

    context("a lower dot case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("0.0", false)).to.be.false;
        expect(isSpaceCase("lower.dot.case", false)).to.be.false;
        expect(isSpaceCase(".lower.dot.case", false)).to.be.false;
        expect(isSpaceCase("lower.dot.case.", false)).to.be.false;
        expect(isSpaceCase("lower..dot", false)).to.be.false;
        expect(isSpaceCase("0.lower.dot.case", false)).to.be.false;
        expect(isSpaceCase("0.0", true)).to.be.false;
        expect(isSpaceCase("lower.dot.case", true)).to.be.false;
        expect(isSpaceCase(".lower.dot.case", true)).to.be.false;
        expect(isSpaceCase("lower.dot.case.", true)).to.be.false;
        expect(isSpaceCase("lower..dot", true)).to.be.false;
        expect(isSpaceCase("0.lower.dot.case", true)).to.be.false;
      });
    });

    context("an upper dot case,", function() {
      it("should return false", function() {
        expect(isSpaceCase("Upper.Dot.Case", false)).to.be.false;
        expect(isSpaceCase(".Upper.Dot.Case", false)).to.be.false;
        expect(isSpaceCase("Upper.Dot.Case.", false)).to.be.false;
        expect(isSpaceCase("Upper..Dot", false)).to.be.false;
        expect(isSpaceCase("0.Upper.Dot.Case", false)).to.be.false;
        expect(isSpaceCase("Upper.Dot.Case", true)).to.be.false;
        expect(isSpaceCase(".Upper.Dot.Case", true)).to.be.false;
        expect(isSpaceCase("Upper.Dot.Case.", true)).to.be.false;
        expect(isSpaceCase("Upper..Dot", true)).to.be.false;
        expect(isSpaceCase("0.Upper.Dot.Case", true)).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isSpaceCase(true, false)).to.be.false;
      expect(isSpaceCase(true, true)).to.be.false;
      expect(isSpaceCase(false, false)).to.be.false;
      expect(isSpaceCase(false, true)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isSpaceCase([], false)).to.be.false;
      expect(isSpaceCase([], true)).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isSpaceCase({}, false)).to.be.false;
      expect(isSpaceCase({}, true)).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isSpaceCase(() => true, false)).to.be.false;
      expect(isSpaceCase(() => true, true)).to.be.false;
    });
  });
});
