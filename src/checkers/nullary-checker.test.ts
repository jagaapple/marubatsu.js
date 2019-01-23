// =============================================================================================================================
// SRC - CHECKERS - NULLARY CHECKER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { isNullary } from "./nullary-checker";

describe("[ Nullary Checker ]", function() {
  context("when calling with undefined,", function() {
    it("should return true", function() {
      expect(isNullary(undefined)).to.be.true;
    });
  });

  context("when calling with null,", function() {
    it("should return true", function() {
      expect(isNullary(null)).to.be.true;
    });
  });

  context("when calling with number,", function() {
    context("zero,", function() {
      it("should return false", function() {
        expect(isNullary(0)).to.be.false;
      });
    });

    context("a positive number,", function() {
      it("should return false", function() {
        expect(isNullary(1)).to.be.false;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isNullary(-1)).to.be.false;
      });
    });
  });

  context("when calling with string,", function() {
    context("an empty string,", function() {
      it("should return false", function() {
        expect(isNullary("")).to.be.false;
      });
    });

    context("a string which has only spaces,", function() {
      it("should return false", function() {
        expect(isNullary(" ")).to.be.false;
        expect(isNullary("  ")).to.be.false;
        expect(isNullary("   ")).to.be.false;
      });
    });

    context("an ordinary string,", function() {
      it("should return false", function() {
        expect(isNullary("a")).to.be.false;
      });
    });
  });

  context("when calling with boolean,", function() {
    context("true,", function() {
      it("should return false", function() {
        expect(isNullary(true)).to.be.false;
      });
    });

    context("false,", function() {
      it("should return false", function() {
        expect(isNullary(false)).to.be.false;
      });
    });
  });

  context("when calling with array,", function() {
    context("an empty array,", function() {
      it("should return false", function() {
        expect(isNullary([])).to.be.false;
      });
    });

    context("an array which has only undefined,", function() {
      it("should return false", function() {
        expect(isNullary([undefined, undefined])).to.be.false;
      });
    });

    context("an array which has only null,", function() {
      it("should return false", function() {
        expect(isNullary([null, null])).to.be.false;
      });
    });

    context("an ordinary array,", function() {
      it("should return false", function() {
        expect(isNullary([1, 2, 3])).to.be.false;
      });
    });
  });

  context("when calling with object,", function() {
    context("an empty object,", function() {
      it("should return false", function() {
        expect(isNullary({})).to.be.false;
      });
    });

    context("an object which has only undefined as value,", function() {
      it("should return false", function() {
        expect(isNullary({ a: undefined, b: undefined })).to.be.false;
      });
    });

    context("an object which has only null as value,", function() {
      it("should return false", function() {
        expect(isNullary({ a: null, b: null })).to.be.false;
      });
    });
  });

  context("when calling with function,", function() {
    it("should return false", function() {
      expect(isNullary(() => true)).to.be.false;
    });
  });
});
