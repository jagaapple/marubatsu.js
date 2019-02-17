// =============================================================================================================================
// SRC - OPERATORS - SHARED - ADVERB GETTER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { getAdverb } from "./adverb-getter";

describe("[ GET ADVERB ]", function() {
  context('when "type" is undefined,', function() {
    it("should return an empty string", function() {
      expect(getAdverb()).to.be.empty;
    });
  });

  context('when "type" is "not",', function() {
    it('should return "not "', function() {
      expect(getAdverb("not")).to.eq("not ");
    });
  });
});
