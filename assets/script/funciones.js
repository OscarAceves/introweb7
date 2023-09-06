//FUNCIONES
/* 
Una funcion es un bloque de código que realiza una tarea específica cuando se le llama

Cada función de JavaScript es un objeto function
*/


function saludar(){
    console.log("Hola, soy una función");
}

saludar();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//DECLARAR FUNCIONES
/**
 * La palabra reservada "function" que indica que estamos definiendo una fuinción
 * El nombre de la función, dependiendo de la acción a realizar.
 * Un par de parentesis () despues del nombre. Puede contener parámetros. En este caso no tenemos ninguno.
 * Seguido de un juego de llaves para cerrar el bloque de código.
 * Dependiendo de las instrucciones dentro del cuerpo de la función y del propósito de la misma, determina si la función retorna un valor.
 */



//Llamamos una función y vamos a almacenar un resultado

function suma(a,b){
    return a + b;
}
var resultado = suma(5,3)//Almacenar funcion en una variable
console.log(suma); //función
console.log(resultado);

/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */


//Función que muestre un mensaje en la consola

function saludar(nombre){
    console.log("Hola, " + nombre + "!");
}

//Llamamos a la funcion "saludar" a alguien
saludar("Oscar");//imprime el saludo

/*
  La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. 
*/ 



//Hoisting

/**
 * Es fundamental en el entendimiento de la forma en que se jeecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
 
 * Puede invocar una funcion antes de siquiera declararla
*/

console.log(miVariable); //No da error, pero imprime undefined

var miVariable = 10;
//scope = Alcance. Hace referencia al alcance de una variable en nuestro código de JS

/**
 * GLOBAL: Quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código
 * var: no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.
 * let: es preferible e incluso más segura de utilizar porque además de funcionar de manera global, también puede ser utilizada dr manera local.
 * const: se refiere a la palabra constante, esto quiere decir que su valor no puede ser reasignado.
*/


//Variable local

function funcionConVariableLocal(){
    var mensaje = "Esta es una variable local";
    console.log(mensaje);
}
funcionConVariableLocal();
// var mensaje = "Hola";
// console.log(mensaje);//Si descomentamos este segmento, cuando se llama a imprimir el mensaje que está dentro de la función dará error porque esa variable solo existe dentro de la variable.
/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */


//Variable Global

var mensajeGlobal = "Esta es una variable Global"

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);
}
funcionConVariableGlobal();//La estamos llamando

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */




////////////////////////////////////
// FUNCIONES ANONIMAS
///////////////////////////////////

/*Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.
*La diferencia principal en estas funciones es que se declaran sin un nombre
*/

// function(){
//     console.log("Hola todos");
// }
const saludo = function(){
    console.log("hola todos");
}
saludo();



////////////////////////////////////
// FUNCIONES FLECHA
///////////////////////////////////

/**
 * Es una forma más concisa de definir funciones anónimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
 * Basicamente se trata de reemplazar la palabra function y añadir => antes de abrir las llaves({}).
 */

const resta = (a,b) => a - b ;
/**
 * Esta función flecha es una versión más corta de:
 * const resta = function (a,b){
 * return a - b;
 * }
 */
console.log (resta(5,3));