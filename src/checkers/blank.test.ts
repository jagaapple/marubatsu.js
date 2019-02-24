// =============================================================================================================================
// SRC - CHECKERS - BLANK TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { blank } from "./blank";

describe("[ Blank Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be true", function() {
        expect(blank(undefined).isPassed).to.be.true;
      });
    });

    context("when a target value is null,", function() {
      it("should be true", function() {
        expect(blank(null).isPassed).to.be.true;
      });
    });

    context("when a target value is number,", function() {
      it("should be false", function() {
        expect(blank(0).isPassed).to.be.false;
        expect(blank(123).isPassed).to.be.false;
        expect(blank(-123).isPassed).to.be.false;
        expect(blank(123.123).isPassed).to.be.false;
        expect(blank(-123.123).isPassed).to.be.false;
        expect(blank(Number.POSITIVE_INFINITY).isPassed).to.be.false;
        expect(blank(Number.NEGATIVE_INFINITY).isPassed).to.be.false;
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be true", function() {
          expect(blank("").isPassed).to.be.true;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be true", function() {
          expect(blank(" ").isPassed).to.be.true;
          expect(blank("  ").isPassed).to.be.true;
          expect(blank("   ").isPassed).to.be.true;
        });
      });

      context("an ordinary string,", function() {
        it("should be false", function() {
          expect(blank("abc").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be false", function() {
          expect(blank(true).isPassed).to.be.false;
        });
      });

      context("false,", function() {
        it("should be true", function() {
          expect(blank(false).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be true", function() {
          expect(blank([]).isPassed).to.be.true;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be false", function() {
          expect(blank([undefined, undefined]).isPassed).to.be.false;
        });
      });

      context("an array which has only null,", function() {
        it("should be false", function() {
          expect(blank([null, null]).isPassed).to.be.false;
        });
      });

      context("an ordinary array,", function() {
        it("should be false", function() {
          expect(blank([1, 2, 3]).isPassed).to.be.false;
          expect(blank(["", "", ""]).isPassed).to.be.false;
          expect(blank(["a", "b", "c"]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be true", function() {
          expect(blank({}).isPassed).to.be.true;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be false", function() {
          expect(blank({ a: undefined, b: undefined }).isPassed).to.be.false;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be false", function() {
          expect(blank({ a: null, b: null }).isPassed).to.be.false;
        });
      });

      context("an ordinary object,", function() {
        it("should be false", function() {
          expect(blank({ a: 1, b: 2, c: 3 }).isPassed).to.be.false;
          expect(blank({ a: "", b: "", c: "" }).isPassed).to.be.false;
          expect(blank({ a: "a", b: "b", c: "c" }).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        expect(blank(() => undefined).isPassed).to.be.false;
        expect(blank(() => null).isPassed).to.be.false;
        expect(blank(() => false).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(blank(value).actual).to.eq(value);
      });
    });
  });
});
