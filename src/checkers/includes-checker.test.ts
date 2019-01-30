// =============================================================================================================================
// SRC - CHECKERS - INCLUDES CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { includes } from "./includes-checker";

describe("[ Includes Checker ]", function() {
  context("when a target value is null,", function() {
    it("should return false", function() {
      expect(includes(null, "null")).to.be.false;
      expect(includes(null, "ul")).to.be.false;
    });
  });

  context("when a target value is undefined,", function() {
    it("should return false", function() {
      expect(includes(undefined, "undefined")).to.be.false;
      expect(includes(undefined, "defi")).to.be.false;
    });
  });

  context("when a target value is number,", function() {
    it("should return false", function() {
      expect(includes(0, "0")).to.be.false;
      expect(includes(12345, "234")).to.be.false;
    });
  });

  context("when a target value is string,", function() {
    context("including an expected characters,", function() {
      it("should return true", function() {
        expect(includes("0", "0")).to.be.true;
        expect(includes("12345", "234")).to.be.true;
      });
    });

    context("not including an expected characters,", function() {
      it("should return false", function() {
        expect(includes("12345", "0")).to.be.false;
        expect(includes("12345", "56")).to.be.false;
      });
    });
  });

  context("when a target value is boolean,", function() {
    it("should return false", function() {
      expect(includes(false, "false")).to.be.false;
      expect(includes(false, "als")).to.be.false;
      expect(includes(true, "true")).to.be.false;
      expect(includes(true, "ru")).to.be.false;
    });
  });

  context("when a target value is array,", function() {
    context("one or more elements are equal to an expected characters,", function() {
      it("should return true", function() {
        expect(includes([1, 2, 3, 4, 5], "3")).to.be.true;
        expect(includes(["1", "2", "3", "4", "5"], "3")).to.be.true;
        expect(includes(["a", "b", "c", "d", "e"], "b")).to.be.true;
      });
    });

    context("all elements not are equal to an expected characters,", function() {
      it("should return false", function() {
        expect(includes([1, 2, 3, 4, 5], "0")).to.be.false;
        expect(includes([123, 456], "4")).to.be.false;
        expect(includes([[123], () => true], "4")).to.be.false;
        expect(includes(["1", "2", "3", "4", "5"], "0")).to.be.false;
        expect(includes(["a", "b", "c", "d", "e"], "f")).to.be.false;
        expect(includes(["abc", "def"], "c")).to.be.false;
      });
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(includes({}, "object")).to.be.false;
      expect(includes({}, "bje")).to.be.false;
      expect(includes({}, "{}")).to.be.false;
      expect(includes({ a: undefined }, "defi")).to.be.false;
      expect(includes({ a: null }, "ul")).to.be.false;
      expect(includes({ a: 12345 }, "234")).to.be.false;
      expect(includes({ a: "" }, '""')).to.be.false;
      expect(includes({ a: "12345" }, "234")).to.be.false;
    });
  });

  context("when a target value is function,", function() {
    it("should return false", function() {
      const func = () => true;

      expect(includes(func, "object")).to.be.false;
      expect(includes(func, "bje")).to.be.false;
      expect(includes(func, "function")).to.be.false;
      expect(includes(func, "ctio")).to.be.false;
    });
  });
});
