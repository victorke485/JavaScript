const person = {
  name: 'John',
  age: 23,
  email: 'john@example.com',
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'chess', 'coding']
};
console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.address.city);
console.log(person.hobbies);
console.log(person.hobbies[0]);

person.name = "Victor";
console.log(person.name);

person.hasChildren = true;
delete person.age;
console.log(person);