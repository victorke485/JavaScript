// Change string to number
let amount = '100';
console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

let price = '250';
console.log(price, typeof price);

price = +price;
console.log(price, typeof price);

let age = '29';
console.log(age, typeof age);

age = Number(age);
console.log(age, typeof age);

// Change number to String
let score = 20;
console.log(score, typeof score);

score = score.toString();
console.log(score, typeof score);

score2 = String(score);
console.log(score2, typeof score2);

// Change string to decimal
let quantity = '12.5';
quantity = parseFloat(quantity);
console.log(quantity, typeof quantity);

// Number to boolean
let x = 31;
x = Boolean(x);
console.log(x, typeof x);