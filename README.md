# Array of Tuples
Implementation of [SoA (structure of arrays)](https://en.wikipedia.org/wiki/AOS_and_SOA#Structure_of_arrays).
Stores every item of Tuple in separate arrays instead of single array.

## Usage
```
let tupleArray = require('array-of-tuples');
```
Use `create<T1, ..., T8>(size: 1..8)` method to create array of tuples. Up to 8 generic parameters are available.
```
let array = tupleArray.create<T1, ..., T8>(1..8);
```
`length`, `get`, `set`, `push`, `pop`, `unshift`, `shift`, `indexOf` are currently available.
```
array.length; // 0..*
array.get(index: 0); // [T1, ..., T8]
array.set(index: 0, 0, ..., 7); // [T1, ..., T8]
array.push(0, ..., 7); // length
array.pop(); // [T1, ..., T8]
array.unshift(0, ..., 7); // length
array.shift(); // [T1, ..., T8]
array.indexOf(0, ..., 7, fromIndex?: 0); // -1..*
```
