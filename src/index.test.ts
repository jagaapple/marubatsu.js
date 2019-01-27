// =============================================================================================================================
// SRC - INDEX TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import marubatsu from "./index";

describe("[ Marubatsu ]", function() {
  afterEach(function() {
    sinon.restore();
  });

  // TODO
  it("should work", function() {
    const isValid = marubatsu()
      .string({ length: 3 })
      .test("abc");

    expect(isValid).to.be.true;
  });

  context("when calling unknown property,", function() {
    it("should return undefined", function() {
      const validator = marubatsu() as any;

      expect(validator.foo).to.be.undefined;
    });
  });
});
