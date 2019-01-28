// =============================================================================================================================
// SRC - CHECKERS - WITHIN NUMBER RANGE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isWithinNumberRange } from "./within-number-range-checker";

describe("[ Within Number Range Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isWithinNumberRange(undefined, [0, 0])).to.be.false;
      expect(isWithinNumberRange(undefined, [1, 1])).to.be.false;
      expect(isWithinNumberRange(undefined, [0, 1])).to.be.false;
      expect(isWithinNumberRange(undefined, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange(undefined, [1, undefined])).to.be.false;
      expect(isWithinNumberRange(undefined, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isWithinNumberRange(null, [0, 0])).to.be.false;
      expect(isWithinNumberRange(null, [1, 1])).to.be.false;
      expect(isWithinNumberRange(null, [0, 1])).to.be.false;
      expect(isWithinNumberRange(null, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange(null, [1, undefined])).to.be.false;
      expect(isWithinNumberRange(null, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("the value is equal to or less than a specific maximum length,", function() {
      it("should return true", function() {
        expect(isWithinNumberRange(3, [2, 4])).to.be.true;
        expect(isWithinNumberRange(3, [3, 3])).to.be.true;
        expect(isWithinNumberRange(3, [0, 3])).to.be.true;
        expect(isWithinNumberRange(3.1, [0, 3.1])).to.be.true;
        expect(isWithinNumberRange(3.1, [0, 3.2])).to.be.true;
        expect(isWithinNumberRange(-3, [-6, -3])).to.be.true;
        expect(isWithinNumberRange(-3.1, [-6, -3.1])).to.be.true;
        expect(isWithinNumberRange(-3.1, [-6, -3])).to.be.true;
        expect(isWithinNumberRange(3, [undefined, 3])).to.be.true;
        expect(isWithinNumberRange(-3, [undefined, -3])).to.be.true;
      });
    });

    context("the value is more than a specific maximum length,", function() {
      it("should return false", function() {
        expect(isWithinNumberRange(4, [0, 3])).to.be.false;
        expect(isWithinNumberRange(4, [3, 3])).to.be.false;
        expect(isWithinNumberRange(4.1, [0, 4])).to.be.false;
        expect(isWithinNumberRange(-4, [-6, -4.1])).to.be.false;
        expect(isWithinNumberRange(-3.9, [-6, -4])).to.be.false;
        expect(isWithinNumberRange(4, [undefined, 3])).to.be.false;
        expect(isWithinNumberRange(-3.9, [undefined, -4])).to.be.false;
      });
    });

    context("the value is equal to or more than a specific minimum length,", function() {
      it("should return true", function() {
        expect(isWithinNumberRange(3, [3, 5])).to.be.true;
        expect(isWithinNumberRange(3.1, [3.1, 5])).to.be.true;
        expect(isWithinNumberRange(3.1, [3, 5])).to.be.true;
        expect(isWithinNumberRange(-3, [-3, 0])).to.be.true;
        expect(isWithinNumberRange(-3.1, [-3.1, 0])).to.be.true;
        expect(isWithinNumberRange(-3.1, [-3.2, 0])).to.be.true;
        expect(isWithinNumberRange(3, [3, undefined])).to.be.true;
        expect(isWithinNumberRange(-3, [-3, undefined])).to.be.true;
      });
    });

    context("the value is less than a specific minimum length,", function() {
      it("should return false", function() {
        expect(isWithinNumberRange(3, [4, 5])).to.be.false;
        expect(isWithinNumberRange(3, [4, 4])).to.be.false;
        expect(isWithinNumberRange(2.9, [3, 5])).to.be.false;
        expect(isWithinNumberRange(-3, [-2.9, 0])).to.be.false;
        expect(isWithinNumberRange(-3.1, [-3, 0])).to.be.false;
        expect(isWithinNumberRange(3, [4, 5])).to.be.false;
        expect(isWithinNumberRange(-3, [-2, undefined])).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    it("should return false", function() {
      expect(isWithinNumberRange("", [0, 0])).to.be.false;
      expect(isWithinNumberRange("", [1, 1])).to.be.false;
      expect(isWithinNumberRange("", [0, 1])).to.be.false;
      expect(isWithinNumberRange("", [undefined, 5])).to.be.false;
      expect(isWithinNumberRange("", [1, undefined])).to.be.false;
      expect(isWithinNumberRange("", [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange("0", [0, 0])).to.be.false;
      expect(isWithinNumberRange("0", [1, 1])).to.be.false;
      expect(isWithinNumberRange("0", [0, 1])).to.be.false;
      expect(isWithinNumberRange("0", [undefined, 5])).to.be.false;
      expect(isWithinNumberRange("0", [1, undefined])).to.be.false;
      expect(isWithinNumberRange("0", [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange("abc", [0, 0])).to.be.false;
      expect(isWithinNumberRange("abc", [1, 1])).to.be.false;
      expect(isWithinNumberRange("abc", [0, 1])).to.be.false;
      expect(isWithinNumberRange("abc", [undefined, 5])).to.be.false;
      expect(isWithinNumberRange("abc", [1, undefined])).to.be.false;
      expect(isWithinNumberRange("abc", [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isWithinNumberRange(true, [0, 0])).to.be.false;
      expect(isWithinNumberRange(true, [1, 1])).to.be.false;
      expect(isWithinNumberRange(true, [0, 1])).to.be.false;
      expect(isWithinNumberRange(true, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange(true, [1, undefined])).to.be.false;
      expect(isWithinNumberRange(true, [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange(false, [0, 0])).to.be.false;
      expect(isWithinNumberRange(false, [1, 1])).to.be.false;
      expect(isWithinNumberRange(false, [0, 1])).to.be.false;
      expect(isWithinNumberRange(false, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange(false, [1, undefined])).to.be.false;
      expect(isWithinNumberRange(false, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isWithinNumberRange([], [0, 0])).to.be.false;
      expect(isWithinNumberRange([], [1, 1])).to.be.false;
      expect(isWithinNumberRange([], [0, 1])).to.be.false;
      expect(isWithinNumberRange([], [undefined, 5])).to.be.false;
      expect(isWithinNumberRange([], [1, undefined])).to.be.false;
      expect(isWithinNumberRange([], [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange([undefined], [0, 0])).to.be.false;
      expect(isWithinNumberRange([undefined], [1, 1])).to.be.false;
      expect(isWithinNumberRange([undefined], [0, 1])).to.be.false;
      expect(isWithinNumberRange([undefined], [undefined, 5])).to.be.false;
      expect(isWithinNumberRange([undefined], [1, undefined])).to.be.false;
      expect(isWithinNumberRange([undefined], [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange([0, 1], [0, 0])).to.be.false;
      expect(isWithinNumberRange([0, 1], [1, 1])).to.be.false;
      expect(isWithinNumberRange([0, 1], [0, 1])).to.be.false;
      expect(isWithinNumberRange([0, 1], [undefined, 5])).to.be.false;
      expect(isWithinNumberRange([0, 1], [1, undefined])).to.be.false;
      expect(isWithinNumberRange([0, 1], [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isWithinNumberRange({}, [0, 0])).to.be.false;
      expect(isWithinNumberRange({}, [1, 1])).to.be.false;
      expect(isWithinNumberRange({}, [0, 1])).to.be.false;
      expect(isWithinNumberRange({}, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange({}, [1, undefined])).to.be.false;
      expect(isWithinNumberRange({}, [undefined, undefined])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [0, 0])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [1, 1])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [0, 1])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [1, undefined])).to.be.false;
      expect(isWithinNumberRange({ a: 0 }, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      const func = () => 1;

      expect(isWithinNumberRange(func, [0, 0])).to.be.false;
      expect(isWithinNumberRange(func, [1, 1])).to.be.false;
      expect(isWithinNumberRange(func, [0, 1])).to.be.false;
      expect(isWithinNumberRange(func, [undefined, 5])).to.be.false;
      expect(isWithinNumberRange(func, [1, undefined])).to.be.false;
      expect(isWithinNumberRange(func, [undefined, undefined])).to.be.false;
    });
  });
});
