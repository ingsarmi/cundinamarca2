console.log("Examen Final de Programación Imperativa");
console.log("Sergio Sarmiento","sergiosarmient0ing@gmail.com");

let trabajos = [
    {
        nombre : "Psicologia",
        cantHorasDiarias : 6
    },
    {
        nombre : "Abogacia",
        cantHorasDiarias : 5
    },
    {
        nombre : "Programación",
        cantHorasDiarias : 8
    },
    {
        nombre : "Docente",
        cantHorasDiarias : 3
    }
]
/* Realizar una función que reciba por parámetro el array de objetos y retorne 
un nuevo array con los objetos cuya cantidad de horas diarias sea mayor o igual a 6*/

function CntHorasDiarias(trabajos){

    let nuevoArray = [];

    for(let i=0 ; i<trabajos.length ; i++){

        if(trabajos[i].cantHorasDiarias >= 6){
            nuevoArray.push(trabajos[i]);
        }
    }

    return nuevoArray;
}
console.log("Ejercicio 1:");
console.log(CntHorasDiarias(trabajos));

/* Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 
y lo ordene de menor a mayor según la cantHorasDiarias utilizando el algoritmo de ordenamiento Bubble Sort. 
 */

function ordenarcantHoras(trabajos){

    for(let i=0 ; i<trabajos.length ; i++){

        for(let j=0 ; j<trabajos.length - 1 ; j++) {

            if(trabajos[j].cantHorasDiarias > trabajos[j+1].cantHorasDiarias){

                let aux = trabajos[j];
                trabajos[j] = trabajos[j+1];
                trabajos[j+1] = aux;
            }
        }
    }
    return trabajos;
}

console.log("Ejercicio 2:");
console.log(ordenarcantHoras(trabajos))

/* Realizar una función que reciba por parámetro la matriz y retorne la multiplicación entre todos los elementos de la fila 1. */


let matriz = [
    [1,2,3,4],
    [2,3,4,1],
    [3,4,1,2],
    [4,3,2,1]
]

function sumaFila1(matriz){

    let mul=1;

    for(let i=0 ; i<matriz[1].length ; i++){
        mul = mul * matriz[1][i];
    }

    return mul;
}

console.log("Ejercicio 1:");
console.log("a:");
console.log(sumaFila1(matriz)); 

/* Crear una función que reciba por parámetro la matriz y retorne la suma de todos los elementos que sean pares. */
function sumarPares(matriz){

    let suma = 0;

    for(let fila=0 ; fila<matriz.length ; fila++){

        for(let columna=0 ; columna<matriz[fila].length ; columna++){

            if(matriz[fila][columna] % 2 === 0){
                suma = suma + matriz[fila][columna];
                // suma += matrix[fila][columna];
            }
        }
    }
    return suma;
}
console.log("b:");
console.log(sumarPares(matriz));