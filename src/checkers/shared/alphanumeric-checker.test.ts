// =============================================================================================================================
// SRC - CHECKERS - SHARED - ALPHANUMERIC CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { checkAlphanumeric } from "./alphanumeric-checker";

describe("[ Alphanumeric Checker ]", function() {
  context("when a target value is undefined,", function() {
    it("should be false", function() {
      expect(checkAlphanumeric(undefined)).to.be.false;
    });
  });

  context("when a target value is null,", function() {
    it("should be false", function() {
      expect(checkAlphanumeric(null)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("zero,", function() {
      it("should be true", function() {
        expect(checkAlphanumeric(0)).to.be.true;
      });
    });

    context("a positive integer,", function() {
      it("should be true", function() {
        expect(checkAlphanumeric(1)).to.be.true;
        expect(checkAlphanumeric(123)).to.be.true;
      });
    });

    context("a negative integer,", function() {
      it("should be false", function() {
        expect(checkAlphanumeric(-1)).to.be.false;
        expect(checkAlphanumeric(-123)).to.be.false;
      });
    });

    context("a floating point number,", function() {
      it("should be false", function() {
        expect(checkAlphanumeric(123.45)).to.be.false;
        expect(checkAlphanumeric(-123.45)).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    context("including only number and alphabets,", function() {
      it("should be true", function() {
        expect(checkAlphanumeric("0")).to.be.true;
        expect(checkAlphanumeric("1")).to.be.true;
        expect(checkAlphanumeric("Abc")).to.be.true;
        expect(checkAlphanumeric("00Abc11")).to.be.true;
      });
    });

    context("an empty string,", function() {
      it("should be true", function() {
        expect(checkAlphanumeric("")).to.be.true;
      });
    });

    context("including spaces and symbols,", function() {
      it("should be false", function() {
        expect(checkAlphanumeric(" ")).to.be.false;
        expect(checkAlphanumeric("-")).to.be.false;
        expect(checkAlphanumeric("!")).to.be.false;
        expect(checkAlphanumeric("?")).to.be.false;
        expect(checkAlphanumeric("+")).to.be.false;
        expect(checkAlphanumeric("@")).to.be.false;
        expect(checkAlphanumeric("#")).to.be.false;
        expect(checkAlphanumeric("-1")).to.be.false;
      });
    });
  });

  context("when a target value is boolean,", function() {
    it("should be false", function() {
      expect(checkAlphanumeric(true)).to.be.false;
      expect(checkAlphanumeric(false)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    it("should be false", function() {
      expect(checkAlphanumeric([])).to.be.false;
      expect(checkAlphanumeric([undefined])).to.be.false;
      expect(checkAlphanumeric([null])).to.be.false;
      expect(checkAlphanumeric([0])).to.be.false;
      expect(checkAlphanumeric([""])).to.be.false;
      expect(checkAlphanumeric([false])).to.be.false;
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should be false", function() {
      expect(checkAlphanumeric({})).to.be.false;
      expect(checkAlphanumeric({ a: undefined })).to.be.false;
      expect(checkAlphanumeric({ a: null })).to.be.false;
      expect(checkAlphanumeric({ a: 0 })).to.be.false;
      expect(checkAlphanumeric({ a: "" })).to.be.false;
      expect(checkAlphanumeric({ a: false })).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should be false", function() {
      expect(checkAlphanumeric(() => true)).to.be.false;
    });
  });
});
