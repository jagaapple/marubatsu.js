// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { Kernel } from "./kernel";
import { createProxyKernel } from "./proxy";

const marubatsu = () => createProxyKernel(new Kernel());

marubatsu()
  .string({ case: "lower-camel-case" })
  .number({ maximum: 200, misnimum: 100, integer: true, positive: true })
  .length({ minimum: 100, maximum: 200 })
  .test(123);

export default marubatsu;
