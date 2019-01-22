// =============================================================================================================================
// SRC - CHECKERS - SHARED - LENGTH GETTER TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import { getLength } from "./length-getter";

describe("[ Length Getter ]", function() {
  context("when a value is null,", function() {
    it("should return undefined", function() {
      expect(getLength(null)).to.be.undefined;
    });
  });

  context("when a value is undefined,", function() {
    it("should return undefined", function() {
      expect(getLength(undefined)).to.be.undefined;
    });
  });

  context("when a value is number,", function() {
    it("should return the number of digits", function() {
      expect(getLength(0)).to.eq(1);
      expect(getLength(345)).to.eq(3);
    });
  });

  context("when a value is string,", function() {
    it("should return the number of characters", function() {
      expect(getLength("")).to.eq(0);
      expect(getLength(" ")).to.eq(1);
      expect(getLength("0")).to.eq(1);
      expect(getLength("345")).to.eq(3);
    });
  });

  context("when a value is boolean,", function() {
    it("should return undefined", function() {
      expect(getLength(undefined)).to.be.undefined;
    });
  });

  context("when a value is array,", function() {
    it("should return the count of elements", function() {
      expect(getLength([])).to.eq(0);
      expect(getLength([undefined])).to.eq(1);
      expect(getLength([null])).to.eq(1);
      expect(getLength([3, 4, 5])).to.eq(3);
      expect(getLength(["", ""])).to.eq(2);
      expect(getLength(["3", "4", "5"])).to.eq(3);
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return the count of key and values", function() {
      expect(getLength({})).to.eq(0);
      expect(getLength({ a: undefined })).to.eq(1);
      expect(getLength({ a: null })).to.eq(1);
      expect(getLength({ a: 3, b: 4, c: 5 })).to.eq(3);
      expect(getLength({ a: "", b: "" })).to.eq(2);
      expect(getLength({ a: "3", b: "4", c: "5" })).to.eq(3);
    });
  });

  context("when a value is function,", function() {
    it("should return undefined", function() {
      expect(getLength(() => true)).to.be.undefined;
    });
  });
});
