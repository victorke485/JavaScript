// Concatination
let name = 'Victor';
console.log('Hello ' + name + ' .');

// Template literals
console.log(`Hello ${name}. Your score is ${(12 / 15) * 100}%.`);

// String Properties and methods
let a = 'Hello world';
console.log(a.length);
console.log(a[4]);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.indexOf('r'));
console.log(a.substring(2, 5));
console.log(a.slice(-11, -6));

b = '                  Hello';
console.log(b.trim());

console.log(a.replace('world', 'Javascript'));
console.log(a.includes('world'));
console.log(a.split(' '));

// Challenge: Convert string to title case
let myString = 'vICTor';
function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(toTitleCase(myString));
