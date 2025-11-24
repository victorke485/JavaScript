// Array Literal
const arr = [234, 432, 231, 343];
console.log(arr, typeof arr);

// Array Constructor
const languages = new Array('Java', 'Javascript', 'Python', 'Jac');
console.log(languages, typeof languages);
console.log(languages[1]);
console.log(languages.length);

languages[0] = 'PHP';
console.log(languages);

// Methods
languages.push('C');
console.log(languages);

languages.pop();
console.log(languages);

languages.unshift('C');
console.log(languages);

languages.shift();
console.log(languages);

languages.reverse();
console.log(languages);

console.log(languages.includes("PHP"));

console.log(languages.indexOf('Jac'));

console.log(languages.indexOf('C++'));

console.log(languages.slice(0, 2));

console.log(languages.splice(0, 3)); // Removes from the original array

console.log( languages )

