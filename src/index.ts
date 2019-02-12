// =============================================================================================================================
// SRC - INDEX
// =============================================================================================================================
import { Kernel } from "./kernel";
import { createProxyKernel } from "./proxy";

const marubatsu = () => createProxyKernel(new Kernel());

export default marubatsu;
