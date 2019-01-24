// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { isEmpty } from "./empty-checker";

describe("[ Empty Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isEmpty(undefined)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isEmpty(null)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return false", function() {
        expect(isEmpty(0)).to.be.false;
      });
    });

    context("a positive number,", function() {
      it("should return false", function() {
        expect(isEmpty(1)).to.be.false;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isEmpty(-1)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isEmpty("")).to.be.true;
      });
    });

    context("a string which has only spaces,", function() {
      it("should return false", function() {
        expect(isEmpty(" ")).to.be.false;
        expect(isEmpty("  ")).to.be.false;
        expect(isEmpty("   ")).to.be.false;
      });
    });

    context("an ordinary string,", function() {
      it("should return false", function() {
        expect(isEmpty("a")).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    context("true,", function() {
      it("should return false", function() {
        expect(isEmpty(true)).to.be.false;
      });
    });

    context("false,", function() {
      it("should return false", function() {
        expect(isEmpty(false)).to.be.false;
      });
    });
  });

  context("when a value is array,", function() {
    context("an empty array,", function() {
      it("should return true", function() {
        expect(isEmpty([])).to.be.true;
      });
    });

    context("an array which has only undefined,", function() {
      it("should return false", function() {
        expect(isEmpty([undefined, undefined])).to.be.false;
      });
    });

    context("an array which has only null,", function() {
      it("should return false", function() {
        expect(isEmpty([null, null])).to.be.false;
      });
    });

    context("an ordinary array,", function() {
      it("should return false", function() {
        expect(isEmpty([1, 2, 3])).to.be.false;
      });
    });
  });

  context("when a value is object,", function() {
    context("an empty object,", function() {
      it("should return true", function() {
        expect(isEmpty({})).to.be.true;
      });
    });

    context("an object which has only undefined as value,", function() {
      it("should return false", function() {
        expect(isEmpty({ a: undefined, b: undefined })).to.be.false;
      });
    });

    context("an object which has only null as value,", function() {
      it("should return false", function() {
        expect(isEmpty({ a: null, b: null })).to.be.false;
      });
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isEmpty(() => true)).to.be.false;
    });
  });
});
