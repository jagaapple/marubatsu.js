// =============================================================================================================================
// SRC - CHECKERS - EQUAL LENGTH CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isEqualToLength } from "./equal-length-checker";

describe("[ Equal Length Checker ]", function() {
  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(isEqualToLength(null, 0)).to.be.false;
      expect(isEqualToLength(null, 1)).to.be.false;
    });
  });

  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(isEqualToLength(undefined, 0)).to.be.false;
      expect(isEqualToLength(undefined, 1)).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    context("an expected length is the number of digits,", function() {
      it("should return true", function() {
        expect(isEqualToLength(0, 1)).to.be.true;
        expect(isEqualToLength(345, 3)).to.be.true;
      });
    });

    context("an expected length is not the number of digits,", function() {
      it("should return false", function() {
        expect(isEqualToLength(0, 0)).to.be.false;
        expect(isEqualToLength(345, 345)).to.be.false;
      });
    });
  });

  context("when a target value is string,", function() {
    context("an expected length is the number of characters,", function() {
      it("should return true", function() {
        expect(isEqualToLength("", 0)).to.be.true;
        expect(isEqualToLength(" ", 1)).to.be.true;
        expect(isEqualToLength("0", 1)).to.be.true;
        expect(isEqualToLength("345", 3)).to.be.true;
      });
    });

    context("an expected length is not the number of characters,", function() {
      it("should return false", function() {
        expect(isEqualToLength("", 1)).to.be.false;
        expect(isEqualToLength(" ", 0)).to.be.false;
        expect(isEqualToLength("0", 0)).to.be.false;
        expect(isEqualToLength("345", 345)).to.be.false;
      });
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(isEqualToLength(false, 0)).to.be.false;
      expect(isEqualToLength(true, 1)).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    context("an expected length is the count of elements,", function() {
      it("should return true", function() {
        expect(isEqualToLength([], 0)).to.be.true;
        expect(isEqualToLength([undefined], 1)).to.be.true;
        expect(isEqualToLength([null], 1)).to.be.true;
        expect(isEqualToLength([3, 4, 5], 3)).to.be.true;
        expect(isEqualToLength(["", ""], 2)).to.be.true;
        expect(isEqualToLength(["3", "4", "5"], 3)).to.be.true;
      });
    });

    context("an expected length is not the count of elements,", function() {
      it("should return false", function() {
        expect(isEqualToLength([], 1)).to.be.false;
        expect(isEqualToLength([undefined], 0)).to.be.false;
        expect(isEqualToLength([null], 0)).to.be.false;
        expect(isEqualToLength([123], 123)).to.be.false;
        expect(isEqualToLength([""], 0)).to.be.false;
        expect(isEqualToLength(["123"], 123)).to.be.false;
      });
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    context("an expected length is the count of key and values,", function() {
      it("should return true", function() {
        expect(isEqualToLength({}, 0)).to.be.true;
        expect(isEqualToLength({ a: undefined }, 1)).to.be.true;
        expect(isEqualToLength({ a: null }, 1)).to.be.true;
        expect(isEqualToLength({ a: 3, b: 4, c: 5 }, 3)).to.be.true;
        expect(isEqualToLength({ a: "", b: "" }, 2)).to.be.true;
        expect(isEqualToLength({ a: "3", b: "4", c: "5" }, 3)).to.be.true;
      });
    });

    context("an expected length is not the count of key and values,", function() {
      it("should return false", function() {
        expect(isEqualToLength({}, 1)).to.be.false;
        expect(isEqualToLength({ a: undefined }, 0)).to.be.false;
        expect(isEqualToLength({ a: null }, 0)).to.be.false;
        expect(isEqualToLength({ a: 123 }, 123)).to.be.false;
        expect(isEqualToLength({ a: "" }, 0)).to.be.false;
        expect(isEqualToLength({ a: "123" }, 123)).to.be.false;
      });
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      const func = () => true;

      expect(isEqualToLength(func, 0)).to.be.false;
      expect(isEqualToLength(func, 1)).to.be.false;
    });
  });
});
