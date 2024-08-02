function saludar(receptor, saludo='hola'){
  if (typeof receptor === 'string'){
    return `${saludo} ${receptor}`;
  } else if (typeof receptor === 'object'){
    return saludar(`${receptor.nombre} ${receptor.apellido}`, saludo);
  }
};

//Cuando hago recursividad, puedo usar el nombre de la variable (expression function)
//O puedo usar el nombre de la función definida dentro de la expression function

const saludarFlecha = (receptor, saludo='Hola') => {
  if(typeof receptor === 'string'){
    return `${saludo} ${receptor}`
  } else if (typeof receptor === 'object'){
    return saludarFlecha(`${receptor.nombre} ${receptor.apellido}`,saludo);
  }
}

console.log(saludar('David'));
console.log(saludar({nombre: 'David', apellido: 'Delgado'}));
console.log(saludarFlecha({nombre: 'David', apellido: 'Delgado'}));