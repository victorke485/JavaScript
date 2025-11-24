const languages = ['Javascript', 'PHP', 'Python', 'C', 'Java'];
const frameworks = ['Django', 'Streamlit', 'Flask', 'Bootstrap', 'Tailwind'];

// languages.push(frameworks);
// console.log(languages);

// console.log(languages[5][0]);

// Concat()
const x = languages.concat(frameworks);
console.log(x);

// Spread Operator (...)
const y = [...languages, ...frameworks];
console.log(y);

// Flatten Arrays
const nums = [1, 2, [3, 4], [5, 6], 7];
console.log(nums);
console.log(nums.flat());

// Static Methods
const cars = ['BMW', 'Audi', 'Benz', 'Toyota'];
console.log( Array.isArray(cars) );

console.log( Array.from('12345678') );

const a = 'yellow';
const b = 'blue';
const c = 'green';
console.log( Array.of(a , b, c) );