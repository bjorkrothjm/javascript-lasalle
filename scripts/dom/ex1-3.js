
let button = document.querySelector("button")
let text = document.querySelector("#name")
let body = document.querySelector("body")
let span = document.querySelector("span")

button.addEventListener("click", () => {

  // body.innerHTML += `<span>Hola ${text.value}</span>` // - this only works once 
  
  span.innerHTML += `Hola ${text.value}`;
  console.log(`Hola ${text.value}`);
})