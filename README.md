# Structure of Arrays
[![Build Status](https://api.travis-ci.org/dangerozov/structure-of-arrays.svg?branch=master)](https://api.travis-ci.org/dangerozov/structure-of-arrays)

Implementation of [SoA (structure of arrays)](https://en.wikipedia.org/wiki/AOS_and_SOA#Structure_of_arrays).

## Usage
```
let soa = require('structure-of-arrays');
```
Use `soa.create2<T1, T2> .. soa.create8<T1, .., T8>()` method to create. Up to 8 generic parameters are available.
```
let array = soa.create8<T1, .., T8>();
```
`length`, `get`, `set`, `push`, `pop`, `unshift`, `shift`, `indexOf` are available.
```
array.length; // 0..*
array.get(index: 0); // [T1, .., T8]
array.set(index: 0, 0, .., 7); // [T1, .., T8]
array.push(0, .., 7); // length
array.pop(); // [T1, .., T8]
array.unshift(0, .., 7); // length
array.shift(); // [T1, .., T8]
array.indexOf(0, .., 7, fromIndex?: 0); // -1..*
```
