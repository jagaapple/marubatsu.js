<!-- ======================================================================================================================= -->
<!-- README                                                                                                                  -->
<!-- ======================================================================================================================= -->
# marubatsu

[![npm](https://img.shields.io/npm/v/marubatsu.svg)](https://www.npmjs.com/package/marubatsu)
[![license](https://img.shields.io/github/license/jagaapple/marubatsu.svg)](https://opensource.org/licenses/MIT)
[![@jagaapple_tech](https://img.shields.io/badge/contact-%40jagaapple_tech-blue.svg)](https://twitter.com/jagaapple_tech)

Chainable validation library for Node.js and browsers.


## Table of Contents

<!-- TOC depthFrom:2 -->

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Usage](#usage)
  - [TODO](#todo)
- [Contributing to marubatsu](#contributing-to-marubatsu)
- [License](#license)

<!-- /TOC -->


## Features
```typescript
import marubatsu from "marubatsu";

const accountName = "@jagaapple";
const isValidAccountName = marubatsu()
  .present()
  .string({ length: [4, 12], lowercase: true, startWith: "@" })
  .test(accountName);
  // true

const token = 31692;
const isValidToken = marubatsu()
  .set({ subject: "token", period: true })
  .present()
  .number({ length: 6, endWith: 0 })
  .validate(email);
  // {
  //   messages: [
  //     "The token length must be 6.",
  //     "The token msut be end with 0.",
  //   ],
  //   failedValidations: [
  //     "number-length",
  //     "number-endWidth",
  //   ]
  // }

const favoriteColors = ["red", "blue", "black"];
const isValidFavoriteColors = marubatsu()
  .set({
    subject: "favorite colors",
    customMessages: {
      "array-excludes": (invalidValue, disallowValues) =>
        `Please do not input ${disallowValues.join("or")}. You inputted "${invalidValue}".`,
    },
  })
  .present()
  .array({ length: 5, excludes: ["white", "black"] })
  .every({ instanceOf: "string" })
  .validate(favoriteColors);
  // {
  //   messages: [
  //     "The favorite colors length must be 5.",
  //     "Please do not input white or black. You inputted \"black\".",
  //   ],
  //   failedValidations: [
  //     "number-length",
  //     "number-endWidth",
  //   ]
  // }

export const emailValidater = marubatsu()
  .present()
  .string({ maximumLength: 128, pattern: /^.+@.+$/ });
// You can import `emailValidater` in other files and validate using `emailValidater.validate(xxx)` .
```

- Provides chainable API
  - You can compose your validations
  - You can create validator functions
- Universal JavaScript, works on browsers and Node.js
- Customizable validation rules
- Customizable validation messages
- Supports TypeScript


## Quick Start
### Requirements
- npm or Yarn
- Browsers or Node.js which support ES2015

### Installation
```bash
$ npm install --save marubatsu
```

If you are using Yarn, use the following command.

```bash
$ yarn add marubatsu
```


## Usage
### TODO
TODO. TODO. TODO. TODO. TODO. TODO. TODO.

```typescript
// TODO
```


## Contributing to marubatsu
Bug reports and pull requests are welcome on GitHub at
[https://github.com/jagaapple/marubatsu](https://github.com/jagaapple/marubatsu). This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to the
[Contributor Covenant](http://contributor-covenant.org) code of conduct.

Please read [Contributing Guidelines](./.github/CONTRIBUTING.md) before development and contributing.


## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Copyright 2019 Jaga Apple. All rights reserved.
