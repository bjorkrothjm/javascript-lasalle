
let text = document.querySelector("#name")
let span = document.querySelector("#output-text")
let button = document.querySelector("button")


button.addEventListener("click", () => {
  let name = document.querySelector('input[type="radio]:checked')
  span.innerHTML = `Hola ${name.dataset-pro} ${text.value}`
} )