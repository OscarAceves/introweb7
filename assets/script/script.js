alert ("Hola...");
// Colocar siempre al final de cada instrucción el simbolo ";"
/*Para realizar comentarios de pueden usar los simbolos "//" y "/*" */

var frasco = "pastillas";
var frasco = "pasitas";
var frasco = "shampoo";


console.log(frasco);

/*Tipos de datos: Primitivos y no primitivos

string
number
boolean
undefined
null
symbol
object (no primitivo)

*/

//string es una cadena de texto, siempre debe ir entre comillas simples o dobles
//var vaso = "leche";

//number  no lleva comillas, se refiere a un dato numérico, se puede usar para operaciones
//var edad = 31;

//boolean solo tiene 2 salidas: true / false
//var cuentasPremium = false;

//undefined es un tipo de dato que existe, pero no está definido o inicializado
// var proximaCita =;

//null es un valor que no tenemos, pero está declarado
// var asistenciaInvitado = null;


var edad = "31";
var peso = 66;

console.log(typeof(edad));

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato contiene la variable.

//Al declarar una variable con var tiene mayor alcance (la convierte en variable global) y puede ser leído de cualquier punto del código.

//Let es usada en parte segmentadas del código (variable de alcance local), solo dentro de un bloque de código.

//const es una constante, es decir que contiene un valor que no se modifica

var pesoTexto = peso.toString();
console.log((pesoTexto.toString));
console.log(typeof(pesoTexto))

var edadNumero = parseInt(edad);
console.log(edadNumero);
console.log(typeof(edadNumero));




