// =============================================================================================================================
// SRC - CHECKERS - ALPHANUMERIC TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isAlphanumeric } from "./alphanumeric";

describe("[ Alphanumeric Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isAlphanumeric(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isAlphanumeric(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isAlphanumeric(0).isPassed).to.be.true;
        });
      });

      context("a positive integer,", function() {
        it("should be true", function() {
          expect(isAlphanumeric(1).isPassed).to.be.true;
        });
      });

      context("a negative integer,", function() {
        it("should be false", function() {
          expect(isAlphanumeric(-1).isPassed).to.be.false;
        });
      });

      context("a floating point number,", function() {
        it("should be false", function() {
          expect(isAlphanumeric(1.1).isPassed).to.be.false;
          expect(isAlphanumeric(-1.1).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("including only number and alphabets,", function() {
        it("should be true", function() {
          expect(isAlphanumeric("0").isPassed).to.be.true;
          expect(isAlphanumeric("1").isPassed).to.be.true;
          expect(isAlphanumeric("Abc").isPassed).to.be.true;
          expect(isAlphanumeric("00Abc11").isPassed).to.be.true;
        });
      });

      context("an empty string,", function() {
        it("should be true", function() {
          expect(isAlphanumeric("").isPassed).to.be.true;
        });
      });

      context("including spaces and symbols,", function() {
        it("should be false", function() {
          expect(isAlphanumeric(" ").isPassed).to.be.false;
          expect(isAlphanumeric("-").isPassed).to.be.false;
          expect(isAlphanumeric("!").isPassed).to.be.false;
          expect(isAlphanumeric("?").isPassed).to.be.false;
          expect(isAlphanumeric("+").isPassed).to.be.false;
          expect(isAlphanumeric("@").isPassed).to.be.false;
          expect(isAlphanumeric("#").isPassed).to.be.false;
          expect(isAlphanumeric("-1").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isAlphanumeric(true).isPassed).to.be.false;
        expect(isAlphanumeric(false).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be false", function() {
        expect(isAlphanumeric([]).isPassed).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(isAlphanumeric({}).isPassed).to.be.false;
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isAlphanumeric(() => true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is number or string,", function() {
      it("should be the number or string converted to string", function() {
        expect(isAlphanumeric(123).actual).to.eq("123");
        expect(isAlphanumeric("123abc").actual).to.eq("123abc");
      });
    });

    context("when a target value is not number or string,", function() {
      it("should be the target value", function() {
        expect(isAlphanumeric(true).actual).to.eq(true);
      });
    });
  });
});
