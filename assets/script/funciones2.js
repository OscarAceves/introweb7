//Funciones

//Programa para hacer limonada

function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " limones");
    let jugoExtraido = cantidad * 10; //Considerando obtener 10 ml de jugo por cada limón
    console.log("se obtuvo " + jugoExtraido + "ml de jugo de limón");
    return jugoExtraido; //return
}

//Función para mezclar el jugo de limón con agua y azucar.
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log("Mezclando " + cantidadDeJugo + "ml de jugo de limón con " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gr de azucar");
}

//Funcion para servir limonada
function servirLimonada(){
    console.log("Sirviendo limonada en un vaso");
    vasoDeLimonada = true;
}

//Función principal para preparar la Limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limón, de agua y de azucar
    servirLimonada();
}

//Llamamos a la función principal para preparal limonada
var vasoDeLimonada = false;
prepararLimonada(5); //Se llama la función

/*Crear un programa donde verifiquemos un proceso dentro de nuestro consultorio dental.*/
