const Person = {
  init(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.saludar = function () {
      return `Hola, soy ${this.firstName} ${this.lastName}`;
    };
  },
};

const Author = {
  __proto__: Person,
  init(firstName, lastName, age, quote) {
    Person.init.call(this,firstName,lastName,age);
    this.quote = quote;
    this.decirQuote = function() {
      return `"${this.quote}", ${this.firstName} ${this.lastName}`;
    };
  },
};

const david = Object.create(Person);
david.init('David','Delgado',20);

const pedro = Object.create(Author);
pedro.init('Pedro', 'Rodriguez', 34, 'Pienso luego existo');

console.log(`${david.firstName} dice: ${david.saludar()}`);
console.log(`${pedro.firstName} dice: ${pedro.saludar()} y tambien: ${pedro.decirQuote()}`);
