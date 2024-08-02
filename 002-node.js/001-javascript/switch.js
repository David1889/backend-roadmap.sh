let a = '1';

switch(a){
  case 1:
    console.log(`a es 1`);
    break;
  case 2:
    console.log(`a es 2`);
    break;
  case '1':
    console.log(`a es '1'`)
    break;
  default:
    console.log('No hay match')
    break;
}


//El case utiliza la igualdad estricta ===