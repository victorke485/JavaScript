// Primitive data types- string, number, booolean, null, undifined, symbol, BigInt
// Non-Primitive - objects

// String
const firstName = 'Abel';
console.log(firstName, typeof firstName);

// Number
const age = 20;
console.log(age, typeof age);

// Boolean
const hasKid = true;
console.log(hasKid, typeof hasKid);

// Null
const email = null;
console.log(email, typeof null);

// Undifined
let score;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 34567899876543678n;
console.log(n, typeof n);

// Reference Types
const numbers = [2, 3, 4, 5];
console.log(numbers, typeof numbers);

const person = {
  name: 'Joseph',
  email: 'joseph@example.com',
  age: 27,
};
console.log(person, typeof person);