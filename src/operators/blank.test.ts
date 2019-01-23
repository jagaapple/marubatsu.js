// =============================================================================================================================
// SRC - OPERATORS - BLANK TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
import { expect } from "chai";
import * as sinon from "sinon";
import { createBlankOperator } from "./blank";

const example = it;

describe("[ Blank ]", function() {
  let spy: sinon.SinonSpy;
  before(function() {
    spy = sinon.spy();
  });

  example("type checking should return true", function() {
    const validators = createBlankOperator()();

    expect(validators.type(undefined)).to.be.true;
  });

  example('"blank" rule should be "isBlank" checker', function() {
    const validators = createBlankOperator({ isBlank: spy })();

    expect(validators.blank).to.eq(spy);
  });
});
