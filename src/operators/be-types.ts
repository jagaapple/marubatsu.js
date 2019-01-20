// =============================================================================================================================
// SRC - OPERATORS - BE TYPES
// =============================================================================================================================
import { isType } from "@checkers/index";

export const beNumber = () => (value: any) => isType(value, "number");

export const beString = () => (value: any) => isType(value, "string");

export const beBoolean = () => (value: any) => isType(value, "boolean");

export const beNull = () => (value: any) => isType(value, "null");

export const beUndefined = () => (value: any) => isType(value, "undefined");

export const beArray = () => (value: any) => isType(value, "array");

export const beObject = () => (value: any) => isType(value, "object");
