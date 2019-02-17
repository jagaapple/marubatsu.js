// =============================================================================================================================
// SRC - PROXY TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import * as sinon from "sinon";
import * as modifiers from "@modifiers/index";
import * as operators from "@operators/index";
import { createProxyKernel } from "./proxy";

describe("[ Proxy ]", function() {
  const example = it;
  afterEach(function() {
    sinon.restore();
  });

  context("when calling a property a kernel has,", function() {
    it("should call the kernel property", function() {
      const kernel = { foo: 123, bar: () => true };
      const proxyKernel = createProxyKernel(kernel);

      expect((proxyKernel as any).foo).to.eq(kernel.foo);
      expect((proxyKernel as any).bar()).to.eq(kernel.bar());
    });
  });

  context("when calling a property a kernel does not have,", function() {
    context("built-in operators has the property,", function() {
      const property = "foo";
      const dummyOperatorCreators = {
        [property]: {
          name: "foo",
          createValidators: () => true,
        },
      };
      beforeEach(function() {
        sinon.stub(operators, "builtInOperatorCreators").value(dummyOperatorCreators);
      });

      it('should return an object to call "registerOperator" property of kernel with proper operator', function() {
        const stub = sinon.stub();

        const kernel = { registerOperator: stub };
        const proxyKernel = createProxyKernel(kernel);

        const caller = (proxyKernel as any)[property];
        expect(caller).to.be.a("function");

        caller();
        expect(
          stub.calledOnceWith(dummyOperatorCreators[property].name, dummyOperatorCreators[property].createValidators()),
        ).to.be.true;
      });

      example("a returned function should return itself", function() {
        const stub = sinon.stub();

        const kernel = { registerOperator: stub };
        const proxyKernel = createProxyKernel(kernel);

        const caller = (proxyKernel as any)[property];
        expect(caller()).to.eql(kernel);
      });
    });

    context("built-in modifiers has the property,", function() {
      const property = "foo";
      const dummyModifiers = {
        [property]: () => ({ isPassed: true, modifierType: property, expected: 1, actual: 1 }),
      };
      beforeEach(function() {
        sinon.stub<any, any>(modifiers, "builtInModifiers").value(dummyModifiers);
      });

      example("a returned value should be itself", function() {
        const stub = sinon.stub();

        const kernel = { registerModifier: stub };
        const proxyKernel = createProxyKernel(kernel);

        const returnedValue = (proxyKernel as any)[property];
        expect(returnedValue).to.eql(kernel);
      });

      it('should return an object to call "registerModifier" property of kernel with proper modifier', function() {
        const stub = sinon.stub();

        const kernel = { registerModifier: stub };
        const proxyKernel = createProxyKernel(kernel);

        (proxyKernel as any)[property];

        expect(stub.calledOnceWith(dummyModifiers[property])).to.be.true;
      });
    });

    context("built-in operators and modifiers does not have the property,", function() {
      beforeEach(function() {
        sinon.stub(operators, "builtInOperatorCreators").value({});
        sinon.stub(modifiers, "builtInModifiers").value({});
      });

      it("should return undefined", function() {
        const proxyKernel = createProxyKernel({});

        expect((proxyKernel as any).foo).to.be.undefined;
      });
    });
  });
});
