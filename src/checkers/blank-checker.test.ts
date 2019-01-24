// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { isBlank } from "./blank-checker";

describe("[ Blank Checker ]", function() {
  context("when calling with undefined,", function() {
    it("should return true", function() {
      expect(isBlank(undefined)).to.be.true;
    });
  });

  context("when calling with null,", function() {
    it("should return true", function() {
      expect(isBlank(null)).to.be.true;
    });
  });

  context("when calling with number,", function() {
    context("zero,", function() {
      it("should return false", function() {
        expect(isBlank(0)).to.be.false;
      });
    });

    context("a positive number,", function() {
      it("should return false", function() {
        expect(isBlank(1)).to.be.false;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isBlank(-1)).to.be.false;
      });
    });
  });

  context("when calling with string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isBlank("")).to.be.true;
      });
    });

    context("a string which has only spaces,", function() {
      it("should return true", function() {
        expect(isBlank(" ")).to.be.true;
        expect(isBlank("  ")).to.be.true;
        expect(isBlank("   ")).to.be.true;
      });
    });

    context("an ordinary string,", function() {
      it("should return false", function() {
        expect(isBlank("a")).to.be.false;
      });
    });
  });

  context("when calling with boolean,", function() {
    context("true,", function() {
      it("should return false", function() {
        expect(isBlank(true)).to.be.false;
      });
    });

    context("false,", function() {
      it("should return true", function() {
        expect(isBlank(false)).to.be.true;
      });
    });
  });

  context("when calling with array,", function() {
    context("an empty array,", function() {
      it("should return true", function() {
        expect(isBlank([])).to.be.true;
      });
    });

    context("an array which has only undefined,", function() {
      it("should return false", function() {
        expect(isBlank([undefined, undefined])).to.be.false;
      });
    });

    context("an array which has only null,", function() {
      it("should return false", function() {
        expect(isBlank([null, null])).to.be.false;
      });
    });

    context("an ordinary array,", function() {
      it("should return false", function() {
        expect(isBlank([1, 2, 3])).to.be.false;
      });
    });
  });

  context("when calling with object,", function() {
    context("an empty object,", function() {
      it("should return true", function() {
        expect(isBlank({})).to.be.true;
      });
    });

    context("an object which has only undefined as value,", function() {
      it("should return false", function() {
        expect(isBlank({ a: undefined, b: undefined })).to.be.false;
      });
    });

    context("an object which has only null as value,", function() {
      it("should return false", function() {
        expect(isBlank({ a: null, b: null })).to.be.false;
      });
    });
  });

  context("when calling with function,", function() {
    it("should return false", function() {
      expect(isBlank(() => true)).to.be.false;
    });
  });
});
