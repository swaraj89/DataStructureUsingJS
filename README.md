# DSJS 

Data structures implemented in JS.

Demo URL : goes here
## Getting Started

### Installation and running

Checkout repo 
```sh
git clone https://github.com/swaraj89/DataStructureUsingJS.git
```
Install dependencies

```sh
npm install
```

Start dev

```sh
npm start
```

Build

```sh
npm build
```
Output is stored in dist folder

### Using a DS

To use a Data structure inyour file do the following.

```sh
import Stack from '../../src/Stack/index';
```

Then in your logic do the following

```sh
let stack = new Stack();
stack.push(1);
stack.push(2);

stack.peek(); //2
stack.pop(); //3
```
## Current Status


| DS 	|  IMPLEMENTED	|  TEST CASES 	|
|--:	|--:	|---	|
| STACK 	| - [x] 	| - [ x ] 	|

## Built With
    * [ES6](https://www.wikiwand.com/en/JavaScript)
    * [Chai](http://chaijs.com)
    * [npm](https://www.npmjs.com/)

## Author

* **Swaraj Panigrahi** - [GitHub](https://github.com/swaraj89)

## License

This project is licensed under the MIT License.

## Inspired From

* [**LUKE LIN**](https://github.com/LukeLin)
* [**geekguy**](https://github.com/geekguy)