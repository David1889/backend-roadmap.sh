const miArray = ['Central', 1889, true, undefined, 'Deivid'];

//Creo la función y la invoco en el forEach
function mostrar(element) {
  console.log(element);
}
  //forEach invoca la función mostrar y le manda el elemento
miArray.forEach(mostrar);

//Creo la función dentro del forEach

miArray.forEach(function(element){
  console.log(element);
});

//Arrow function

miArray.forEach((element) => console.log(element));