// =============================================================================================================================
// SRC - PROXY
// =============================================================================================================================
import { builtInOperatorCreators, Operator } from "@operators/index";
import { builtInModifiers, Modifier } from "@modifiers/index";

export const createProxyKernel = <T extends object>(kernel: T) => {
  type ExecutorWithBuiltInRules = T &
    {
      [K in keyof typeof builtInOperatorCreators]: (
        // tslint:disable-next-line:trailing-comma
        ...parameters: Parameters<(typeof builtInOperatorCreators)[K]["createValidators"]>
      ) => ExecutorWithBuiltInRules
    } &
    { [K in keyof typeof builtInModifiers]: ExecutorWithBuiltInRules };

  return new Proxy(kernel, {
    get: (target: T, property: PropertyKey, receiver: any) => {
      if (Reflect.has(target, property)) return Reflect.get(target, property);

      // Calls built-in operators.
      if (Reflect.has(builtInOperatorCreators, property)) {
        const operator = Reflect.get(builtInOperatorCreators, property) as Operator;

        return (...args: any) => {
          const validators = operator.createValidators(...args);

          // tslint:disable-next-line:no-string-literal
          (target as any)["registerOperator"](operator.name, validators);

          return receiver;
        };
      }

      // Calls built-in modifiers.
      if (Reflect.has(builtInModifiers, property)) {
        const modifier = Reflect.get(builtInModifiers, property) as Modifier;

        // tslint:disable-next-line:no-string-literal
        (target as any)["registerModifier"](modifier);

        return receiver;
      }

      return;
    },
  }) as ExecutorWithBuiltInRules;
};
