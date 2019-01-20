// =============================================================================================================================
// SRC - CHECKERS - EQUAL LENGTH CHECKER
// =============================================================================================================================
import { getLength } from "./shared";

export const isEqualToLength = (value: any, len: number): boolean => getLength(value) === len;
