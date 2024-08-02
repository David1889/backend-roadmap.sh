const person = {
  firstName: 'Pedro',
  lastName: 'Perez',
  birthDate: new Date('1993-01-10'),
  getAge(){
    return Math.floor((new Date() - this.birthDate.getTime())/3.15576e10);
  },
  getfirstName(){
    return `${this.firstName}`;
  },
};
//en un método, this. hace referencia al objeto en el cual se encuentra 
//el metodo, por mas que haya otro objeto abarcandolo.
console.log(person.getfirstName());