console.log("%cCondicionals", "font-weight: bold");

console.log("if , else if , else");


text = prompt("Introduce some text: ")


if (text.length > 20) {
  console.log("Se ha cumplido mi condición");
}

firstName = prompt("Introduce your first name: ");

if (firstName == "Omar") {
  console.log("Hola Omar");
} else {
  console.log("No eres Omar... Hola, desconocido!");
}

// if (firstName == "Omar") console.log("Hola, Omar!");
// else console.log("No eres Omar... Hola, desconocido!");

animal = "perro"
color = "verde"

if (animal == "perro") {
  console.log("Sacalo a pasear");
} else if (animal = "gato") {
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

animals = ["perro", "jerbo", "caballo", "pez"]

console.log("if , else if , else + Array methods");

if (animals.includes("perro") && color == "verde") console.log("Qué raro eres!");
if (animals.includes("gato")) console.log("Limpia el arenero");
if (animals.includes("perro")) console.log("Sácalo a pasear");
if (animals.includes("caballo")) console.log("Sal a cabalgar");

// short hand
if (animal == "pez") console.log("Ponle de comer"); 
else console.log("Pobrecito, no tienes pez");

console.log("switch - case + default");

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
      break;
}

// * Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !
console.log("Boolean operators: ==, ===, <, >, <=, >=, !=, ||, &&, ! ");

console.log(1 == "1"); // true
console.log(1 === "1"); // false 

username = prompt("Introduce your username")

if (!username) {
  console.log("You are not logged in");
} else {
  console.log("Welcome ", username);
}


// -------------------------------- 
console.log("TODO 1");
// TODO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)
// TODO: create a function that asks for an animal and gives you instructions on how to take care of it (with a corresponding emoji)

function petCare() {
  let pet = prompt("What animal are you in need of advice for?")
  if (pet == "dog") {
    console.log("Take it out for a walk 🦮");
  } else if (pet == "cat") {
    console.log("Clean the catsand 😽");
  } else {
    console.log("Sorry we are not familiar with that animal");
  }
}
petCare();

console.log("TODO 2");
// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no
// TODO: createa a function that asks for your complete name and tells you if you have a name or not 

function nombreCompuestoChecker() {
  let firstName = prompt("Enter your first name: ") 
  if (firstName.includes(" ")){
    console.log("You have a nombre compuesto", firstName, "!!!");
  } else {
    console.log("You don't have a nombre compuesto, but no need to be sad about it!");
  }
}

nombreCompuestoChecker();

console.log("TODO 3");
// TODO: crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)
// Create a function that asks 2 numbers and 1 symbol and then makes the corresponding mathematical operation

function mathOperation() {
  let firstNumb = prompt("Enter a number: ")
  let secondNumb = prompt("Enter another number: ")
  let operation = prompt("Enter a sybol for a mathematical operation (+, -, *, /, %): ");
  if (["+", "-", "*", "/", "%"].includes(operation) ) {
    console.log(operation);
    try {
      parseInt(firstNumb)
      parseInt(secondNumb)  

      let result = eval( firstNumb.concat(operation).concat(secondNumb) ); 
      console.log(firstNumb + " " + operation + " " + secondNumb + " = " + result);

    } catch(error) {
      console.log("Enter numbers, not letters or other symbols.");

      // console.error(error);
    }
    
  } 
  else {
    console.log("Enter one of the following mathematical operations +, -, *, /, % " );
  }

}

// mathOperation()

// 2 ----------------- 2 ---- NOT YET WORKING

function mathOperation2() {
  let firstNumb = prompt("Enter a number: ")
  numberTester(firstNumb);
  
  let secondNumb = prompt("Enter another number: ")
  numberTester(secondNumb);
 
  let operation = prompt("Enter a sybol for a mathematical operation (+, -, *, /, %): ");
  if (["+", "-", "*", "/", "%"].includes(operation) ) {
    console.log(operation);
    
    let result = eval( firstNumb.concat(operation).concat(secondNumb) ); 
    console.log(firstNumb + " " + operation + " " + secondNumb + " = " + result);
  } else {
    console.log("Enter one of the following mathematical operations +, -, *, /, % " );
  }

  function numberTester(numb){
    let testResult = isNaN(parseInt(numb));
    console.log(testResult);
    if ( testResult == true) {
      console.log("Enter a number, not letters or other symbols.");
      return;
    }
    else {
      console.log("Passed number check");
    }

  }
}

console.log("mathOperation2");
mathOperation2()


console.log("TODO 4");
// TODO: crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"
// TODO: create a function that asks for a a shirt, pant, hat, what color and size (S, M, L, XL) and that shows in the console a summary of your order. Ex: "You ordered a blue 🔵 shirt 👕 of size XL"

function clothOrder(){
  prompt("What type of ")
}



// -------------------------------- 






// if (!user) {
//     console.log("No estas logueado!");
// } else {
//     console.log("Bienvenido, " + user);
// }
