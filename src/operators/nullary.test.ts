// =============================================================================================================================
// SRC - OPERATORS - NULLARY TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import * as sinon from "sinon";
import { createNullaryOperator } from "./nullary";

const example = it;

describe("[ Nullary ]", function() {
  let spy: sinon.SinonSpy;
  before(function() {
    spy = sinon.spy();
  });

  example("type checking should return true", function() {
    const validators = createNullaryOperator()();

    expect(validators.type(undefined)).to.be.true;
  });

  example('"nullary" rule should be "isNullary" checker', function() {
    const validators = createNullaryOperator({ isNullary: spy })();

    expect(validators.nullary).to.eq(spy);
  });
});
