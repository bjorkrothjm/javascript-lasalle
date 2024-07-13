console.log("%cCondicionals", "font-weight: bold");


text = prompt("Introdueix el text")

if (text.length > 20) {
    console.log("Se ha cumplido mi condición!");
}

nom = prompt("Introdueix el teu nom")

if (nom == "Omar") console.log("Hola, Omar!");
else console.log("No eres Omar... Hola, desconocido!");

/* 
if (nom == "Omar") {
    console.log("Hola, Omar!");
} else {
    console.log("No eres Omar... Hola, desconocido!");
} */

animal = "perro"
color = "verde"

if (animal == "perro") {
    console.log("Sácalo a pasear");
} else if(animal == "gato") {
    console.log("Limpia el arenero");
} else if (animal == "perro" && color == "verde") { // aquí no llega porque la primera condicion ya es true
    console.log("Qué raro eres!");
} else if (animal == "caballo") {
    console.log("Sal a cabalgar");
} else if (animal == "pez") {
    console.log("Ponle de comer");
} else {
    console.log("Pobrecito, no tienes ni gato ni perro ni caballo ni pez");
}

if (animal == "perro" || animal == "gato") console.log("Eres una básica");
// ! if (animal == "perro" || "gato") console.log("Eres una básica"); ERROR DE CONDICIÓN

animals = ["perro", "jerbo", "caballo", "pez"]

if (animals.includes("perro") && color == "verde") console.log("Qué raro eres!");
if (animals.includes("gato")) console.log("Limpia el arenero");
if (animals.includes("perro")) console.log("Sácalo a pasear");
if (animals.includes("caballo")) console.log("Sal a cabalgar");

if (animal == "pez") console.log("Ponle de comer"); 
else console.log("Pobrecito, no tienes pez");

personas = 4

switch (personas) {
    case 1:
        console.log("No aceptamos reservas para uno");
        break;
    case 2:
        console.log("Buenas noches, parejita");
        break;
    case 3:
        console.log("Hehehe sois multitud");
        break;
    case 4:
        console.log("¿Cita doble?");
        break;
    case 5:
        console.log("¡¡Cuánta gente!!");
        break;
    default:
        console.log("Eso no es un número aceptable");
        break;
}

// * Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !

console.log(1 == "1");
console.log(1 === "1");

user = prompt("Introdueix el teu nom d'usuari")

if (!user) {
    console.log("No estas logueado!");
} else {
    console.log("Bienvenido, " + user);
}

// TODO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)

// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

// TODO: crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)