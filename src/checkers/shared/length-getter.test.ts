// =============================================================================================================================
// SRC - CHECKERS - SHARED - LENGTH GETTER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { getLength } from "./length-getter";

describe("[ Length Getter ]", function() {
  context("when a target value is null,", function() {
    it("should return 0", function() {
      expect(getLength(null)).to.eq(0);
    });
  });

  context("when a target value is undefined,", function() {
    it("should return 0", function() {
      expect(getLength(undefined)).to.eq(0);
    });
  });

  context("when a target value is number,", function() {
    context("not infinity,", function() {
      it("should return the number of digits", function() {
        expect(getLength(0)).to.eq(1);
        expect(getLength(123)).to.eq(3);
        expect(getLength(-123)).to.eq(3);
        expect(getLength(123.123)).to.eq(6);
        expect(getLength(-123.123)).to.eq(6);
      });
    });

    context("infinity,", function() {
      it("should return positive or negative infinity", function() {
        expect(getLength(Number.POSITIVE_INFINITY)).to.eq(Number.POSITIVE_INFINITY);
        expect(getLength(Number.NEGATIVE_INFINITY)).to.eq(Number.NEGATIVE_INFINITY);
      });
    });
  });

  context("when a target value is string,", function() {
    it("should return the number of characters", function() {
      expect(getLength("")).to.eq(0);
      expect(getLength(" ")).to.eq(1);
      expect(getLength("0")).to.eq(1);
      expect(getLength("abc")).to.eq(3);
    });
  });

  context("when a target value is boolean,", function() {
    it("should return 0", function() {
      expect(getLength(true)).to.eq(0);
      expect(getLength(false)).to.eq(0);
    });
  });

  context("when a target value is array,", function() {
    it("should return the count of elements", function() {
      expect(getLength([])).to.eq(0);
      expect(getLength([undefined])).to.eq(1);
      expect(getLength([null])).to.eq(1);
      expect(getLength([3, 4, 5])).to.eq(3);
      expect(getLength(["", ""])).to.eq(2);
      expect(getLength(["a", "b", "c"])).to.eq(3);
    });
  });

  context("when a target value is object (pure object/hash/dictionary),", function() {
    it("should return the count of key and values", function() {
      expect(getLength({})).to.eq(0);
      expect(getLength({ a: undefined })).to.eq(1);
      expect(getLength({ a: null })).to.eq(1);
      expect(getLength({ a: 3, b: 4, c: 5 })).to.eq(3);
      expect(getLength({ a: "", b: "" })).to.eq(2);
      expect(getLength({ a: "a", b: "b", c: "c" })).to.eq(3);
    });
  });

  context("when a target value is function,", function() {
    it("should return 0", function() {
      expect(getLength(() => undefined)).to.eq(0);
      expect(getLength(() => true)).to.eq(0);
      expect(getLength(() => false)).to.eq(0);
    });
  });
});
