function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.saludar = function(){
  return `Hola, soy ${this.firstName} ${this.lastName}`;
};

const persona = new Person('David','Delgado',20);

console.log(`${persona.firstName} dice: ${persona.saludar()}`);