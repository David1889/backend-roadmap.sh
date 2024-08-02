function Person(firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.saludar = function (){
  return `Hola, soy ${this.firstName} ${this.lastName}`;
};

function Author(firstName, lastName, age, quote){
  Person.call(this, firstName, lastName, age);
  this.quote = quote;
};

Author.prototype = Object.create(Person.prototype);
Author.prototype.constructor = Author;

