<!-- ======================================================================================================================= -->
<!-- README                                                                                                                  -->
<!-- ======================================================================================================================= -->
# <div style="text-align: center">marubatsu</div>
<h4 style="text-align: center">⭕️ Chainable validation library for Node.js and browsers. ❌</h4>

```ts
import marubatsu from "marubatsu";

const website = "https://example.com";
const isValidWebsite = marubatsu()
  .present()
  .string({ length: [7, 128], startsWith: ["http://", "https://"] })
  .not.string({ endsWith: "/" })
  .test(website); // true
```

<div style="text-align: center">
<a href="https://www.npmjs.com/package/marubatsu"><img src="https://img.shields.io/npm/v/marubatsu.svg" alt="npm"></a>
<a href="https://circleci.com/gh/jagaapple/marubatsu.js"><img src="https://img.shields.io/circleci/token/9d95765537463460e378440c0d3a228a0a553dd2/project/github/jagaapple/marubatsu.js/master.svg" alt="circleci"></a>
<a href="https://codecov.io/gh/jagaapple/marubatsu.js"><img src="https://img.shields.io/codecov/c/github/jagaapple/marubatsu.js/master.svg" alt="codecov"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/jagaapple/marubatsu.js.svg" alt="license"></a>
<a href="https://twitter.com/jagaapple_tech"><img src="https://img.shields.io/badge/contact-%40jagaapple_tech-blue.svg" alt="@jagaapple_tech"></a>
</div>

<h4 style="text-align: center">⚠️ THIS IS EXPERIMENTAL NOW ⚠️</h4>


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
  - [`string(rules: { [ruleName]: any } = {})`](#stringrules--rulename-any---)
    - [`length: number`](#length-number)
    - [`length: [number, number]`](#length-number-number)
    - [`maximumLength: number`](#maximumlength-number)
    - [`minimumLength: number`](#minimumlength-number)
    - [`startsWith: number | string`](#startswith-number--string)
    - [`endsWith: number | string`](#endswith-number--string)
    - [`includes: number | string`](#includes-number--string)
    - [`pattern: RegExp`](#pattern-regexp)
- [Options](#options)
    - [`checkAll: boolean = false`](#checkall-boolean--false)
- [Receipes](#receipes)
  - [Share validators in your app](#share-validators-in-your-app)
  - [Migrate new rules to validator](#migrate-new-rules-to-validator)
- [Contributing to marubatsu](#contributing-to-marubatsu)
- [License](#license)

<!-- /TOC -->


## Features

<h4 style="text-align: center">⚠️ THIS IS EXPERIMENTAL NOW ⚠️</h4>

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
Returns `true` if all validations pass a value, otherwise returns `false` .

- `value: any` ... The target value

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

### `string(rules: { [ruleName]: any } = {})`
Checks the value is string type and conforms rules related to string.

```ts
const validator = marubatsu().string();

validator.test("ok"); // true
validator.test(123);  // false
```

#### `length: number`
Checks the string length is equal to specific length.

```ts
const validator = marubatsu().string({ length: 3 });

validator.test("12");   // false
validator.test("123");  // true
validator.test("1234"); // false
```

#### `length: [number, number]`
Checks the string length is between specific length range. The first number is minimum length and second number is maximum
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


#### `startsWith: number | string`
Checks the string is starting with a specific number or string. If passing number, it will be convert to string value.

```ts
const validator = marubatsu().string({ startsWith: 1 });

validator.test("123"); // true
validator.test("231"); // false
validator.test("321"); // false
```

#### `endsWith: number | string`
Checks the string is ending with a specific number or string. If passing number, it will be convert to string value.

```ts
const validator = marubatsu().string({ endsWith: 1 });

validator.test("123"); // false
validator.test("231"); // true
validator.test("321"); // true
```

#### `includes: number | string`
Checks the string includes a specific number or string. If passing number, it will be convert to string value.

```ts
const validator = marubatsu().string({ includes: "am" });

validator.test("I am Jaga Apple"); // true
validator.test("This is Jaga Apple"); // false
```

#### `pattern: RegExp`
Checks the string conforms a specific regular expression.

```ts
const validator = marubatsu().string({ pattern: /^.+@.+$/ });

validator.test("example@example.com"); // true
validator.test("example.com");         // false
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
  .string({ minimumLength: false, startsWith: ["http", "https"] });
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
