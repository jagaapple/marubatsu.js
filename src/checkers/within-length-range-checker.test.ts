// =============================================================================================================================
// SRC - CHECKERS - WITHIN LENGTH RANGE CHECKER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { isWithinLengthRange } from "./within-length-range-checker";

describe("[ Within Length Range Checker ]", function() {
  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isWithinLengthRange(null, [0, 0])).to.be.false;
      expect(isWithinLengthRange(null, [1, 1])).to.be.false;
      expect(isWithinLengthRange(null, [0, 1])).to.be.false;
      expect(isWithinLengthRange(null, [undefined, 1])).to.be.false;
      expect(isWithinLengthRange(null, [0, undefined])).to.be.false;
      expect(isWithinLengthRange(null, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isWithinLengthRange(undefined, [0, 0])).to.be.false;
      expect(isWithinLengthRange(undefined, [1, 1])).to.be.false;
      expect(isWithinLengthRange(undefined, [0, 1])).to.be.false;
      expect(isWithinLengthRange(undefined, [undefined, 1])).to.be.false;
      expect(isWithinLengthRange(undefined, [0, undefined])).to.be.false;
      expect(isWithinLengthRange(undefined, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("the number of digits is equal to or less than a specific maximum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange(123, [3, 4])).to.be.true;
        expect(isWithinLengthRange(123, [3, 3])).to.be.true;
        expect(isWithinLengthRange(123, [0, 3])).to.be.true;
        expect(isWithinLengthRange(123, [undefined, 3])).to.be.true;
      });
    });

    context("the number of digits is more than a specific maximum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange(123, [0, 2])).to.be.false;
        expect(isWithinLengthRange(123, [2, 2])).to.be.false;
        expect(isWithinLengthRange(123, [undefined, 2])).to.be.false;
      });
    });

    context("the number of digits is equal to or more than a specific minimum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange(123, [2, 9])).to.be.true;
        expect(isWithinLengthRange(123, [3, 9])).to.be.true;
        expect(isWithinLengthRange(123, [3, 3])).to.be.true;
        expect(isWithinLengthRange(123, [3, undefined])).to.be.true;
      });
    });

    context("the number of digits is less than a specific minimum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange(123, [4, 9])).to.be.false;
        expect(isWithinLengthRange(123, [4, 4])).to.be.false;
        expect(isWithinLengthRange(123, [4, undefined])).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("the number of characters is equal to or less than a specific maximum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange("123", [3, 4])).to.be.true;
        expect(isWithinLengthRange("123", [3, 3])).to.be.true;
        expect(isWithinLengthRange("123", [0, 3])).to.be.true;
        expect(isWithinLengthRange("123", [undefined, 3])).to.be.true;
      });
    });

    context("the number of characters is more than a specific maximum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange("123", [0, 2])).to.be.false;
        expect(isWithinLengthRange("123", [2, 2])).to.be.false;
        expect(isWithinLengthRange("123", [undefined, 2])).to.be.false;
      });
    });

    context("the number of characters is equal to or more than a specific minimum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange("123", [2, 9])).to.be.true;
        expect(isWithinLengthRange("123", [3, 9])).to.be.true;
        expect(isWithinLengthRange("123", [3, 3])).to.be.true;
        expect(isWithinLengthRange("123", [3, undefined])).to.be.true;
      });
    });

    context("the number of characters is less than a specific minimum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange("123", [4, 9])).to.be.false;
        expect(isWithinLengthRange("123", [4, 4])).to.be.false;
        expect(isWithinLengthRange("123", [4, undefined])).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isWithinLengthRange(true, [0, 0])).to.be.false;
      expect(isWithinLengthRange(true, [1, 1])).to.be.false;
      expect(isWithinLengthRange(true, [0, 1])).to.be.false;
      expect(isWithinLengthRange(true, [undefined, 1])).to.be.false;
      expect(isWithinLengthRange(true, [0, undefined])).to.be.false;
      expect(isWithinLengthRange(true, [undefined, undefined])).to.be.false;
      expect(isWithinLengthRange(false, [0, 0])).to.be.false;
      expect(isWithinLengthRange(false, [1, 1])).to.be.false;
      expect(isWithinLengthRange(false, [0, 1])).to.be.false;
      expect(isWithinLengthRange(false, [undefined, 1])).to.be.false;
      expect(isWithinLengthRange(false, [0, undefined])).to.be.false;
      expect(isWithinLengthRange(false, [undefined, undefined])).to.be.false;
    });
  });

  context("when a value is array,", function() {
    context("the count of elements is equal to or less than a specific maximum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange([1, 2, 3], [3, 4])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [3, 3])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [0, 3])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [undefined, 3])).to.be.true;
      });
    });

    context("the count of elements is more than a specific maximum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange([1, 2, 3], [0, 2])).to.be.false;
        expect(isWithinLengthRange([1, 2, 3], [2, 2])).to.be.false;
        expect(isWithinLengthRange([1, 2, 3], [undefined, 2])).to.be.false;
      });
    });

    context("the count of elements is equal to or more than a specific minimum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange([1, 2, 3], [2, 9])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [3, 9])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [3, 3])).to.be.true;
        expect(isWithinLengthRange([1, 2, 3], [3, undefined])).to.be.true;
      });
    });

    context("the count of elements is less than a specific minimum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange([1, 2, 3], [4, 9])).to.be.false;
        expect(isWithinLengthRange([1, 2, 3], [4, 4])).to.be.false;
        expect(isWithinLengthRange([1, 2, 3], [4, undefined])).to.be.false;
      });
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    context("the count of key and values is equal to or less than a specific maximum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 4])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 3])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [0, 3])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [undefined, 3])).to.be.true;
      });
    });

    context("the count of key and values is more than a specific maximum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [0, 2])).to.be.false;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [2, 2])).to.be.false;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [undefined, 2])).to.be.false;
      });
    });

    context("the count of key and values is equal to or more than a specific minimum length", function() {
      it("should return true", function() {
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [2, 9])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 9])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 3])).to.be.true;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, undefined])).to.be.true;
      });
    });

    context("the count of key and values is less than a specific minimum length", function() {
      it("should return false", function() {
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, 9])).to.be.false;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, 4])).to.be.false;
        expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, undefined])).to.be.false;
      });
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      const func = () => true;

      expect(isWithinLengthRange(func, [0, 0])).to.be.false;
      expect(isWithinLengthRange(func, [1, 1])).to.be.false;
      expect(isWithinLengthRange(func, [0, 1])).to.be.false;
      expect(isWithinLengthRange(func, [undefined, 1])).to.be.false;
      expect(isWithinLengthRange(func, [0, undefined])).to.be.false;
      expect(isWithinLengthRange(func, [undefined, undefined])).to.be.false;
    });
  });
});
