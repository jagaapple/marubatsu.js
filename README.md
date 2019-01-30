<!-- ======================================================================================================================= -->
<!-- README                                                                                                                  -->
<!-- ======================================================================================================================= -->
<h1 align="center">marubatsu</h1>
<h4 align="center">⭕️ Chainable validation library for Node.js and browsers. ❌</h4>

```ts
import marubatsu from "marubatsu";

const website = "https://example.com";
const isValidWebsite = marubatsu()
  .present()
  .string({ length: [7, 128] })
  .or(
    (validator) => validator().string({ startsWith: "http://" }),
    (validator) => validator().string({ startsWith: "https://" }),
  )
  .not.string({ endsWith: "/" })
  .test(website); // true
```

<div align="center">
<a href="https://www.npmjs.com/package/marubatsu"><img src="https://img.shields.io/npm/v/marubatsu.svg" alt="npm"></a>
<a href="https://circleci.com/gh/jagaapple/marubatsu.js"><img src="https://img.shields.io/circleci/project/github/jagaapple/marubatsu.js/master.svg" alt="circleci"></a>
<a href="https://codecov.io/gh/jagaapple/marubatsu.js"><img src="https://img.shields.io/codecov/c/github/jagaapple/marubatsu.js/master.svg" alt="codecov"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/jagaapple/marubatsu.js.svg" alt="license"></a>
<a href="https://twitter.com/jagaapple_tech"><img src="https://img.shields.io/badge/contact-%40jagaapple_tech-blue.svg" alt="@jagaapple_tech"></a>
</div>

<h4 align="center">⚠️ THIS IS EXPERIMENTAL NOW ⚠️</h4>
<div align="center"><i>This is written about marubatsu features, but they may be not implemented yet.</i></div>

## Table of Contents

<!-- TOC depthFrom:2 -->

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Executors](#executors)
  - [`test(value: any)`](#testvalue-any)
  - [`validate(value: any)`](#validatevalue-any)
- [Operators](#operators)
  - [`nullary()`](#nullary)
  - [`empty()`](#empty)
  - [`blank()`](#blank)
  - [`present()`](#present)
  - [`string(rules: { [ruleName]: any } = {})`](#stringrules--rulename-any---)
    - [`value: string`](#value-string)
    - [`length: number`](#length-number)
    - [`length: [number, number]`](#length-number-number)
    - [`maximumLength: number`](#maximumlength-number)
    - [`minimumLength: number`](#minimumlength-number)
    - [`startsWith: string`](#startswith-string)
    - [`endsWith: string`](#endswith-string)
    - [`alphanumeric: boolean`](#alphanumeric-boolean)
    - [`alphanumeric: "lower-camel" | "upper-camel" | "lower-snake" | "upper-snake" | "lower-kebab" | "upper-kebab" | "lower-space" | "upper-space" | "lower-dot" | "upper-dot"`](#alphanumeric-lower-camel--upper-camel--lower-snake--upper-snake--lower-kebab--upper-kebab--lower-space--upper-space--lower-dot--upper-dot)
    - [`includes: string`](#includes-string)
    - [`pattern: RegExp`](#pattern-regexp)
  - [`number(rules: { [ruleName]: any } = {})`](#numberrules--rulename-any---)
    - [`value: number`](#value-number)
    - [`value: [number, number]`](#value-number-number)
    - [`maximumValue: number`](#maximumvalue-number)
    - [`minimumValue: number`](#minimumvalue-number)
    - [`integer: boolean`](#integer-boolean)
    - [`float: boolean`](#float-boolean)
    - [`positive: boolean`](#positive-boolean)
    - [`negative: boolean`](#negative-boolean)
    - [`digits: number`](#digits-number)
    - [`digits: [number, number]`](#digits-number-number)
    - [`maximumDigits: number`](#maximumdigits-number)
    - [`minimumDigits: number`](#minimumdigits-number)
- [Options](#options)
    - [`checkAll: boolean = false`](#checkall-boolean--false)
- [Receipes](#receipes)
  - [Share validators in your app](#share-validators-in-your-app)
  - [Migrate new rules to validator](#migrate-new-rules-to-validator)
- [Contributing to marubatsu](#contributing-to-marubatsu)
- [License](#license)

<!-- /TOC -->


## Features

<h4 align="center">⚠️ THIS IS EXPERIMENTAL NOW ⚠️</h4>

| FEATURES                                  | WHAT YOU CAN DO                                       |
|-------------------------------------------|-------------------------------------------------------|
| 🔗 **Chainable API**                      | Compose and share validations in your app              |
| 🌏 **Universal JavaScript**               | Works on browsers (ES Modules) and Node.js (CommonJS) |
| 🛠 **Customizable validation rules**      | Merge new rules and create your rules                 |
| 🇯🇵 **Customizable validation messages**   | Translate and set more friendly messages              |
| 🔤 **Supports TypeScript**                | Use autocomplete and type safety system               |


## Quick Start
### Requirements
- npm or Yarn
- Browsers or Node.js which supports ES2015+

### Installation
```bash
$ npm install --save marubatsu
```

If you are using Yarn, use the following command.

```bash
$ yarn add marubatsu
```

marubatsu is created by TypeScript so you do not need to install any definitely typed packages like `@types/marubatsu` .


## Basic Usage
The below is simple example to check some values.

```ts
import marubatsu from "marubatsu";

// Check the value is string, starting with "@", and length is between 4 and 20.
marubatsu()
  .string({ length: [4, 20], startsWith: "@" })
  .test("@jagaapple"); // true


// Share your validator.
export const userNameValidator = marubatsu().string({ length: [4, 20], startsWith: "@" });


// Combinate some operators.
marubatsu()
  .or(
    (value, validator) => validator().number({ length: 3 }).test(value),
    (value, validator) => validator().string({ length: 3 }).test(value),
  )
  .test(123); // true


// Check all elements of array.
marubatsu()
  .array({
    length: 3,
    every: (value, validator) => validator().string({ startsWith: "#" }),
  })
  .test(["#apple", "#orange", "#grape"]); // true


// Get validation results.
marubatsu()
  .string({ length: [4, 20], startsWith: "@" })
  .validate("@a");
// {
//   isPassed: false,
//   errors: [
//     {
//       rule: "string-length",
//       expected: [4, 20],
//       messages: "The value must be at least 4 and no more than 20 characters.",
//     },
//   ],
// }


// Customize validation messages.
marubatsu({
  subject: "username",
  rules: {
    "string-length": {
      failedMessage: (value, subject, expected) => `The ${subject} is invalid`,
    },
  },
})
  .string({ length: [4, 20], startsWith: "@" })
  .validate("@a");
// {
//   isPassed: false,
//   errors: [
//     {
//       rule: "string-length",
//       expected: [4, 20],
//       messages: "The username is invalid.",
//     },
//   ],
// }

// Create your rules.
marubatsu({
  rules: {
    "string-email": {
      checker: (value, tld) => new RegExp(`/^.+@.+\\.${tld}$/`).test(value),
      failedMessage: (value, subject, expected) => `The ${value} is invalid email address format`,
    },
  },
})
  .string({ email: "com" })
  .test("example@example.com"); // true
```


## Executors
**Executors** is to execute validations.

### `test(value: any)`
Returns `true` if a value passes all validations, otherwise returns `false` .

- `value: any` ... The value

```ts
marubatsu().string({ length: 3 }).test("123");  // true
marubatsu().string({ length: 3 }).test("1234"); // false
```

### `validate(value: any)`
Returns failed rules and error messages. To get all error messages, should configure `checkAll` option.

- `value: any` ... The target value

```ts
marubatsu().string({ length: [4, 20], startsWith: "@" }).validate("abc");
// {
//   isPassed: false,
//   errors: [
//     {
//       rule: "string-length",
//       expected: [4, 20],
//       messages: "The value must be at least 4 and no more than 20 characters.",
//     },
//     {
//       rule: "string-startsWith",
//       expected: "@",
//       messages: "The value must be starting with \"@\"",
//     },
//   ],
// }
```


## Operators
**Operators** is validation to check the value conforms specific rules.

### `nullary()`
Checks the value is `null` or `undefined` .

```ts
const validator = marubatsu().nullary();

validator.test(null); // true
validator.test(undefined); // true
validator.test(-1); // false
validator.test(0); // false
validator.test(""); // false
validator.test(" "); // false
validator.test(false); // false
validator.test([]); // false
validator.test({}); // false
```

### `empty()`
Checks the value is an empty string, an empty array, or an empty object (pure object/hash/dictionary).

```ts
const validator = marubatsu().empty();

validator.test(null); // false
validator.test(undefined); // false
validator.test(-1); // false
validator.test(0); // false
validator.test(""); // true
validator.test(" "); // false
validator.test(false); // false
validator.test([]); // true
validator.test({}); // true
```

### `blank()`
Checks the value is `null` , `undefined` , an empty string, a string including only spaces, an empty array, an empty object
(pure object/hash/dictionary), or `false` .

```ts
const validator = marubatsu().blank();

validator.test(null); // true
validator.test(undefined); // true
validator.test(-1); // false
validator.test(0); // false
validator.test(""); // true
validator.test(" "); // true
validator.test(false); // true
validator.test([]); // true
validator.test({}); // true
```

### `present()`
Checks the value is NOT `null` , `undefined` , an empty string, a string including only spaces, an empty array, an empty object
(pure object/hash/dictionary), or `false` . This operator is equal to `not.blank()`

### `string(rules: { [ruleName]: any } = {})`
Checks the value is string type and conforms rules related to string.

```ts
const validator = marubatsu().string();

validator.test("ok"); // true
validator.test(123);  // false
```

#### `value: string`
Checks the string is equal to a specific string.

```ts
const validator = marubatsu().string({ value: "abc" });

validator.test("abc");   // true
validator.test("abcde"); // false
```

#### `length: number`
Checks the string length is equal to a specific length.

```ts
const validator = marubatsu().string({ length: 3 });

validator.test("12");   // false
validator.test("123");  // true
validator.test("1234"); // false
```

#### `length: [number, number]`
Checks the string length is between specific length range. The first number is minimum length and the second number is maximum
length.

```ts
const validator = marubatsu().string({ length: [1, 3] });

validator.test("");     // false
validator.test("1");    // true
validator.test("123");  // true
validator.test("1234"); // false
```

#### `maximumLength: number`
Checks the string length is not more than a specific length.

```ts
const validator = marubatsu().string({ maximumLength: 3 });

validator.test("12");   // true
validator.test("123");  // true
validator.test("1234"); // false
```

#### `minimumLength: number`
Checks the string length is not less than a specific length.

```ts
const validator = marubatsu().string({ minimumLength: 3 });

validator.test("12");   // false
validator.test("123");  // true
validator.test("1234"); // true
```


#### `startsWith: string`
Checks the string is starting with a specific string.

```ts
const validator = marubatsu().string({ startsWith: "abc" });

validator.test("abcde"); // true
validator.test("12345"); // false
```

#### `endsWith: string`
Checks the string is ending with a specific string.

```ts
const validator = marubatsu().string({ endsWith: "cde" });

validator.test("abcde"); // true
validator.test("12345"); // false
```

#### `alphanumeric: boolean`
Checks the string is alphanumeric.

```ts
const validator = marubatsu().string({ alphanumeric: true });

validator.test("123"); // true
validator.test("abc"); // true
validator.test("a12"); // true
validator.test("# @"); // false
```

#### `alphanumeric: "lower-camel" | "upper-camel" | "lower-snake" | "upper-snake" | "lower-kebab" | "upper-kebab" | "lower-space" | "upper-space" | "lower-dot" | "upper-dot"`
Checks the string is alphanumeric and a specific case style such as `lowerCamelCase` or `lower_snake_case` .

You can specify one of the following case style.

| VALUE           | CASE STYLE                          | VALID STRING         |
|-----------------|-------------------------------------|----------------------|
| `"lower-camel"` | Lower Camel Case                    | `"lowerCamelCase"`   |
| `"upper-camel"` | Upper Camel Case                    | `"UpperCamelCase"`   |
| `"lower-snake"` | Lower Snake Case                    | `"lower_snake_case"` |
| `"upper-snake"` | Upper Snake Case                    | `"Upper_Snake_Case"` |
| `"lower-kebab"` | Lower Kebab Case (Lower Chain Case) | `"lower-kebab-case"` |
| `"upper-kebab"` | Upper Kebab Case (Upper Chain Case) | `"Upper-Kebab-Case"` |
| `"lower-space"` | Lower Space Case                    | `"lower space case"` |
| `"upper-space"` | Upper Space Case                    | `"Upper Space Case"` |
| `"lower-dot"`   | Lower Dot Case                      | `"lower.dot.case"`   |
| `"upper-dot"`   | Upper Dot Case                      | `"Upper.Dot.Case"`   |

```ts
const validator = marubatsu().string({ alphanumeric: "lower-snake" });

validator.test("jagaapple");  // true
validator.test("jaga_apple"); // true
validator.test("JagaApple");  // false
validator.test("Jaga Apple"); // false
validator.test("jaga-apple"); // false
validator.test("jaga.apple"); // false
```

#### `includes: string`
Checks the string includes a specific string.

```ts
const validator = marubatsu().string({ includes: "am" });

validator.test("I am Jaga Apple");    // true
validator.test("This is Jaga Apple"); // false
```

#### `pattern: RegExp`
Checks the string conforms a specific regular expression.

```ts
const validator = marubatsu().string({ pattern: /^.+@.+$/ });

validator.test("example@example.com"); // true
validator.test("example.com");         // false
```

### `number(rules: { [ruleName]: any } = {})`
Checks the value is string type and conforms rules realted to number.

```ts
const validator = marubatsu().number();

validator.test(123);  // true
validator.test("ok"); // false
```

#### `value: number`
Checks the number is equal to a specific number.

```ts
const validator = marubatsu().number({ value: 123 });

validator.test(123);   // true
validator.test(12345); // false
```

#### `value: [number, number]`
Checks the number is between specific value range. The first number is minimum value and the second number is maximum value.

```ts
const validator = marubatsu().number({ value: [100, 200] });

validator.test(123);   // true
validator.test(12345); // false
```

#### `maximumValue: number`
Checks the number is equal to or less than a specific maximum value.

```ts
const validator = marubatsu().number({ maximumValue: 200 });

validator.test(123);   // true
validator.test(12345); // false
```

#### `minimumValue: number`
Checks the number is equal to or more than a specific minimum value.

```ts
const validator = marubatsu().number({ minimumValue: 100 });

validator.test(123); // true
validator.test(12);  // false
```

#### `integer: boolean`
Checks the number does not have decimal.

```ts
const validator = marubatsu().number({ integer: true });

validator.test(100);    // true
validator.test(100.0);  // true
validator.test(100.00); // true
validator.test(100.01); // false
```

#### `float: boolean`
Checks the number has decimal.

```ts
const validator = marubatsu().number({ float: true });

validator.test(100);    // false
validator.test(100.0);  // false
validator.test(100.00); // false
validator.test(100.01); // true
```

#### `positive: boolean`
Checks the number is a positive number. `0` is `false` .

```ts
const validator = marubatsu().number({ positive: true });

validator.test(100);  // true
validator.test(0);    // false
validator.test(-100); // false
```

#### `negative: boolean`
Checks the number is a negative number. `0` is `false` .

```ts
const validator = marubatsu().number({ negative: true });

validator.test(100);  // false
validator.test(0);    // false
validator.test(-100); // true
```

#### `digits: number`
Checks the number of digits is equal to a specific number.

```ts
const validator = marubatsu().number({ digits: 3 });

validator.test(12);   // false
validator.test(123);  // true
validator.test(1234); // false
```

#### `digits: [number, number]`
Checks the number of digits is between specific value range. The first number is minimum and the second number is maximum number
of digits.

```ts
const validator = marubatsu().number({ digits: [3, 4] });

validator.test(12);    // false
validator.test(123);   // true
validator.test(1234);  // true
validator.test(12345); // false
```

#### `maximumDigits: number`
Checks the number of digits is equal to or less than a specific number.

```ts
const validator = marubatsu().number({ maximumDigits: 3 });

validator.test(12);   // true
validator.test(123);  // true
validator.test(1234); // false
```

#### `minimumDigits: number`
Checks the number of digits is equal to or more than a specific number.

```ts
const validator = marubatsu().number({ minimumDigits: 3 });

validator.test(12);   // false
validator.test(123);  // true
validator.test(1234); // true
```


## Options
```ts
marubatsu({ ...options }).present().test("jagaapple");
```

You can pass options to marubatsu constructor.

#### `checkAll: boolean = false`
Enables to execute all validations. If you want high-performance, recommended to be `false` .

```ts
marubatsu({ checkAll: true });
```


## Receipes
### Share validators in your app
marubatsu does not execute validations until calling some executors.

```ts
// /account.validators.ts
export const accountNameValidator = marubatsu()
  .present()
  .string({ length: [4, 20], startsWith: "@" })
```

```ts
// /sign-up.ts
import { accountNameValidator } from "./account.validators.ts";

const signUp = (accountName: string) => {
  if (!accountNameValidator.test(accountName)) return;

  ...
}

// /sign-in.ts
import { accountNameValidator } from "./account.validators.ts";

const signIn = (accountName: string) => {
  if (!accountNameValidator.test(accountName)) return;

  ...
}
```

### Migrate new rules to validator
```ts
let validator = marubatsu()
  .string({ length: 3 });

validator = validator
  .string({ startsWith: "a" });
  // Be equal to `.string({ length: 3, startsWith: "a" })`
```

It is possible to migrate new rules to validator and disable applied rules. To disable applied rules, pass `false` .

```ts
const websiteIdentifierValidator = marubatsu()
  .string({ length: [4, 255] });

const urlValidator = websiteIdentifierValidator
  .string({ minimumLength: false, startsWith: "https" });
  // Disable `minimumLength` and merge `startsWith` rule
```


## Contributing to marubatsu
Bug reports and pull requests are welcome on GitHub at
[https://github.com/jagaapple/marubatsu.js](https://github.com/jagaapple/marubatsu.js). This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to the
[Contributor Covenant](http://contributor-covenant.org) code of conduct.

Please read [Contributing Guidelines](./.github/CONTRIBUTING.md) before development and contributing.


## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Copyright 2019 Jaga Apple. All rights reserved.
