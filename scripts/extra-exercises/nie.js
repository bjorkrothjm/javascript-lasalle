
let button = document.querySelector("#button")
let text = document.querySelector("#nie")
let span = document.querySelector("#output")

console.log(button);
console.log(text);
console.log(span);


button.addEventListener("click", () => {


})

button.addEventListener("click", () => {

  // body.innerHTML += `<span>Hola ${text.value}</span>` // - this only works once 
  
  span.innerHTML += `Hola ${text.value}`;
  console.log(`Hola ${text.value}`);
})



// lettras = "TRWAGMYFPDXBNJZSQVLCKE"

// function validateDNI(dni) {
//   if (dni.length != 9) {
//     return false;
//   }
//   let numero = dni.substring(0, 8);
//   let letra = dni.substring(8,9)
//   let resto = numero % 23;
//   let letraCorrecta = letras.charAt(resto)

//   console.log("The correct letter is:" + letraCorrecta);
//   return letra.toUpperCase() == letraCorrecta;

// }


// let nie = "12345678"


// let control = nie % 23

// console.log(control);