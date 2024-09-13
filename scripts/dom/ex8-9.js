
// 8 ?
let text = document.querySelector("#far")
let span = document.querySelector("#output-text")
let button = document.querySelector("button")



button.addEventListener("click", () => {
  //console.log("click");
  let celcius = (text.value - 32) * 5 / 9
  span.innerHTML = `${text.value} F equals ${celcius.toFixed(1)} C`
} )

// 9 ?
let input = document.querySelector("#in")
let output = document.querySelector("#in")
let init = document.querySelector("#initial")
let final = document.querySelector("#final")
let button2 = document.querySelector("#button2")


button2.addEventListener("click", () => {
  //console.log("click");
  // ADD LOGIC
  
  //span.innerHTML = `${text.value} F equals ${celcius.toFixed(1)} C`
} )

/// t = the parameter of an arrow function 
ftoc = (t) => (t - 32) * 5 / 9
ctof = t => (t * 9 / 5) + 32
ctok = t => t + 273.15 
ktoc = t => t - 273.15
ftok = t => ctok(ftoc(t))
ktof = t => ctok(ktoc(t))

