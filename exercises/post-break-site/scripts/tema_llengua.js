
// TODO: FINISH THEME

let theme = document.querySelector("#theme")
let body = document.querySelector("body")
console.log("body", body);

console.log("body style", body.style);
console.log("body style backgroundColor", body.style.backgroundColor);
console.log(body.style.backgroundColor);


function setTheme(newTheme) {
  if (newTheme == "light") {
    localStorage.setItem("theme", newTheme)
    body.style.backgroundColor = 'rgb(250, 249, 248)';
    body.style.color = "black";
    console.log("body styles", body.style.backgroundColor
    );

    theme.innerHTML = "🌚"
  }
  else if (newTheme == "dark") {
    localStorage.setItem("theme", newTheme)
    body.style.backgroundColor = 'rgb(49, 46, 46)';
    body.style.color = "white";
    console.log("body styles", body.style.backgroundColor
    );


    theme.innerHTML = "🌞"
  }
}

// Check the theme AT PAGE LOAD 
if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme")=="dark") setTheme("dark")
  else setTheme("light")
}else setTheme("light")

// Change theme on click 
theme.addEventListener("click", () => {
  if (localStorage.getItem("theme")=="light") setTheme("dark")
  else setTheme("light")
})


// --------------------------------------------------------------------
let copy = {
  es: 
  [`La misión espacial del Apollo 11`,
    `Apolo 11 fue la quinta misión tripulada del Programa Apolo de los Estados Unidos y la primera de la historia en lograr que un ser humano llegara a la Luna. La nave Apolo de la misión se envió al espacio el 16 de julio de 1969, realizó su alunizaje el 20 de julio de ese mismo año y al día siguiente dos astronautas (Armstrong y Aldrin) se convirtieron en los primeros en caminar sobre la superficie lunar. El Apolo 11 fue impulsado por un cohete Saturno V desde la plataforma LC 39A y lanzado a las 13:32 UTC del complejo de cabo Kennedy, en Florida (EE. UU.). Oficialmente se conoció a la misión como AS-506. La misión fue un hito decisivo de la NASA contra el programa espacial de la Unión Soviética durante la carrera espacial y está considerada como uno de los momentos más significativos en la historia de la humanidad.`,
    `La tripulación del Apolo 11 estaba constituida por el comandante de la misión Neil A. Armstrong, de 38 años; Edwin E. Aldrin Jr., de 39 años y piloto del LEM, apodado Buzz; y Michael Collins, de 38 años y piloto del módulo de mando.`,
    `La denominación de las naves, privilegio del comandante, fue Eagle para el módulo lunar y Columbia para el módulo de mando.`,
    `El comandante Armstrong fue el primer ser humano que pisó la superficie del satélite terrestre el 21 de julio de 1969 a las 2:56 (hora internacional UTC) al sur del Mar de la Tranquilidad (Mare Tranquillitatis), seis horas y media después de haber alunizado. Este hito histórico se retransmitió a todo el planeta desde tres instalaciones de la red de MSFN ubicadadas estratégicamente alrededor del mundo: las instalaciones del Observatorio Parkes en Honeysuckle Creek en Camberra (Australia), la estación de seguimiento de Goldstone (California, EE. UU.) y las instalaciones de la red de MSFN de Fresnedillas de la Oliva, perteneciente al MDSCC en Robledo de Chavela (Madrid, España). Inicialmente, el paseo lunar iba a ser retransmitido a partir de la señal que llegase a la estación de seguimiento de Goldstone (California, EE. UU.), perteneciente a la Red del Espacio Profundo, pero la señal no era buena y se optó por la mejor ubicación de las instalaciones de Fresnedillas de la Oliva, que retransmitieron la llegada y los primeros minutos del paseo lunar y sirvieron de apoyo durante todo el viaje de ida y vuelta. El observatorio Parkes y el de Goldstone fueron utilizados de nuevo durante el resto del paseo lunar, según iba rotando la Tierra.`]
  ,
  cat: 
  [`La missió espacial de l'Apollo 11`,
    `La missió lunar nord-americana Apollo 11 va ser la primera a posar una persona a la superfície de la Lluna. Era la cinquena missió tripulada del programa Apollo.`,
    `La nau Apollo 11 va ser enviada a l'espai pel coet Saturn V des de Cap Canaveral (Florida, EUA). Es va enlairar el 16 de juliol de 1969, va arribar a la Lluna el 20 de juliol a les 20.17 UTC (21.17 CET, 14.17 CST) i va tornar a la Terra el 24 de juliol.`,
    `Quan l'Apollo 11 es va situar a l'òrbita lunar, Edwin E. «Buzz» Aldrin i Neil A. Armstrong es varen traslladar al mòdul lunar Eagle. Michael Collins va quedar-se a la nau donat suport a les maniobres del mòdul lunar. Quan Armstrong i Aldrin van acabar la seva feina a la superfície de la Lluna, van tornar a l'Eagle i van deixar la Lluna en vol vertical, fins a acoblar-se a la nau on els esperava Collins. Aleshores es van adreçar cap a la Terra. La nau Apollo 11 va caure a les aigües de l'oceà Pacífic, on va ser recuperada, prop de les illes Hawaii.`,
    `La missió va ser una fita decisiva de la programa espacial estatunidenc contra el programa espacial soviètic durant la cursa espacial i és considerada com un dels moments més significatius a la història de la humanitat. Va comptar amb la participació del bioquímic català Joan Oró.`]
    , 

  en: 
  [`Apollo 11 space mission`,
    `Apollo 11 was a spaceflight conducted by the United States from July 16 to July 24, 1969. It marked the first time in history that humans landed on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC. Aldrin joined him 19 minutes later, and they spent about two and a quarter hours together exploring the site they had named Tranquility Base upon landing.`,
    `Armstrong and Aldrin collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth as pilot Michael Collins flew the Command Module Columbia in lunar orbit, and were on the Moon's surface for 21 hours, 36 minutes, before lifting off to rejoin Columbia.`,
    `Apollo 11 was launched by a Saturn V rocket from Kennedy Space Center on Merritt Island, Florida, on July 16 at 13:32 UTC, and it was the fifth crewed mission of NASA's Apollo program. The Apollo spacecraft had three parts: a command module (CM) with a cabin for the three astronauts, the only part that returned to Earth; a service module (SM), which supported the command module with propulsion, electrical power, oxygen, and water; and a lunar module (LM) that had two stages—a descent stage for landing on the Moon and an ascent stage to place the astronauts back into lunar orbit.`,
    `After being sent to the Moon by the Saturn V's third stage, the astronauts separated the spacecraft from it and traveled for three days until they entered lunar orbit. Armstrong and Aldrin then moved into Eagle and landed in the Sea of Tranquility on July 20. The astronauts used Eagle's ascent stage to lift off from the lunar surface and rejoin Collins in the command module. They jettisoned Eagle before they performed the maneuvers that propelled Columbia out of the last of its 30 lunar orbits onto a trajectory back to Earth. They returned to Earth and splashed down in the Pacific Ocean on July 24 after more than eight days in space.`]
}


console.log(copy);

// TODO: Improve language changer (check Omars code) 

let buttons = {
  cat: document.querySelector("#cat"),
  es: document.querySelector("#es"),
  en: document.querySelector("#en")
}

// let cat = document.querySelector("#cat")
// let es = document.querySelector("#es")
// let en = document.querySelector("#en")

let content = document.querySelectorAll(".trans")
console.log(content);


// Check which language is set in local storage and change the language AT PAGE LOAD
if (localStorage.getItem("lang")) {
  if (localStorage.getItem("lang") == "es") setLanguage("es")
  else if (localStorage.getItem("lang") == "en") setLanguage("en")
  else if (localStorage.getItem("lang") == "cat") setLanguage("cat")
}
else setLanguage("cat")

function setLanguage(lang) {
  for (let i = 0; i < content.length; i++) {
    content[i].innerHTML = copy[lang][i]
  }

  for (const key in buttons) {
    console.log(key);
    
    // access classes of the buttons and add a class "active"
    if (key == lang) buttons[key].classList.add("active")
    // remove class active from other button
    else buttons[key].classList.remove("active")
    
  }

  localStorage.setItem("lang", lang)
}


cat.addEventListener("click", () => {
  setLanguage("cat")
  // code REPLACED BY setLanguage
  // console.log("Click en CAT");
  // for (let i = 0; i < content.length; i++) {
  //   content[i].innerHTML = copy["cat"][i]
  // }
  // localStorage.setItem("lang", "cat")
})

en.addEventListener("click", () => {
  setLanguage("en")
})


// Make all the languages equal to this one
es.addEventListener("click", () => {
  setLanguage("es")
})



// --------------------------------------------------------------------



