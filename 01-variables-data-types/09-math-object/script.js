let x = 2134;

console.log(Math.sqrt(x));

console.log(Math.abs(-12));

console.log(Math.round(890.987));

console.log(Math.ceil(890.987));

console.log(Math.floor(890.987));

console.log(Math.pow(2, 3));

console.log(Math.min(12, 34, 54, 23));

console.log(Math.max(12, 34, 54, 23));

console.log(Math.random());

console.log(Math.floor( Math.random() * 10 + 1 )); // Gets number between 1 & 10

// Challenge

let a = Math.floor( Math.random() * 100 + 1 );
let b = Math.floor( Math.random() * 150 + 1 );

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} ** ${b} = ${a ** b}`);
console.log(`${a} % ${b} = ${a % b}`);