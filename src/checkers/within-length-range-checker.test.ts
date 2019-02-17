// =============================================================================================================================
// SRC - CHECKERS - WITHIN LENGTH RANGE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isWithinLengthRange } from "./within-length-range-checker";

describe("[ Within Length Range Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(isWithinLengthRange(undefined, [0, 0]).isPassed).to.be.false;
        expect(isWithinLengthRange(undefined, [1, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(undefined, [0, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(undefined, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(undefined, [0, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(undefined, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(isWithinLengthRange(null, [0, 0]).isPassed).to.be.false;
        expect(isWithinLengthRange(null, [1, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(null, [0, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(null, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(null, [0, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(null, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is number,", function() {
      context("the number of digits is equal to or less than a specific maximum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange(123, [3, 4]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [0, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [undefined, 3]).isPassed).to.be.true;
        });
      });

      context("the number of digits is more than a specific maximum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange(123, [0, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange(123, [2, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange(123, [undefined, 2]).isPassed).to.be.false;
        });
      });

      context("the number of digits is equal to or more than a specific minimum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange(123, [2, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [3, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange(123, [3, undefined]).isPassed).to.be.true;
        });
      });

      context("the number of digits is less than a specific minimum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange(123, [4, 9]).isPassed).to.be.false;
          expect(isWithinLengthRange(123, [4, 4]).isPassed).to.be.false;
          expect(isWithinLengthRange(123, [4, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is string,", function() {
      context("the number of characters is equal to or less than a specific maximum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange("123", [3, 4]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [0, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [undefined, 3]).isPassed).to.be.true;
        });
      });

      context("the number of characters is more than a specific maximum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange("123", [0, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange("123", [2, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange("123", [undefined, 2]).isPassed).to.be.false;
        });
      });

      context("the number of characters is equal to or more than a specific minimum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange("123", [2, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [3, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange("123", [3, undefined]).isPassed).to.be.true;
        });
      });

      context("the number of characters is less than a specific minimum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange("123", [4, 9]).isPassed).to.be.false;
          expect(isWithinLengthRange("123", [4, 4]).isPassed).to.be.false;
          expect(isWithinLengthRange("123", [4, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(isWithinLengthRange(true, [0, 0]).isPassed).to.be.false;
        expect(isWithinLengthRange(true, [1, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(true, [0, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(true, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(true, [0, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(true, [undefined, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [0, 0]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [1, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [0, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [0, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(false, [undefined, undefined]).isPassed).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      context("the count of elements is equal to or less than a specific maximum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange([1, 2, 3], [3, 4]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [0, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [undefined, 3]).isPassed).to.be.true;
        });
      });

      context("the count of elements is more than a specific maximum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange([1, 2, 3], [0, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange([1, 2, 3], [2, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange([1, 2, 3], [undefined, 2]).isPassed).to.be.false;
        });
      });

      context("the count of elements is equal to or more than a specific minimum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange([1, 2, 3], [2, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [3, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange([1, 2, 3], [3, undefined]).isPassed).to.be.true;
        });
      });

      context("the count of elements is less than a specific minimum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange([1, 2, 3], [4, 9]).isPassed).to.be.false;
          expect(isWithinLengthRange([1, 2, 3], [4, 4]).isPassed).to.be.false;
          expect(isWithinLengthRange([1, 2, 3], [4, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      context("the count of key and values is equal to or less than a specific maximum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 4]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [0, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [undefined, 3]).isPassed).to.be.true;
        });
      });

      context("the count of key and values is more than a specific maximum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [0, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [2, 2]).isPassed).to.be.false;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [undefined, 2]).isPassed).to.be.false;
        });
      });

      context("the count of key and values is equal to or more than a specific minimum length,", function() {
        it("should be true", function() {
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [2, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 9]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, 3]).isPassed).to.be.true;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [3, undefined]).isPassed).to.be.true;
        });
      });

      context("the count of key and values is less than a specific minimum length,", function() {
        it("should be false", function() {
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, 9]).isPassed).to.be.false;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, 4]).isPassed).to.be.false;
          expect(isWithinLengthRange({ a: 1, b: 2, c: 3 }, [4, undefined]).isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      it("should be false", function() {
        const func = () => true;

        expect(isWithinLengthRange(func, [0, 0]).isPassed).to.be.false;
        expect(isWithinLengthRange(func, [1, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(func, [0, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(func, [undefined, 1]).isPassed).to.be.false;
        expect(isWithinLengthRange(func, [0, undefined]).isPassed).to.be.false;
        expect(isWithinLengthRange(func, [undefined, undefined]).isPassed).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    context("when specifying minimum length,", function() {
      context("specifying maximum length,", function() {
        it("should have the minimum and maximum length as array", function() {
          const expectedNumberOfDigits: [number, number] = [100, 200];

          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum length,", function() {
        it("should have the minimum length and positive infinity as array", function() {
          const expectedNumberOfDigits: [number, undefined] = [100, undefined];

          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[0]).to.eq(expectedNumberOfDigits[0]);
          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
        });
      });
    });

    context("when not specifying minimum length,", function() {
      context("specifying maximum length,", function() {
        it("should have negative infinity and the maximum length as array", function() {
          const expectedNumberOfDigits: [undefined, number] = [undefined, 200];

          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[1]).to.eq(expectedNumberOfDigits[1]);
        });
      });

      context("not specifying maximum length,", function() {
        it("should have negative and positive infinity as array", function() {
          const expectedNumberOfDigits: [undefined, undefined] = [undefined, undefined];

          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[0]).to.eq(Number.NEGATIVE_INFINITY);
          expect(isWithinLengthRange(123, expectedNumberOfDigits).expected[1]).to.eq(Number.POSITIVE_INFINITY);
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it('should be "invalid-value"', function() {
        expect(isWithinLengthRange(undefined, [3, 5]).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is null,", function() {
      it('should be "invalid-value"', function() {
        expect(isWithinLengthRange(null, [3, 5]).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is number,", function() {
      it("should be length of the number", function() {
        expect(isWithinLengthRange(0, [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange(345, [3, 5]).actual).to.eq(3);
      });
    });

    context("when a target value is string,", function() {
      it("should be be length of the string", function() {
        expect(isWithinLengthRange("", [3, 5]).actual).to.eq(0);
        expect(isWithinLengthRange(" ", [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange("0", [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange("345", [3, 5]).actual).to.eq(3);
      });
    });

    context("when a target value is boolean,", function() {
      it('should be "invalid-value"', function() {
        expect(isWithinLengthRange(true, [3, 5]).actual).to.eq("invalid-value");
        expect(isWithinLengthRange(false, [3, 5]).actual).to.eq("invalid-value");
      });
    });

    context("when a target value is array,", function() {
      it("should be count of elements", function() {
        expect(isWithinLengthRange([], [3, 5]).actual).to.eq(0);
        expect(isWithinLengthRange([undefined], [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange([null], [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange([3, 4, 5], [3, 5]).actual).to.eq(3);
        expect(isWithinLengthRange(["", ""], [3, 5]).actual).to.eq(2);
        expect(isWithinLengthRange(["3", "4", "5"], [3, 5]).actual).to.eq(3);
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be count of key and values", function() {
        expect(isWithinLengthRange({}, [3, 5]).actual).to.eq(0);
        expect(isWithinLengthRange({ a: undefined }, [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange({ a: null }, [3, 5]).actual).to.eq(1);
        expect(isWithinLengthRange({ a: 3, b: 4, c: 5 }, [3, 5]).actual).to.eq(3);
        expect(isWithinLengthRange({ a: "", b: "" }, [3, 5]).actual).to.eq(2);
        expect(isWithinLengthRange({ a: "3", b: "4", c: "5" }, [3, 5]).actual).to.eq(3);
      });
    });

    context("when a target value is function,", function() {
      it('should be "invalid-value"', function() {
        expect(isWithinLengthRange(() => true, [3, 5]).actual).to.eq("invalid-value");
      });
    });
  });
});
