// =============================================================================================================================
// SRC - CHECKERS - NULLARY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isNullary } from "./nullary";

describe("[ Nullary Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be true", function() {
        expect(isNullary(undefined).isPassed).to.be.true;
      });
    });

    context("when a target value is null,", function() {
      it("should be true", function() {
        expect(isNullary(null).isPassed).to.be.true;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be false", function() {
          expect(isNullary(0).isPassed).to.be.false;
        });
      });

      context("a positive number,", function() {
        it("should be false", function() {
          expect(isNullary(1).isPassed).to.be.false;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isNullary(-1).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be false", function() {
          expect(isNullary("").isPassed).to.be.false;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be false", function() {
          expect(isNullary(" ").isPassed).to.be.false;
          expect(isNullary("  ").isPassed).to.be.false;
          expect(isNullary("   ").isPassed).to.be.false;
        });
      });

      context("an ordinary string,", function() {
        it("should be false", function() {
          expect(isNullary("a").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be false", function() {
          expect(isNullary(true).isPassed).to.be.false;
        });
      });

      context("false,", function() {
        it("should be false", function() {
          expect(isNullary(false).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be false", function() {
          expect(isNullary([]).isPassed).to.be.false;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be false", function() {
          expect(isNullary([undefined, undefined]).isPassed).to.be.false;
        });
      });

      context("an array which has only null,", function() {
        it("should be false", function() {
          expect(isNullary([null, null]).isPassed).to.be.false;
        });
      });

      context("an ordinary array,", function() {
        it("should be false", function() {
          expect(isNullary([1, 2, 3]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be false", function() {
          expect(isNullary({}).isPassed).to.be.false;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be false", function() {
          expect(isNullary({ a: undefined, b: undefined }).isPassed).to.be.false;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be false", function() {
          expect(isNullary({ a: null, b: null }).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isNullary(() => true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it('should be "nullary"', function() {
      allTypeValues.forEach((value: any) => {
        expect(isNullary(value).expected).to.eq("nullary");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isNullary(value).actual).to.eq(value);
      });
    });
  });
});
