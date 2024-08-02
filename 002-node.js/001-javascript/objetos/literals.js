const david = {
  firstName: 'David',
  lastName: 'Delgado',
  age: 20,
  saludar(){
    return `Hola, soy ${this.firstName} ${this.lastName}`;
  },
};

const flor = {
  firstName: 'Florencia',
  lastName: 'Degiusti',
  quote: 'Aguante centralito juajua',
  sayQuote(){
    return `${this.quote}`
  },
  __proto__: david,
};

console.log(`${david.firstName} dice: ${david.saludar()}`);

console.log(`${flor.saludar()}`);