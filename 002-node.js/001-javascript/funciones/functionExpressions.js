const hola = function saludar(nombre,saludo = 'hola'){
  return(`${saludo} ${nombre}`);
};

const holaAnonimo = function(nombre,saludo = 'hola'){
  return(`${saludo} ${nombre}`);
};

console.log(hola('David'));
console.log(holaAnonimo('David'));

//Las function expressions no son hoisteadas