// =============================================================================================================================
// SRC - CHECKERS - NULLARY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import * as shared from "./shared";
import { nullary } from "./nullary";

describe("[ Nullary Checker ]", function() {
  const targetValue = undefined;
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    it('should call "getType" function', function() {
      const spy = sinon.spy(shared, "getType");

      nullary(targetValue);
      expect(spy.calledOnceWith(targetValue)).to.be.true;
    });

    context('when "getType" function returns "undefined",', function() {
      it("should be true", function() {
        sinon.stub(shared, "getType").returns("undefined");

        expect(nullary(targetValue).isPassed).to.be.true;
      });
    });

    context('when "getType" function returns "null",', function() {
      it("should be true", function() {
        sinon.stub(shared, "getType").returns("null");

        expect(nullary(targetValue).isPassed).to.be.true;
      });
    });

    context('when "getType" function does not return "undefined" or "null",', function() {
      it("should be false", function() {
        sinon.stub(shared, "getType").returns("number");

        expect(nullary(targetValue).isPassed).to.be.false;
      });
    });

    context("when a target value is undefined or null,", function() {
      it("should be true, but otherwise false", function() {
        allTypeValues.forEach((value: any) => {
          const expected = value == undefined;
          expect(nullary(value).isPassed).to.eq(expected);
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it('should be "nullary"', function() {
      allTypeValues.forEach((value: any) => {
        expect(nullary(value).expected).to.eq("nullary");
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it("should be a target value", function() {
      allTypeValues.forEach((value: any) => {
        expect(nullary(value).actual).to.eq(value);
      });
    });
  });
});
