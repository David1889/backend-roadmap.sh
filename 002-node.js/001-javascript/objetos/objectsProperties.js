const person = {
  firstName: 'David',
  lastName: 'Delgado',
  age: 20,
  hobbies: ['reading', 'surfing', 'football'],
  address: {
    street: 'Riobamba 5681',
    city: {
      zip: 2000,
      name: 'Rosario',
    },
    state: {
      code: 8,
      name: 'Santa Fe',
    },
    country: 'Argentina',
  },
};

console.log(`${person.firstName} vive en ${person.address.city.name} y tiene ${person.age} años`);

person.age = 21;
console.log(person.age);

person['age'] = 40;
console.log(`${person['firstName']}`);
//Puedo crear nuevas propiedades a un objeto existente
person.job = 'student';
console.log(person.job);