// =============================================================================================================================
// SRC - CHECKERS - ALPHANUMERIC CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isAlphanumeric } from "./alphanumeric-checker";

describe("[ Alphanumeric Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isAlphanumeric(undefined)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isAlphanumeric(null)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isAlphanumeric(0)).to.be.true;
      });
    });

    context("a positive integer,", function() {
      it("should return true", function() {
        expect(isAlphanumeric(1)).to.be.true;
      });
    });

    context("a negative integer,", function() {
      it("should return false", function() {
        expect(isAlphanumeric(-1)).to.be.false;
      });
    });

    context("a floating point number,", function() {
      it("should return false", function() {
        expect(isAlphanumeric(1.1)).to.be.false;
        expect(isAlphanumeric(-1.1)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("including only number and alphabets,", function() {
      it("should return true", function() {
        expect(isAlphanumeric("0")).to.be.true;
        expect(isAlphanumeric("1")).to.be.true;
        expect(isAlphanumeric("Abc")).to.be.true;
        expect(isAlphanumeric("00Abc11")).to.be.true;
      });
    });

    context("an empty string,", function() {
      it("should return true", function() {
        expect(isAlphanumeric("")).to.be.true;
      });
    });

    context("including spaces and symbols,", function() {
      it("should return false", function() {
        expect(isAlphanumeric(" ")).to.be.false;
        expect(isAlphanumeric("-")).to.be.false;
        expect(isAlphanumeric("!")).to.be.false;
        expect(isAlphanumeric("?")).to.be.false;
        expect(isAlphanumeric("+")).to.be.false;
        expect(isAlphanumeric("@")).to.be.false;
        expect(isAlphanumeric("#")).to.be.false;
        expect(isAlphanumeric("-1")).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isAlphanumeric(true)).to.be.false;
      expect(isAlphanumeric(false)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isAlphanumeric([])).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isAlphanumeric({})).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isAlphanumeric(() => true)).to.be.false;
    });
  });
});
