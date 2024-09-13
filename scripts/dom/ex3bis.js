
let text = document.querySelector("#name")
let body = document.querySelector("body")
let span = document.querySelector("#saludo")

let text2 = document.querySelector("#name2")
let span2 = document.querySelector("#saludo2")


text.addEventListener("change", () => {
  span.innerHTML += `Hola ${text.value}`;
  console.log(`Hola ${text.value}`);
})

text2.addEventListener("keyup", (event) => {
  console.log(event.key);

    span2.innerHTML += `Hola ${text2.value}`;
})