// =============================================================================================================================
// SRC - CHECKERS - STARTS WITH CHECKER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { startsWith } from "./starts-with-checker";

describe("[ Starts With Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(startsWith(undefined, "und")).to.be.false;
      expect(startsWith(undefined, "nul")).to.be.false;
      expect(startsWith(undefined, "123")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(startsWith(undefined, "")).to.be.false;
      });
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(startsWith(null, "und")).to.be.false;
      expect(startsWith(null, "nul")).to.be.false;
      expect(startsWith(null, "123")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(startsWith(null, "")).to.be.false;
      });
    });
  });

  context("when a value is number,", function() {
    context("starting with an expected value,", function() {
      it("should return true", function() {
        expect(startsWith(0, "0")).to.be.true;
        expect(startsWith(12345, "123")).to.be.true;
      });
    });

    context("not starting with an expected value,", function() {
      it("should return false", function() {
        expect(startsWith(12345, "num")).to.be.false;
        expect(startsWith(12345, "abc")).to.be.false;
        expect(startsWith(12345, "345")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      it("should return true", function() {
        expect(startsWith(0, "")).to.be.true;
        expect(startsWith(12345, "")).to.be.true;
      });
    });
  });

  context("when a value is string,", function() {
    context("starting with an expected value,", function() {
      it("should return true", function() {
        expect(startsWith("12345", "123")).to.be.true;
        expect(startsWith("abcde", "abc")).to.be.true;
      });
    });

    context("not starting with an expected value,", function() {
      it("should return false", function() {
        expect(startsWith("12345", "str")).to.be.false;
        expect(startsWith("12345", "abc")).to.be.false;
        expect(startsWith("12345", "345")).to.be.false;
        expect(startsWith("abcde", "cde")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      it("should return true", function() {
        expect(startsWith("", "")).to.be.true;
        expect(startsWith("     ", "")).to.be.true;
        expect(startsWith("12345", "")).to.be.true;
        expect(startsWith("abcde", "")).to.be.true;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(startsWith(true, "tru")).to.be.false;
      expect(startsWith(true, "abc")).to.be.false;
      expect(startsWith(false, "fal")).to.be.false;
      expect(startsWith(false, "abc")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(startsWith(true, "")).to.be.false;
        expect(startsWith(false, "")).to.be.false;
      });
    });
  });

  context("when a value is array,", function() {
    context("starting with an expected value at the first element,", function() {
      it("should return true", function() {
        expect(startsWith([12345, 23456, 34567], "123")).to.be.true;
        expect(startsWith(["12345", "23456", "34567"], "123")).to.be.true;
        expect(startsWith(["abcde", "bcdef", "cdefg"], "abc")).to.be.true;
      });
    });

    context("not starting with an expected value at the first element,", function() {
      it("should return false", function() {
        expect(startsWith([12345, 23456, 34567], "arr")).to.be.false;
        expect(startsWith([12345, 23456, 34567], "obj")).to.be.false;
        expect(startsWith([12345, 23456, 34567], "num")).to.be.false;
        expect(startsWith([12345, 23456, 34567], "345")).to.be.false;
        expect(startsWith(["12345", "23456", "34567"], "345")).to.be.false;
        expect(startsWith(["abcde", "bcdef", "cdefg"], "cde")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      context("the first element is not number or string,", function() {
        it("should return false", function() {
          expect(startsWith([undefined, undefined, undefined], "")).to.be.false;
          expect(startsWith([null, null, null], "")).to.be.false;
          expect(startsWith([true, true, true], "")).to.be.false;
          expect(startsWith([false, false, false], "")).to.be.false;
          expect(startsWith([[], [], []], "")).to.be.false;
          expect(startsWith([{}, {}, {}], "")).to.be.false;

          const func = () => true;
          expect(startsWith([func, func, func], "")).to.be.false;
        });
      });

      context("the first element is number or string,", function() {
        it("should return true", function() {
          expect(startsWith([12345, 23456, 34567], "")).to.be.true;
          expect(startsWith(["12345", "23456", "34567"], "")).to.be.true;
        });
      });
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(startsWith({}, "obj")).to.be.false;
      expect(startsWith({ abcde: undefined }, "und")).to.be.false;
      expect(startsWith({ abcde: undefined }, "abc")).to.be.false;
      expect(startsWith({ abcde: null }, "nul")).to.be.false;
      expect(startsWith({ abcde: 12345 }, "123")).to.be.false;
      expect(startsWith({ abcde: true }, "tru")).to.be.false;
      expect(startsWith({ abcde: false }, "fals")).to.be.false;
      expect(startsWith({ abcde: [] }, "arr")).to.be.false;
      expect(startsWith({ abcde: {} }, "obj")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(startsWith({}, "")).to.be.false;
        expect(startsWith({ abcde: undefined }, "")).to.be.false;
        expect(startsWith({ abcde: null }, "")).to.be.false;
        expect(startsWith({ abcde: 12345 }, "")).to.be.false;
        expect(startsWith({ abcde: true }, "")).to.be.false;
        expect(startsWith({ abcde: false }, "")).to.be.false;
        expect(startsWith({ abcde: [] }, "")).to.be.false;
        expect(startsWith({ abcde: {} }, "")).to.be.false;
      });
    });
  });

  context("when a value is function,", function() {
    const func = () => true;

    it("should return false", function() {
      expect(startsWith(func, "fun")).to.be.false;
      expect(startsWith(func, "obj")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(startsWith(func, "")).to.be.false;
      });
    });
  });
});
