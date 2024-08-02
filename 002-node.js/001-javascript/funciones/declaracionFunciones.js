function saludar(nombre, saludo = 'Hola'){ //Saludo tiene valor por defecto
  return (`${saludo} ${nombre}`);
}

console.log(saludar('David', 'Wasaaa'));
console.log(saludar('Deivid'));
console.log(saludar());

//Si mando mas parametros de los que una funcion espera recibir
//Los parametros adicionales son descartados

//Las funciones son hoisteadas (Se llevan hacia arriba)