
// TODO: FUNCTIONS
console.log("FUNCTIONS");

// Function that returns a string
function saludar() {
  console.log("hola, clase!");
}

saludar();


// Function with 1 parameter that logs a string to the console
function saludarPersonaLog(nom){
  console.log(`hola, ${nom}!`);
  // console.log("hola", nom, "!");
  // console.log("Hola");
}

saludarPersonaLog("David")
saludarPersonaLog("Gonzalo")
saludarPersonaLog("Carlos")


// Function with 1 parameter that returns a string
function saludarPersonaReturn(nom){
  return `hola, ${nom}`
}

console.log( saludarPersonaReturn("Alberto") );
console.log( saludarPersonaReturn("Myrella") );
console.log( saludarPersonaReturn("Xavi") );


// Function that takes a DNI and returns an anonymised version of the DNI that so that only displays 3 characters
function anonDNI(dni){
  return dni.slice(4).padStart(dni.length, "X").slice(0,-2).padEnd(dni.length, "X"); 
}

console.log( anonDNI("12345678A") );


// Function that takes a DNI and returns an anonymised version of the DNI that so that only displays 3 characters
dni = "12345678A"

function anonDNI2(){
  dni = dni.slice(4).padStart(dni.length, "X").slice(0,-2).padEnd(dni.length, "X"); 
}

anonDNI2();
console.log(dni);

// a function that takes an array of 2 elements and return the array in revered order

function reverseArray([a, b]) {
  return [b, a]
}

console.log(reverseArray([1, 2]) );

myArr = [1, 2];
revArray = reverseArray(myArr);
console.log(revArray);

gatigos = ["😺", "🐶"]
console.log( reverseArray(gatigos) );


