// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { startsWith } from "./starts-with";

describe("[ Starts With Checker ]", function() {
  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when a target value is undefined,", function() {
      it("should be false", function() {
        expect(startsWith(undefined, "und").isPassed).to.be.false;
        expect(startsWith(undefined, "nul").isPassed).to.be.false;
        expect(startsWith(undefined, "123").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith(undefined, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is null,", function() {
      it("should be false", function() {
        expect(startsWith(null, "und").isPassed).to.be.false;
        expect(startsWith(null, "nul").isPassed).to.be.false;
        expect(startsWith(null, "123").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith(null, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is number,", function() {
      context("starting with an expected value,", function() {
        context("not infinity,", function() {
          it("should be true", function() {
            expect(startsWith(0, "0").isPassed).to.be.true;
            expect(startsWith(12345, "123").isPassed).to.be.true;
            expect(startsWith(-12345, "-123").isPassed).to.be.true;
            expect(startsWith(123.45, "123.4").isPassed).to.be.true;
            expect(startsWith(-123.45, "-123.4").isPassed).to.be.true;
          });
        });

        context("infinity,", function() {
          it("should be false", function() {
            expect(startsWith(Number.POSITIVE_INFINITY, "0").isPassed).to.be.false;
            expect(startsWith(Number.POSITIVE_INFINITY, "Infinity").isPassed).to.be.false;
            expect(startsWith(Number.NEGATIVE_INFINITY, "0").isPassed).to.be.false;
            expect(startsWith(Number.NEGATIVE_INFINITY, "-Infinity").isPassed).to.be.false;
          });
        });
      });

      context("not starting with an expected value,", function() {
        it("should be false", function() {
          expect(startsWith(12345, "345").isPassed).to.be.false;
          expect(startsWith(12345, "num").isPassed).to.be.false;
          expect(startsWith(12345, "str").isPassed).to.be.false;
          expect(startsWith(12345, "abc").isPassed).to.be.false;
        });
      });

      context("an expected value is an empty string,", function() {
        it("should be true", function() {
          expect(startsWith(0, "").isPassed).to.be.true;
          expect(startsWith(12345, "").isPassed).to.be.true;
          expect(startsWith(-12345, "").isPassed).to.be.true;
          expect(startsWith(123.45, "").isPassed).to.be.true;
          expect(startsWith(-123.45, "").isPassed).to.be.true;
        });
      });
    });

    context("when a target value is string,", function() {
      context("starting with an expected value,", function() {
        it("should be true", function() {
          expect(startsWith("12345", "123").isPassed).to.be.true;
          expect(startsWith("abcde", "abc").isPassed).to.be.true;
        });
      });

      context("not starting with an expected value,", function() {
        it("should be false", function() {
          expect(startsWith("12345", "345").isPassed).to.be.false;
          expect(startsWith("12345", "num").isPassed).to.be.false;
          expect(startsWith("12345", "str").isPassed).to.be.false;
          expect(startsWith("12345", "abc").isPassed).to.be.false;
        });
      });

      context("an expected value is an empty string,", function() {
        it("should be true", function() {
          expect(startsWith("", "").isPassed).to.be.true;
          expect(startsWith("     ", "").isPassed).to.be.true;
          expect(startsWith("12345", "").isPassed).to.be.true;
          expect(startsWith("abcde", "").isPassed).to.be.true;
        });
      });
    });

    context("when a target value is boolean,", function() {
      it("should be false", function() {
        expect(startsWith(true, "tru").isPassed).to.be.false;
        expect(startsWith(true, "abc").isPassed).to.be.false;
        expect(startsWith(false, "fal").isPassed).to.be.false;
        expect(startsWith(false, "abc").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith(true, "").isPassed).to.be.false;
          expect(startsWith(false, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is array,", function() {
      context("the first element is equal to an expected value,", function() {
        it("should be true", function() {
          expect(startsWith([12345, 23456, 34567], "12345").isPassed).to.be.true;
          expect(startsWith(["12345", "23456", "34567"], "12345").isPassed).to.be.true;
          expect(startsWith(["abcde", "bcdef", "cdefg"], "abcde").isPassed).to.be.true;
        });
      });

      context("the first element is not equal to an expected value,", function() {
        it("should be false", function() {
          expect(startsWith([12345, 23456, 34567], "arr").isPassed).to.be.false;
          expect(startsWith([12345, 23456, 34567], "obj").isPassed).to.be.false;
          expect(startsWith([12345, 23456, 34567], "num").isPassed).to.be.false;
          expect(startsWith([12345, 23456, 34567], "345").isPassed).to.be.false;
          expect(startsWith(["12345", "23456", "34567"], "arr").isPassed).to.be.false;
          expect(startsWith(["12345", "23456", "34567"], "obj").isPassed).to.be.false;
          expect(startsWith(["12345", "23456", "34567"], "str").isPassed).to.be.false;
          expect(startsWith(["abcde", "bcdef", "cdefg"], "cde").isPassed).to.be.false;
        });
      });

      context("the first element starts with an expected value,", function() {
        it("should be false", function() {
          expect(startsWith([12345, 23456, 34567], "123").isPassed).to.be.false;
          expect(startsWith(["12345", "23456", "34567"], "123").isPassed).to.be.false;
          expect(startsWith(["abcde", "bcdef", "cdefg"], "abc").isPassed).to.be.false;
        });
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith([undefined, undefined, undefined], "").isPassed).to.be.false;
          expect(startsWith([null, null, null], "").isPassed).to.be.false;
          expect(startsWith([12345, 23456, 34567], "").isPassed).to.be.false;
          expect(startsWith(["12345", "23456", "34567"], "").isPassed).to.be.false;
          expect(startsWith([true, true, true], "").isPassed).to.be.false;
          expect(startsWith([false, false, false], "").isPassed).to.be.false;
          expect(startsWith([[], [], []], "").isPassed).to.be.false;
          expect(startsWith([{}, {}, {}], "").isPassed).to.be.false;

          const func = () => true;
          expect(startsWith([func, func, func], "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be false", function() {
        expect(startsWith({}, "obj").isPassed).to.be.false;
        expect(startsWith({ abcde: undefined }, "und").isPassed).to.be.false;
        expect(startsWith({ abcde: undefined }, "abc").isPassed).to.be.false;
        expect(startsWith({ abcde: null }, "nul").isPassed).to.be.false;
        expect(startsWith({ abcde: 12345 }, "123").isPassed).to.be.false;
        expect(startsWith({ abcde: true }, "tru").isPassed).to.be.false;
        expect(startsWith({ abcde: false }, "fals").isPassed).to.be.false;
        expect(startsWith({ abcde: [] }, "arr").isPassed).to.be.false;
        expect(startsWith({ abcde: {} }, "obj").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith({}, "").isPassed).to.be.false;
          expect(startsWith({ abcde: undefined }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: null }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: 12345 }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: true }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: false }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: [] }, "").isPassed).to.be.false;
          expect(startsWith({ abcde: {} }, "").isPassed).to.be.false;
        });
      });
    });

    context("when a target value is function,", function() {
      const func = () => true;

      it("should be false", function() {
        expect(startsWith(func, "fun").isPassed).to.be.false;
        expect(startsWith(func, "obj").isPassed).to.be.false;
      });

      context("an expected value is an empty string,", function() {
        it("should be false", function() {
          expect(startsWith(func, "").isPassed).to.be.false;
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
        expect(startsWith(expectedValue, expectedValue).expected).to.eq(expectedValue);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    context("when a target value is undefined,", function() {
      it("should be undefined", function() {
        expect(startsWith(undefined, "und").actual).to.be.undefined;
      });
    });

    context("when a target value is null,", function() {
      it("should be null", function() {
        expect(startsWith(null, "nul").actual).to.be.null;
      });
    });

    context("when a target value is number,", function() {
      it("should be the number", function() {
        [12345, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((targetValue: number) => {
          expect(startsWith(targetValue, "123").actual).to.eq(targetValue);
        });
      });
    });

    context("when a target value is string,", function() {
      const targetValue = "abcde";

      it("should be the string", function() {
        expect(startsWith(targetValue, "abc").actual).to.eq(targetValue);
      });
    });

    context("when a target value is boolean,", function() {
      it("should be the boolean", function() {
        expect(startsWith(true, "tru").actual).to.be.true;
        expect(startsWith(false, "fal").actual).to.be.false;
      });
    });

    context("when a target value is array,", function() {
      it("should be the first element", function() {
        expect(startsWith([12345, 23456, 34567], "123").actual).to.eq(12345);
        expect(startsWith(["12345", "23456", "34567"], "123").actual).to.eq("12345");
        expect(startsWith([true, false], "false").actual).to.be.true;
      });
    });

    context("when a target value is object (pure object/hash/dictionary),", function() {
      it("should be the object", function() {
        [{}, { a: true }].forEach((value: any) => {
          expect(startsWith(value, "obj").actual).to.eq(value);
        });
      });
    });

    context("when a target value is function,", function() {
      const func = () => true;

      it("should be the function", function() {
        expect(startsWith(func, "fun").actual).to.eq(func);
      });
    });
  });
});
