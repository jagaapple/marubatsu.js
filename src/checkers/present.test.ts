// =============================================================================================================================
// SRC - CHECKERS - PRESENT TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { allTypeValues } from "@shared/values.test";
import { present } from "./present";

describe("[ Present Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(present(undefined).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(present(null).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      it("should be true", function() {
        expect(present(0).isPassed).to.be.true;
        expect(present(123).isPassed).to.be.true;
        expect(present(-123).isPassed).to.be.true;
        expect(present(123.123).isPassed).to.be.true;
        expect(present(-123.123).isPassed).to.be.true;
        expect(present(Number.POSITIVE_INFINITY).isPassed).to.be.true;
        expect(present(Number.NEGATIVE_INFINITY).isPassed).to.be.true;
      });
    });

    context("when a target value is string,", function() {
      context("an empty string,", function() {
        it("should be false", function() {
          expect(present("").isPassed).to.be.false;
        });
      });

      context("a string which has only spaces,", function() {
        it("should be false", function() {
          expect(present(" ").isPassed).to.be.false;
          expect(present("  ").isPassed).to.be.false;
          expect(present("   ").isPassed).to.be.false;
        });
      });

      context("an ordinary string,", function() {
        it("should be true", function() {
          expect(present("abc").isPassed).to.be.true;
        });
      });
    });

    context("when a target value is boolean,", function() {
      context("true,", function() {
        it("should be true", function() {
          expect(present(true).isPassed).to.be.true;
        });
      });

      context("false,", function() {
        it("should be false", function() {
          expect(present(false).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("an empty array,", function() {
        it("should be false", function() {
          expect(present([]).isPassed).to.be.false;
        });
      });

      context("an array which has only undefined,", function() {
        it("should be true", function() {
          expect(present([undefined, undefined]).isPassed).to.be.true;
        });
      });

      context("an array which has only null,", function() {
        it("should be true", function() {
          expect(present([null, null]).isPassed).to.be.true;
        });
      });

      context("an ordinary array,", function() {
        it("should be true", function() {
          expect(present([1, 2, 3]).isPassed).to.be.true;
          expect(present(["", "", ""]).isPassed).to.be.true;
          expect(present(["a", "b", "c"]).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an empty object,", function() {
        it("should be false", function() {
          expect(present({}).isPassed).to.be.false;
        });
      });

      context("an object which has only undefined as value,", function() {
        it("should be true", function() {
          expect(present({ a: undefined, b: undefined }).isPassed).to.be.true;
        });
      });

      context("an object which has only null as value,", function() {
        it("should be true", function() {
          expect(present({ a: null, b: null }).isPassed).to.be.true;
        });
      });

      context("an ordinary object,", function() {
        it("should be true", function() {
          expect(present({ a: 1, b: 2, c: 3 }).isPassed).to.be.true;
          expect(present({ a: "", b: "", c: "" }).isPassed).to.be.true;
          expect(present({ a: "a", b: "b", c: "c" }).isPassed).to.be.true;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be true", function() {
        expect(present(() => undefined).isPassed).to.be.true;
        expect(present(() => null).isPassed).to.be.true;
        expect(present(() => false).isPassed).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(present(value).actual).to.eq(value);
      });
    });
  });
});
