/*- Crear una matriz de 3 x 4 
- Crear una funcion que suma todos los valores de la matriz que sean pares
- Crear una funcion que multiplique todos los valores de la matriz que sean multiplos de 5
- Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
la matriz


- Armá un array de 5 objetos, que cada uno de ellos tenga: nombre, edad, notas 
(array de 3 notas)
- Crear un algoritmo que ordene esos objetos por edad de forma ascendente
- Crear un algoritmo que ordene cada array de notas de forma descendente
- Crear un algoritmo que genere un nuevo array realizando un filtrado
- Agregar un id a cada objeto que inicie en 1 y sea secuencial*/

let matriz = [
    [4,2,5,6],
    [8,5,4,21],
    [6,8]
];

//Crear una funcion que sume todos los valores de la matriz que sean pares

function sumarPares(matrix){

    let suma = 0;

    for(let fila=0 ; fila<matrix.length ; fila++){

        for(let columna=0 ; columna<matrix[fila].length ; columna++){

            if(matrix[fila][columna] % 2 === 0){
                suma = suma + matrix[fila][columna];
                // suma += matrix[fila][columna];
            }
        }
    }
    return suma;
}

//console.log(sumarPares(matriz));


//Crear una funcion que multiplique todos los valores de la matriz que sean multiplos de 5

function multiplicarMultiplos(matrix){

    let multiplicacion = 1;

    for(let fila=0 ; fila<matrix.length ; fila++){

        for(let columna=0 ; columna<matrix[fila].length ; columna++){

            if(matrix[fila][columna] % 5 === 0){
                multiplicacion = multiplicacion * matrix[fila][columna];
                //suma *= matrix[fila][columna];
            }
        }
    }
    return multiplicacion;
}

//console.log(multiplicarMultiplos(matriz));


//Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
//la matriz

function arrayDeImpares(matrix){

    let nuevoArray = [];

    for(let fila=0 ; fila<matrix.length ; fila++){

        for(let columna=0 ; columna<matrix[fila].length ; columna++){

            if(matrix[fila][columna] % 2 !== 0){
                nuevoArray.push(matrix[fila][columna]);
            }
        }
    }
    return nuevoArray;
}

//console.log(arrayDeImpares(matriz));


//Realizar una funcion que reciba por parametro una matriz y retorne la suma de la fila 1

function sumaFila1(matrix){

    let suma=0;

    for(let i=0 ; i<matrix[1].length ; i++){
        suma += matrix[1][i];
    }

    return suma;
}

//console.log(sumaFila1(matriz));


//Armá un array de 3 objetos, que cada uno de ellos tenga: nombre, edad, notas 
//(array de 3 notas)

let estudiantes = [
    {
        nombre : "Pepe",
        edad : 45,
        notas : [8,4,9]
    },
    {
        nombre : "Juan",
        edad : 15,
        notas : [10,3,7]
    },
    {
        nombre : "Lau",
        edad : 30,
        notas : [6,7,8]
    }
]


//Crear un algoritmo que ordene esos objetos por edad de forma ascendente

function ordenarEdadAsc(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length - 1 ; j++) {

            if(arreglo[j].edad > arreglo[j+1].edad){

                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

//console.log(ordenarEdadAsc(estudiantes));


//Realizar una funcion que retorne un nuevo array con los objetos cuya edad sean mayor o igual 
//a 30

function filtrado(arreglo){

    let nuevoArray = [];

    for(let i=0 ; i<arreglo.length ; i++){

        if(arreglo[i].edad >= 30){
            nuevoArray.push(arreglo[i]);
        }
    }

    return nuevoArray;
}

//console.log(filtrado(estudiantes));



//Crear un algoritmo que ordene cada array de notas de forma descendente

function ordenarNotas(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){  //Objetos

        for(let j=0 ; j<arreglo[i].notas.length ; j++){  //Repetir

            for(let h=0 ; h<arreglo[i].notas.length - 1 ; h++){  //Recorrer notas

                if(arreglo[i].notas[h] > arreglo[i].notas[h+1]){

                    let aux = arreglo[i].notas[h];
                    arreglo[i].notas[h] = arreglo[i].notas[h+1];
                    arreglo[i].notas[h+1] = aux;
                }
            }
        }
    }
    return arreglo;
}

//console.log(ordenarNotas(estudiantes))


function calcularPromedio(arreglo){


    for(let i=0 ; i<arreglo.length ; i++){

        let suma=0;

        for(let j=0 ; j<arreglo[i].notas.length ; j++){
            suma += arreglo[i].notas[j];
        }

        arreglo[i].promedio = suma/arreglo[i].notas.length;
    }
    return arreglo;
}

console.log(calcularPromedio(estudiantes))