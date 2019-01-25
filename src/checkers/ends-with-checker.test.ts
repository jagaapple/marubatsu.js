// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { endsWith } from "./ends-with-checker";

describe("[ Ends With Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(endsWith(undefined, "ned")).to.be.false;
      expect(endsWith(undefined, "ull")).to.be.false;
      expect(endsWith(undefined, "345")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(endsWith(undefined, "")).to.be.false;
      });
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(endsWith(null, "ned")).to.be.false;
      expect(endsWith(null, "ull")).to.be.false;
      expect(endsWith(null, "345")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(endsWith(null, "")).to.be.false;
      });
    });
  });

  context("when a value is number,", function() {
    context("ending with an expected value,", function() {
      it("should return true", function() {
        expect(endsWith(0, "0")).to.be.true;
        expect(endsWith(12345, "345")).to.be.true;
      });
    });

    context("not ending with an expected value,", function() {
      it("should return false", function() {
        expect(endsWith(12345, "ber")).to.be.false;
        expect(endsWith(12345, "cde")).to.be.false;
        expect(endsWith(12345, "123")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      it("should return true", function() {
        expect(endsWith(0, "")).to.be.true;
        expect(endsWith(12345, "")).to.be.true;
      });
    });
  });

  context("when a value is string,", function() {
    context("ending with an expected value,", function() {
      it("should return true", function() {
        expect(endsWith("12345", "345")).to.be.true;
        expect(endsWith("abcde", "cde")).to.be.true;
      });
    });

    context("not ending with an expected value,", function() {
      it("should return false", function() {
        expect(endsWith("12345", "ing")).to.be.false;
        expect(endsWith("12345", "cde")).to.be.false;
        expect(endsWith("12345", "123")).to.be.false;
        expect(endsWith("abcde", "abc")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      it("should return true", function() {
        expect(endsWith("", "")).to.be.true;
        expect(endsWith("     ", "")).to.be.true;
        expect(endsWith("12345", "")).to.be.true;
        expect(endsWith("abcde", "")).to.be.true;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(endsWith(true, "rue")).to.be.false;
      expect(endsWith(true, "cde")).to.be.false;
      expect(endsWith(false, "lse")).to.be.false;
      expect(endsWith(false, "cde")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(endsWith(true, "")).to.be.false;
        expect(endsWith(false, "")).to.be.false;
      });
    });
  });

  context("when a value is array,", function() {
    context("ending with an expected value at the first element,", function() {
      it("should return true", function() {
        expect(endsWith([12345, 23456, 34567], "567")).to.be.true;
        expect(endsWith(["12345", "23456", "34567"], "567")).to.be.true;
        expect(endsWith(["abcde", "bcdef", "cdefg"], "efg")).to.be.true;
      });
    });

    context("not ending with an expected value at the first element,", function() {
      it("should return false", function() {
        expect(endsWith([12345, 23456, 34567], "ray")).to.be.false;
        expect(endsWith([12345, 23456, 34567], "ect")).to.be.false;
        expect(endsWith([12345, 23456, 34567], "ber")).to.be.false;
        expect(endsWith([12345, 23456, 34567], "123")).to.be.false;
        expect(endsWith(["12345", "23456", "34567"], "123")).to.be.false;
        expect(endsWith(["abcde", "bcdef", "cdefg"], "abc")).to.be.false;
      });
    });

    context("an expected value is an empty string,", function() {
      context("the first element is not number or string,", function() {
        it("should return false", function() {
          expect(endsWith([undefined, undefined, undefined], "")).to.be.false;
          expect(endsWith([null, null, null], "")).to.be.false;
          expect(endsWith([true, true, true], "")).to.be.false;
          expect(endsWith([false, false, false], "")).to.be.false;
          expect(endsWith([[], [], []], "")).to.be.false;
          expect(endsWith([{}, {}, {}], "")).to.be.false;

          const func = () => true;
          expect(endsWith([func, func, func], "")).to.be.false;
        });
      });

      context("the first element is number or string,", function() {
        it("should return true", function() {
          expect(endsWith([12345, 23456, 34567], "")).to.be.true;
          expect(endsWith(["12345", "23456", "34567"], "")).to.be.true;
        });
      });
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(endsWith({}, "obj")).to.be.false;
      expect(endsWith({ abcde: undefined }, "ned")).to.be.false;
      expect(endsWith({ abcde: undefined }, "cde")).to.be.false;
      expect(endsWith({ abcde: null }, "ull")).to.be.false;
      expect(endsWith({ abcde: 12345 }, "345")).to.be.false;
      expect(endsWith({ abcde: true }, "rue")).to.be.false;
      expect(endsWith({ abcde: false }, "lse")).to.be.false;
      expect(endsWith({ abcde: [] }, "ray")).to.be.false;
      expect(endsWith({ abcde: {} }, "ect")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(endsWith({}, "")).to.be.false;
        expect(endsWith({ abcde: undefined }, "")).to.be.false;
        expect(endsWith({ abcde: null }, "")).to.be.false;
        expect(endsWith({ abcde: 12345 }, "")).to.be.false;
        expect(endsWith({ abcde: true }, "")).to.be.false;
        expect(endsWith({ abcde: false }, "")).to.be.false;
        expect(endsWith({ abcde: [] }, "")).to.be.false;
        expect(endsWith({ abcde: {} }, "")).to.be.false;
      });
    });
  });

  context("when a value is function,", function() {
    const func = () => true;

    it("should return false", function() {
      expect(endsWith(func, "ion")).to.be.false;
      expect(endsWith(func, "ect")).to.be.false;
    });

    context("an expected value is an empty string,", function() {
      it("should return false", function() {
        expect(endsWith(func, "")).to.be.false;
      });
    });
  });
});
