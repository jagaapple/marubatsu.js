// =============================================================================================================================
// SRC - CHECKERS - LENGTH TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import * as shared from "./shared";
import { length } from "./length";

describe("[ Length Checker ]", function() {
  const targetValue = "abc";
  afterEach(function() {
    sinon.restore();
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Is Passed
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("IS PASSED ::", function() {
    context("when an expected length is number,", function() {
      const expectedLength = 123;

      context('the returned value of "getLength" function is equal to the expected length,', function() {
        it("should be true", function() {
          const stub = sinon.stub(shared, "getLength").returns(expectedLength);

          const result = length(targetValue, expectedLength);
          expect(stub.calledOnceWith(targetValue)).to.be.true;
          expect(result.isPassed).to.be.true;
        });
      });

      context('the returned value of "getLength" function is not equal to the expected length,', function() {
        it("should be false", function() {
          const stub = sinon.stub(shared, "getLength").returns(expectedLength - 1);

          const result = length(targetValue, expectedLength);
          expect(stub.calledOnceWith(targetValue)).to.be.true;
          expect(result.isPassed).to.be.false;
        });
      });
    });

    context("when an expected length is range object,", function() {
      const expectedLength = { minimum: 3, maximum: 5 };

      context('the returned value of "getLength" function is within the expected length rarnge,', function() {
        it("should be true", function() {
          [3, 4, 5].forEach((dummyActualLength: number) => {
            const stub = sinon.stub(shared, "getLength").returns(dummyActualLength);
            const result = length(targetValue, expectedLength);
            expect(stub.calledOnceWith(targetValue)).to.be.true;
            expect(result.isPassed).to.be.true;

            sinon.restore();
          });
        });
      });

      context('the returned value of "getLength" function is not within the expected length range,', function() {
        it("should be false", function() {
          [1, 2, 6, 7].forEach((dummyActualLength: number) => {
            const stub = sinon.stub(shared, "getLength").returns(dummyActualLength);
            const result = length(targetValue, expectedLength);
            expect(stub.calledOnceWith(targetValue)).to.be.true;
            expect(result.isPassed).to.be.false;

            sinon.restore();
          });
        });
      });
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Expected
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("EXPECTED ::", function() {
    it("should be an expected length", function() {
      const expectedLength1 = 123;
      expect(length(targetValue, expectedLength1).expected).to.eq(expectedLength1);

      const expectedLength2 = { minimum: 3, maximum: 5 };
      expect(length(targetValue, expectedLength2).expected).to.eq(expectedLength2);
    });
  });

  // ---------------------------------------------------------------------------------------------------------------------------
  // Actual
  // ---------------------------------------------------------------------------------------------------------------------------
  describe("ACTUAL ::", function() {
    it('should be the returned value of "getLength" function', function() {
      const returnedValue = 123;
      sinon.stub(shared, "getLength").returns(returnedValue);

      const expectedLength1 = 123;
      expect(length(targetValue, expectedLength1).actual).to.eq(returnedValue);

      const expectedLength2 = { minimum: 3, maximum: 5 };
      expect(length(targetValue, expectedLength2).actual).to.eq(returnedValue);
    });
  });
});
