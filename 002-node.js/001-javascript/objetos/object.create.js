//Crear objetos que heredan de otro con Object.create

const david = {
  firstName: 'David',
  lastName: 'Delgado',
  age: 20,
  saludar(){
    return `Hola, soy ${this.firstName} ${this.lastName}`;
  },
};

const flor = Object.create(david, {
  firstName: {value: 'Florencia'},
  lastName: {value: 'Degiusti'},
});

console.log(`${david.firstName} dice: ${david.saludar()}`);
console.log(`${flor.firstName} dice: ${flor.saludar()}`);

//Crear objetos de cero con Object.create

const davidNoLiteral = Object.create(
  {},
  {
    firstName: {value: 'David no literal'},
    lastName: {value: 'Delgado'},
    age: {value: 20},
    saludar:{
      value: function() {
      return `Hola, soy ${this.firstName} ${this.lastName} `;
      },
    },
  }
);

console.log(davidNoLiteral.saludar());