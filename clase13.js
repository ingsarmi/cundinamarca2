//Crear un array llamado misMascotas
let misMascotas = [
  {
    nombre : "Firu",
    raza : "callejero",
    edad : 2,
    sonido : "Guaf",
    ladrido : function(){
      return this.sonido + " " + this.sonido;
    }
  },
  {
    nombre : "Michi",
    raza : "callejero",
    edad : 8,
    sonido : "Miau",
    maullar : function(){
      return this.sonido + " " + this.sonido;
    }
  },
    {
      nombre : "Loro",
      raza : "callejero",
      edad : 12,
      sonido : "pepepepepepe",
      ladrido : function(){
        return this.sonido + " " + this.sonido;
      }
    }
];

/*Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
nombre
raza
edad 
sonido
un método que nos retorne ese sonido 2 veces
*/


/*Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.*/

function aumentarEdad(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){
    //arreglo[i].edad = arreglo[i].edad + 1;

    arreglo[i].edad += 1;

    //arreglo[i].edad++;
  }

  return arreglo;
}

//let nuevoArreglo = aumentarEdad(misMascotas);
//console.log(nuevoArreglo);


/*Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/

function aumentarEdad2(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){

    if(arreglo[i].edad < 6){
      arreglo[i].edad += 1;
    }
    else if(arreglo[i].edad >= 6 && arreglo[i].edad <= 10){
      arreglo[i].edad += 2;
    }
    else{
      let mitad = arreglo[i].edad / 2;
      arreglo[i].edad = arreglo[i].edad + mitad;
    }
  }
  return arreglo;
}

//let nuevoArreglo2 = aumentarEdad2(misMascotas);
//console.log(nuevoArreglo2);

//Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, 
//que será secuencial y que empezará en 1.


function generarId(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){
    arreglo[i].identificador = i+1;
  }
  return arreglo;
}

//let nuevoArreglo3 = generarId(misMascotas);
//console.log(nuevoArreglo3)


//Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales

function eliminarRaza(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){
    delete arreglo[i].raza
  }

  return arreglo;
}

let nuevoArrelo4 = generarId(misMascotas);
console.log(nuevoArrelo4)








