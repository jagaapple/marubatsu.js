// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isBlank } from "./blank-checker";

describe("[ Blank Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be true", function() {
        expect(isBlank(undefined).isPassed).to.be.true;
      });
    });

    context("when a target value is null,", function() {
      it("should be true", function() {
        expect(isBlank(null).isPassed).to.be.true;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be false", function() {
          expect(isBlank(0).isPassed).to.be.false;
        });
      });

      context("a positive number,", function() {
        it("should be false", function() {
          expect(isBlank(1).isPassed).to.be.false;
        });
      });

      context("a negative number,", function() {
        it("should be false", function() {
          expect(isBlank(-1).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(isBlank("").isPassed).to.be.true;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be true", function() {
          expect(isBlank(" ").isPassed).to.be.true;
          expect(isBlank("  ").isPassed).to.be.true;
          expect(isBlank("   ").isPassed).to.be.true;
        });
      });

      context("an ordinary string,", function() {
        it("should be false", function() {
          expect(isBlank("a").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be false", function() {
          expect(isBlank(true).isPassed).to.be.false;
        });
      });

      context("false,", function() {
        it("should be true", function() {
          expect(isBlank(false).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be true", function() {
          expect(isBlank([]).isPassed).to.be.true;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be false", function() {
          expect(isBlank([undefined, undefined]).isPassed).to.be.false;
        });
      });

      context("an array which has only null,", function() {
        it("should be false", function() {
          expect(isBlank([null, null]).isPassed).to.be.false;
        });
      });

      context("an ordinary array,", function() {
        it("should be false", function() {
          expect(isBlank([1, 2, 3]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be true", function() {
          expect(isBlank({}).isPassed).to.be.true;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be false", function() {
          expect(isBlank({ a: undefined, b: undefined }).isPassed).to.be.false;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be false", function() {
          expect(isBlank({ a: null, b: null }).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(isBlank(() => true).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it('should be "blank"', function() {
      allTypeValues.forEach((value: any) => {
        expect(isBlank(value).expected).to.eq("blank");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isBlank(value).actual).to.eq(value);
      });
    });
  });
});
