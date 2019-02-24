// =============================================================================================================================
// SRC - CHECKERS - PRESENT TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { isPresent } from "./present";

describe("[ Present Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isPresent(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isPresent(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("zero,", function() {
        it("should be true", function() {
          expect(isPresent(0).isPassed).to.be.true;
        });
      });

      context("a positive number,", function() {
        it("should be true", function() {
          expect(isPresent(1).isPassed).to.be.true;
        });
      });

      context("a negative number,", function() {
        it("should be true", function() {
          expect(isPresent(-1).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be false", function() {
          expect(isPresent("").isPassed).to.be.false;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be false", function() {
          expect(isPresent(" ").isPassed).to.be.false;
          expect(isPresent("  ").isPassed).to.be.false;
          expect(isPresent("   ").isPassed).to.be.false;
        });
      });

      context("an ordinary string,", function() {
        it("should be true", function() {
          expect(isPresent("a").isPassed).to.be.true;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be true", function() {
          expect(isPresent(true).isPassed).to.be.true;
        });
      });

      context("false,", function() {
        it("should be false", function() {
          expect(isPresent(false).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be false", function() {
          expect(isPresent([]).isPassed).to.be.false;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be true", function() {
          expect(isPresent([undefined, undefined]).isPassed).to.be.true;
        });
      });

      context("an array which has only null,", function() {
        it("should be true", function() {
          expect(isPresent([null, null]).isPassed).to.be.true;
        });
      });

      context("an ordinary array,", function() {
        it("should be true", function() {
          expect(isPresent([1, 2, 3]).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be false", function() {
          expect(isPresent({}).isPassed).to.be.false;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be true", function() {
          expect(isPresent({ a: undefined, b: undefined }).isPassed).to.be.true;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be true", function() {
          expect(isPresent({ a: null, b: null }).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be true", function() {
        expect(isPresent(() => true).isPassed).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it('should be "present"', function() {
      allTypeValues.forEach((value: any) => {
        expect(isPresent(value).expected).to.eq("present");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(isPresent(value).actual).to.eq(value);
      });
    });
  });
});
