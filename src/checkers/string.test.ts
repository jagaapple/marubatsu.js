// =============================================================================================================================
// SRC - CHECKERS - STRING TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import { allTypeValues } from "@shared/values.test";
import * as shared from "./shared";
import { string } from "./string";

describe("[ String Checker ]", function() {
  const targetValue = "abc";
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    it('should call "getType" function', function() {
      const spy = sinon.spy(shared, "getType");

      string(targetValue);
      expect(spy.calledOnceWith(targetValue)).to.be.true;
    });

    context('when "getType" function returns "string",', function() {
      it("should be true", function() {
        sinon.stub(shared, "getType").returns("string");

        expect(string(targetValue).isPassed).to.be.true;
      });
    });

    context('when "getType" function does not return "string",', function() {
      it("should be false", function() {
        sinon.stub(shared, "getType").returns("undefined");

        expect(string(targetValue).isPassed).to.be.false;
      });
    });

    context("when a target value is string,", function() {
      it("should be true, but otherwise false", function() {
        allTypeValues.forEach((value: any) => {
          expect(string(value).isPassed).to.eq(typeof value === "string");
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it('should be the returned value of "getType" function', function() {
      const returnedValue = "dummy-returned-value";
      sinon.stub(shared, "getType").returns(returnedValue as any);

      expect(string(targetValue).actual).to.eq(returnedValue);
    });
  });
});
