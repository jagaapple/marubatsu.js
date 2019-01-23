// =============================================================================================================================
// SRC - OPERATORS - SHARED TEST
// =============================================================================================================================
/* tslint:disable:only-arrow-functions no-unused-expression no-null-keyword */
export const allTypeValues = [undefined, null, 123, "abc", true, [1, 2, 3], { a: 1, b: 2 }, () => true];

export const allValues = [
  undefined,
  null,
  0,
  123,
  "",
  " ",
  "123",
  true,
  false,
  [],
  [undefined],
  [null],
  [1, 2, 3],
  {},
  { a: undefined },
  { a: null },
  { a: 0 },
  { a: 123 },
  { a: "" },
  { a: " " },
  { a: "123" },
  { a: true },
  { a: false },
  () => true,
];
