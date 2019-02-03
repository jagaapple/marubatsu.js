// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { endsWith } from "./ends-with-checker";

describe("[ Ends With Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(endsWith(undefined, "ned").isPassed).to.be.false;
        expect(endsWith(undefined, "ull").isPassed).to.be.false;
        expect(endsWith(undefined, "345").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith(undefined, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(endsWith(null, "ned").isPassed).to.be.false;
        expect(endsWith(null, "ull").isPassed).to.be.false;
        expect(endsWith(null, "345").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith(null, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is number,", function() {
      it("should be false", function() {
        expect(endsWith(12345, "345").isPassed).to.be.false;
        expect(endsWith(12345, "ber").isPassed).to.be.false;
        expect(endsWith(12345, "cde").isPassed).to.be.false;
      });
    });

    context("when a target value is string,", function() {
      context("ending with an expected value,", function() {
        it("should be true", function() {
          expect(endsWith("12345", "345").isPassed).to.be.true;
          expect(endsWith("abcde", "cde").isPassed).to.be.true;
        });
      });

      context("not ending with an expected value,", function() {
        it("should be false", function() {
          expect(endsWith("12345", "ing").isPassed).to.be.false;
          expect(endsWith("12345", "cde").isPassed).to.be.false;
          expect(endsWith("12345", "123").isPassed).to.be.false;
          expect(endsWith("abcde", "abc").isPassed).to.be.false;
        });
      });

      context("an expected value is an empty string,", function() {
        it("should be true", function() {
          expect(endsWith("", "").isPassed).to.be.true;
          expect(endsWith("     ", "").isPassed).to.be.true;
          expect(endsWith("12345", "").isPassed).to.be.true;
          expect(endsWith("abcde", "").isPassed).to.be.true;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(endsWith(true, "rue").isPassed).to.be.false;
        expect(endsWith(true, "cde").isPassed).to.be.false;
        expect(endsWith(false, "lse").isPassed).to.be.false;
        expect(endsWith(false, "cde").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith(true, "").isPassed).to.be.false;
          expect(endsWith(false, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("the last element is equal to an expected value,", function() {
        it("should be true", function() {
          expect(endsWith([12345, 23456, 34567], "34567").isPassed).to.be.true;
          expect(endsWith(["12345", "23456", "34567"], "34567").isPassed).to.be.true;
          expect(endsWith(["abcde", "bcdef", "cdefg"], "cdefg").isPassed).to.be.true;
        });
      });

      context("the last element is not equal to an expected value,", function() {
        it("should be false", function() {
          expect(endsWith([12345, 23456, 34567], "567").isPassed).to.be.false;
          expect(endsWith([12345, 23456, 34567], "ray").isPassed).to.be.false;
          expect(endsWith([12345, 23456, 34567], "ect").isPassed).to.be.false;
          expect(endsWith([12345, 23456, 34567], "ber").isPassed).to.be.false;
          expect(endsWith([12345, 23456, 34567], "123").isPassed).to.be.false;
          expect(endsWith(["12345", "23456", "34567"], "567").isPassed).to.be.false;
          expect(endsWith(["12345", "23456", "34567"], "123").isPassed).to.be.false;
          expect(endsWith(["abcde", "bcdef", "cdefg"], "efg").isPassed).to.be.false;
          expect(endsWith(["abcde", "bcdef", "cdefg"], "abc").isPassed).to.be.false;
        });
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith([undefined, undefined, undefined], "").isPassed).to.be.false;
          expect(endsWith([null, null, null], "").isPassed).to.be.false;
          expect(endsWith([12345, 23456, 34567], "").isPassed).to.be.false;
          expect(endsWith(["12345", "23456", "34567"], "").isPassed).to.be.false;
          expect(endsWith([true, true, true], "").isPassed).to.be.false;
          expect(endsWith([false, false, false], "").isPassed).to.be.false;
          expect(endsWith([[], [], []], "").isPassed).to.be.false;
          expect(endsWith([{}, {}, {}], "").isPassed).to.be.false;

          const func = () => true;
          expect(endsWith([func, func, func], "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(endsWith({}, "obj").isPassed).to.be.false;
        expect(endsWith({ abcde: undefined }, "ned").isPassed).to.be.false;
        expect(endsWith({ abcde: undefined }, "cde").isPassed).to.be.false;
        expect(endsWith({ abcde: null }, "ull").isPassed).to.be.false;
        expect(endsWith({ abcde: 12345 }, "345").isPassed).to.be.false;
        expect(endsWith({ abcde: true }, "rue").isPassed).to.be.false;
        expect(endsWith({ abcde: false }, "lse").isPassed).to.be.false;
        expect(endsWith({ abcde: [] }, "ray").isPassed).to.be.false;
        expect(endsWith({ abcde: {} }, "ect").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith({}, "").isPassed).to.be.false;
          expect(endsWith({ abcde: undefined }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: null }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: 12345 }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: true }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: false }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: [] }, "").isPassed).to.be.false;
          expect(endsWith({ abcde: {} }, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      const func = () => true;

      it("should be false", function() {
        expect(endsWith(func, "ion").isPassed).to.be.false;
        expect(endsWith(func, "ect").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(endsWith(func, "").isPassed).to.be.false;
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected value", function() {
      ["abc", "def", "123", "456"].forEach((expectedValue: string) => {
        expect(endsWith(expectedValue, expectedValue).expected).to.eq(expectedValue);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it("should be undefined", function() {
        expect(endsWith(undefined, "und").actual).to.be.undefined;
      });
    });

    context("when a target value is null,", function() {
      it("should be null", function() {
        expect(endsWith(null, "nul").actual).to.be.null;
      });
    });

    context("when a target value is number,", function() {
      const value = 12345;

      it("should be the number", function() {
        expect(endsWith(value, "123").actual).to.eq(value);
      });
    });

    context("when a target value is string,", function() {
      const value = "abcde";

      it("should be the string", function() {
        expect(endsWith(value, "abc").actual).to.eq(value);
      });
    });

    context("when a target value is boolean,", function() {
      it("should be the boolean", function() {
        expect(endsWith(true, "tru").actual).to.be.true;
        expect(endsWith(false, "fal").actual).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be the last element", function() {
        expect(endsWith([12345, 23456, 34567], "34567").actual).to.eq(34567);
        expect(endsWith(["12345", "23456", "34567"], "34567").actual).to.eq("34567");
        expect(endsWith([true, false], "false").actual).to.be.false;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be the target value", function() {
        [{}, { a: true }].forEach((value: any) => {
          expect(endsWith(value, "obj").actual).to.eq(value);
        });
      });
    });

    context("when a target value is function,", function() {
      const func = () => true;

      it("should be the target value", function() {
        expect(endsWith(func, "fun").actual).to.eq(func);
      });
    });
  });
});
