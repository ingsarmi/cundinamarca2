console.log("Examen parcial de Programación Imperativa");
console.log("Sergio Sarmiento","sergiosarmient0ing@gmail.com");

//Punto 1
//Declarar tres variables y asignarles un número entero a las tres.
let var1 = 3;
let var2 = 2;
let var3 = 1;
//Variables auxiliares
let var4 = 0;
let espar = ""
let var5 = 0;
console.log("Ejercicio 1:");
//Crear una función que reciba tres parámetros
function punto1(var1, var2, var3){
    //Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
    if (var1 > var2)
    {
        var4 = var2 * var3;
        console.log("Punto 2 A.",var4)
    }
    //Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
    if (var2 % 2 == 0) {
        espar = "espar";
        console.log("Punto 2 B.",espar + "=" + var2);
    }
    //Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
    var5=var1+var2+var3;
    if (var5 % 3 == 0){
        console.log("Punto 2 C. ","la suma de estos tres números es múltiplo de 3");
    }
}
punto1(var1, var2, var3);

//Punto 2
//Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
//nombre 
//apellido
//edad
//estaEmpleado (bool)

let arreglo = [
    {
        nombre : "SERGIO",
        apellido : "SARMIENTO",
        edad : 27,
        estaEmpleado : true
    }
]
function empleado1(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){
        //Punto A
    if(arreglo[i].edad>18 && arreglo[i].estaEmpleado == true){
        console.log(arreglo[i].nombre,arreglo[i].apellido,"está empleado y es mayor de edad");
    }
        //Punto B
    if(arreglo[i].edad>18 && arreglo[i].estaEmpleado == false){
        console.log(arreglo[i].nombre,arreglo[i].apellido,"NO está empleado y es mayor de edad");
    }
        //Punto C
    if(arreglo[i].edad<18 && arreglo[i].estaEmpleado == false){
        console.log(arreglo[i].nombre,arreglo[i].apellido,"NO está empleado y NO es mayor de edad");
    }
    }
    return arreglo;
}
console.log("Ejercicio 2:");
let nuevoArreglo4 = empleado1(arreglo);


//Ejercicio 3

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

//Eliminar el último elemento del arreglo usando un método de arrays.
function eliminarElemento(autos){
    autos.pop()
}

console.log("Ejercicio 3:");
eliminarElemento(autos);
console.log("Punto 1","Arreglo Eliminando",autos);

//Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.
let autosNuevos=[];
function agregarelemento(autos){
    for(i=0;i<autos.length;i++){
        if (autos[i].anio > 2019) {
            autosNuevos[i]=autos[i];
        }
    }   
    return autos;
}

agregarelemento(autos);
console.log("Punto 2","Arreglo autosNuevos",autosNuevos);