let array = [1, true, 'story'];

console.log(`El array contiene ${array}`);
console.log(`El primer elemento es ${array[0]}`);
console.log(`El segundo elemento es ${array.at(1)}`);
console.log(`El ultimo elemento es ${array.at(-1)}`);
console.log(`La longitud del array es ${array.length}`);

// ${} Sirve para mostrar expresiones JS y es convertido en string

//Metodos para manipular arrays
// at() :> Devuelve el elemento en la posicion indicada
// push() :> Agrega elemento al final
// pop() :> Remueve el ultimo elemento del array
// unshift() :> Agrega elemento al principio del aray
// shift :> Remueve primer elemento del array


//Metodos basados en funciones y expresiones
//find, findLast, findIndex, findLastIndex e indexOf: buscar elementos o sus posiciones en el array
//filter: obtener un subconjunto de los elementos en base a una función
//map: crea un nuevo array con el resultado de aplicar la función designada a cada elemento
//reduce: permite calcular un resultado al aplicar una función de reducción al array
//sort: ordenar los elementos del array
//reverse: revertir el orden de los elementos del array