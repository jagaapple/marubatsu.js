// =============================================================================================================================
// SRC - CHECKERS - EMPTY CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isEmpty } from "./empty-checker";

describe("[ Empty Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isEmpty(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isEmpty(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be false", function() {
          expect(isEmpty(0).isPassed).to.be.false;
        });
      });

      context("a positive number,", function() {
        it("should be false", function() {
          expect(isEmpty(1).isPassed).to.be.false;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isEmpty(-1).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isEmpty("").isPassed).to.be.true;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be false", function() {
          expect(isEmpty(" ").isPassed).to.be.false;
          expect(isEmpty("  ").isPassed).to.be.false;
          expect(isEmpty("   ").isPassed).to.be.false;
        });
      });

      context("an ordinary string,", function() {
        it("should be false", function() {
          expect(isEmpty("a").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be false", function() {
          expect(isEmpty(true).isPassed).to.be.false;
        });
      });

      context("false,", function() {
        it("should be false", function() {
          expect(isEmpty(false).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be true", function() {
          expect(isEmpty([]).isPassed).to.be.true;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be false", function() {
          expect(isEmpty([undefined, undefined]).isPassed).to.be.false;
        });
      });

      context("an array which has only null,", function() {
        it("should be false", function() {
          expect(isEmpty([null, null]).isPassed).to.be.false;
        });
      });

      context("an ordinary array,", function() {
        it("should be false", function() {
          expect(isEmpty([1, 2, 3]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be true", function() {
          expect(isEmpty({}).isPassed).to.be.true;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be false", function() {
          expect(isEmpty({ a: undefined, b: undefined }).isPassed).to.be.false;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be false", function() {
          expect(isEmpty({ a: null, b: null }).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isEmpty(() => true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isEmpty(value).actual).to.eq(value);
      });
    });
  });
});
