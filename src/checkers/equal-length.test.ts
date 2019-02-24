// =============================================================================================================================
// SRC - CHECKERS - EQUAL LENGTH TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isEqualToLength } from "./equal-length";

describe("[ Equal Length Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isEqualToLength(undefined, 0).isPassed).to.be.false;
        expect(isEqualToLength(undefined, 1).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isEqualToLength(null, 0).isPassed).to.be.false;
        expect(isEqualToLength(null, 1).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("an expected length is the number of digits,", function() {
        it("should be true", function() {
          expect(isEqualToLength(0, 1).isPassed).to.be.true;
          expect(isEqualToLength(345, 3).isPassed).to.be.true;
        });
      });

      context("an expected length is not the number of digits,", function() {
        it("should be false", function() {
          expect(isEqualToLength(0, 0).isPassed).to.be.false;
          expect(isEqualToLength(345, 345).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("an expected length is the number of characters,", function() {
        it("should be true", function() {
          expect(isEqualToLength("", 0).isPassed).to.be.true;
          expect(isEqualToLength(" ", 1).isPassed).to.be.true;
          expect(isEqualToLength("0", 1).isPassed).to.be.true;
          expect(isEqualToLength("345", 3).isPassed).to.be.true;
        });
      });

      context("an expected length is not the number of characters,", function() {
        it("should be false", function() {
          expect(isEqualToLength("", 1).isPassed).to.be.false;
          expect(isEqualToLength(" ", 0).isPassed).to.be.false;
          expect(isEqualToLength("0", 0).isPassed).to.be.false;
          expect(isEqualToLength("345", 345).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isEqualToLength(false, 0).isPassed).to.be.false;
        expect(isEqualToLength(true, 1).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      context("an expected length is the count of elements,", function() {
        it("should be true", function() {
          expect(isEqualToLength([], 0).isPassed).to.be.true;
          expect(isEqualToLength([undefined], 1).isPassed).to.be.true;
          expect(isEqualToLength([null], 1).isPassed).to.be.true;
          expect(isEqualToLength([3, 4, 5], 3).isPassed).to.be.true;
          expect(isEqualToLength(["", ""], 2).isPassed).to.be.true;
          expect(isEqualToLength(["3", "4", "5"], 3).isPassed).to.be.true;
        });
      });

      context("an expected length is not the count of elements,", function() {
        it("should be false", function() {
          expect(isEqualToLength([], 1).isPassed).to.be.false;
          expect(isEqualToLength([undefined], 0).isPassed).to.be.false;
          expect(isEqualToLength([null], 0).isPassed).to.be.false;
          expect(isEqualToLength([123], 123).isPassed).to.be.false;
          expect(isEqualToLength([""], 0).isPassed).to.be.false;
          expect(isEqualToLength(["123"], 123).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("an expected length is the count of key and values,", function() {
        it("should be true", function() {
          expect(isEqualToLength({}, 0).isPassed).to.be.true;
          expect(isEqualToLength({ a: undefined }, 1).isPassed).to.be.true;
          expect(isEqualToLength({ a: null }, 1).isPassed).to.be.true;
          expect(isEqualToLength({ a: 3, b: 4, c: 5 }, 3).isPassed).to.be.true;
          expect(isEqualToLength({ a: "", b: "" }, 2).isPassed).to.be.true;
          expect(isEqualToLength({ a: "3", b: "4", c: "5" }, 3).isPassed).to.be.true;
        });
      });

      context("an expected length is not the count of key and values,", function() {
        it("should be false", function() {
          expect(isEqualToLength({}, 1).isPassed).to.be.false;
          expect(isEqualToLength({ a: undefined }, 0).isPassed).to.be.false;
          expect(isEqualToLength({ a: null }, 0).isPassed).to.be.false;
          expect(isEqualToLength({ a: 123 }, 123).isPassed).to.be.false;
          expect(isEqualToLength({ a: "" }, 0).isPassed).to.be.false;
          expect(isEqualToLength({ a: "123" }, 123).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        const func = () => true;

        expect(isEqualToLength(func, 0).isPassed).to.be.false;
        expect(isEqualToLength(func, 1).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected length", function() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((expectedLength: number) => {
        expect(isEqualToLength("abc", expectedLength).expected).to.eq(expectedLength);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it('should be "invalid-value"', function() {
        expect(isEqualToLength(undefined, 0).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is null,", function() {
      it('should be "invalid-value"', function() {
        expect(isEqualToLength(null, 0).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is number,", function() {
      it("should be length of the number", function() {
        expect(isEqualToLength(0, 0).actual).to.eq(1);
        expect(isEqualToLength(345, 0).actual).to.eq(3);
      });
    });

    context("when a target value is string,", function() {
      it("should be be length of the string", function() {
        expect(isEqualToLength("", 0).actual).to.eq(0);
        expect(isEqualToLength(" ", 0).actual).to.eq(1);
        expect(isEqualToLength("0", 0).actual).to.eq(1);
        expect(isEqualToLength("345", 0).actual).to.eq(3);
      });
    });

    context("when a target value is boolean,", function() {
      it('should be "invalid-value"', function() {
        expect(isEqualToLength(true, 0).actual).to.eq("invalid-value");
        expect(isEqualToLength(false, 0).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is array,", function() {
      it("should be count of elements", function() {
        expect(isEqualToLength([], 0).actual).to.eq(0);
        expect(isEqualToLength([undefined], 0).actual).to.eq(1);
        expect(isEqualToLength([null], 0).actual).to.eq(1);
        expect(isEqualToLength([3, 4, 5], 0).actual).to.eq(3);
        expect(isEqualToLength(["", ""], 0).actual).to.eq(2);
        expect(isEqualToLength(["3", "4", "5"], 0).actual).to.eq(3);
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be count of key and values", function() {
        expect(isEqualToLength({}, 0).actual).to.eq(0);
        expect(isEqualToLength({ a: undefined }, 0).actual).to.eq(1);
        expect(isEqualToLength({ a: null }, 0).actual).to.eq(1);
        expect(isEqualToLength({ a: 3, b: 4, c: 5 }, 0).actual).to.eq(3);
        expect(isEqualToLength({ a: "", b: "" }, 0).actual).to.eq(2);
        expect(isEqualToLength({ a: "3", b: "4", c: "5" }, 0).actual).to.eq(3);
      });
    });

    context("when a target value is function,", function() {
      it('should be "invalid-value"', function() {
        expect(isEqualToLength(() => true, 0).actual).to.eq("invalid-value");
      });
    });
  });
});
