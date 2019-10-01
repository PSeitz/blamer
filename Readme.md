Blamer-Ts
======

Blamer-ts is a tool for get author information of a line of code.

Status
------
[![NPM version](https://badge.fury.io/js/blamer-ts.svg)](http://badge.fury.io/js/blamer-ts)

[![NPM](https://nodei.co/npm/blamer-ts.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/blamer-ts/)

Setup
-----

    npm install blamer-ts

Usage
-----

```typescript

import {getBlamed} from 'blamer-ts'

let info = getBlamed("index.ts", 5);
console.log(info.author)

```
