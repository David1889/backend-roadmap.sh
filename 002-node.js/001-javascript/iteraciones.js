const miArray = [1,'hola',true,false,'chau',1889];

//Recorrer un array con FOR
for(let i=0; i < miArray.length; i++){
  console.log(miArray[i]);
}

//Recorrer un aray con forEach

miArray.forEach((element, i) => {
  console.log(`El elemento en la posicion ${i} es ${element} de tipo ${typeof element}`)
}
);