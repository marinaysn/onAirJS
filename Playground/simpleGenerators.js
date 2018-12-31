//https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e
// What are JavaScript Generators and how to use them
//by Vladislav Stepanov

/******************************* */
console.log("**********         Test 1       ************\n");
/******************************* */

function* generatorForLoop(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}

const genForLoop = generatorForLoop(5);

genForLoop.next(); // first console.log - 0
genForLoop.next(); // 1
genForLoop.next(); // 2
genForLoop.next(); // 3
genForLoop.next(); // 4

/******************************* */
console.log("\n**********         Test 2       ************\n");
/******************************* */

function withReturn(a) {
  let b = 5;
  console.log(a + b);
  return a + b;
  b = 6; // we will never re-assign b
  console.log(a + b);
  return a * b; // and will never return new value
}

withReturn(6); // 11
withReturn(6); // 11

/******************************* */
//testing with yield
console.log("\n**********         Test 3       ************\n");
/******************************* */

function* withYield(a) {
  let b = 5;
  console.log(a + b);
  yield a + b;
  b = 6; // it will be re-assigned after first execution
  console.log(a + b);
  yield a * b;

  b = 225; // it will be re-assigned after second execution
  console.log(b / a);
  yield b / a;

  b = 2; // it will be re-assigned after second execution
  console.log(b - a);
  yield b - a;
}

const calcSix = withYield(6);

calcSix.next().value; // 11
calcSix.next().value; // 36
calcSix.next().value; // 11
calcSix.next().value; // 36

/******************************* */
//testing for Yield delegator
//Yield with asterisk can delegate it’s work to another generator.
//This way you can chain as many generators as you want.

console.log("\n**********         Test 4       ************\n");
/******************************* */

function* anotherGenerator(i) {
  console.log(i);
  yield i + 1;
  console.log(i + 1);
  yield i + 2;
  console.log(i + 2);
  yield i + 3;
  console.log(i + 3);
}

function* generator_abc(i) {
  yield* anotherGenerator(i);
}

var gen = generator_abc(1);

gen.next().value; // 2
gen.next().value; // 3
gen.next().value; // 4
// gen.next().value; // 4
//gen.next().value; // 4
// gen.next().value; // 4

/******************************* */

console.log("\n**********         Test 5       ************\n");
/******************************* */

function* generator(arr) {
  for (const i in arr) {
    console.log(arr[i]);
    yield i;
    yield yield;
    yield yield;
  }
}

const gen2 = generator([0, 1]);

gen2.next(); // {value: "0", done: false}
gen2.next("A"); // {value: undefined, done: false}
gen2.next("A"); // {value: "A", done: false}
gen2.next("A"); // {value: undefined, done: false}
gen2.next("A"); // {value: "A", done: false}
gen2.next(); // {value: "1", done: false}
gen2.next("B"); // {value: undefined, done: false}
gen2.next("B"); // {value: "B", done: false}
gen2.next("B"); // {value: undefined, done: false}
gen2.next("B"); // {value: "B", done: false}
gen2.next(); // {value: undefined, done: true}
gen2.next(); // {value: undefined, done: true}
gen2.next(); // {value: undefined, done: true}

/******************************* */

console.log("\n**********         Test 6       ************\n");
/******************************* */

function* generators(arg = "Nothing") {
  console.log(arg);
  yield arg;
}

const gens0 = generators(); // OK
const gens1 = generators("Hello"); // OK
//const gens2 = new generators(); // Not OK

generators().next(); // It will work, but every time from the beginning
gens0.next().value;
gens1.next().value;

/******************************* */

console.log("\n**********         Test 7       ************\n");
/******************************* */

function* generatorM(arr) {
  for (const el in arr) {
    yield el;
  }
}

const genM = generatorM([0, 1, 2]);

for (const g of genM) {
  console.log(g); // 0 -> 1 -> 2
}

genM.next(); // {value: undefined, done: true}


/******************************* */
//Fibonacci numbers
console.log("\n**********         Test 8       ************\n");
/******************************* */

function * fibonacci(seed1, seed2) {
  while (true) {
    yield (() => {
      seed2 = seed2 + seed1;
      seed1 = seed2 - seed1;
      return console.log(seed2);
    })();
  }
}

const fib = fibonacci(0, 1);
fib.next(); // {value: 1, done: false}
fib.next(); // {value: 2, done: false}
fib.next(); // {value: 3, done: false}
fib.next(); // {value: 5, done: false}
fib.next(); // {value: 8, done: false}
// fib.next(); // {value: 13, done: false}
// fib.next(); // {value: 21, done: false}
// fib.next(); // {value: 34, done: false}
// fib.next(); // {value: 55, done: false}


