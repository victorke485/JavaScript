let num = 1234;
console.log(num, typeof num);

x = num.toString();
console.log(x, typeof x);

console.log(`Length of number: ${num.toString().length}`);

console.log(num.toFixed(4));

console.log(num.toPrecision(3));

console.log(num.toExponential(3));

console.log(num.toLocaleString('en-US'));
