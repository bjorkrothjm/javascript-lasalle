
let cat = document.querySelector("#cat")
let es = document.querySelector("#es")
let en = document.querySelector("#en")

let content = document.querySelectorAll(".content")
console.log(content);

// let content = documnent.querySelectorAll(".trans")

// USE
// if (localStorage.getItem("lang")) {
//   if (localStorage.getItem("lang") == "es") setLanguage("es")
//   else if (localStorage.getItem("lang")== "en") setLanguage("en")
//   else  setLanguage("cat")
// }

// ADD
function setLanguage(lang) {


}


cat.addEventListener("click", () => {
  console.log("Click en CAT");
  for (let i = 0; i < content.length; i++) {
    console.log("Hi");
    
  //content[i].textContent = copy.cat[i]
  }
  
})


// Make all the languages equal to this one
es.addEventListener("click", () => {
  console.log("Click en ES");
  console.log(content.length);

  // The below requuires the content to be in 
  // for (let i = 0; i < content.length; i++) {
  //   content[i].textContent = copy.cat[i]
  // }

  // Switching between the ids to use (change so that the lang on top is the same as you add the event listener to)
  es.classList.add("active")
  en.classList.remove("active)")
  cat.classList.remove("active")

  // Setting the language in local storage so it does not change between sessions
  //localStorage.setItem("lang", "en")
})

en.addEventListener("click", () => {
  console.log("Click en EN");
})

let copy = {
  es: [ `
    <p>
    Apolo 11 fue la quinta misión tripulada del Programa Apolo de los Estados Unidos y la primera de la historia en lograr que un ser humano llegara a la Luna. La nave Apolo de la misión se envió al espacio el 16 de julio de 1969, realizó su alunizaje el 20 de julio de ese mismo año y al día siguiente dos astronautas (Armstrong y Aldrin) se convirtieron en los primeros en caminar sobre la superficie lunar. 
    </p>`,
    
    `<p>
    El Apolo 11 fue impulsado por un cohete Saturno V desde la plataforma LC 39A y lanzado a las 13:32 UTC del complejo de cabo Kennedy, en Florida (EE. UU.). Oficialmente se conoció a la misión como AS-506. La misión fue un hito decisivo de la NASA contra el programa espacial de la Unión Soviética durante la carrera espacial y está considerada como uno de los momentos más significativos en la historia de la humanidad.
    </p>`,
      
    `<p>
      La tripulación del Apolo 11 estaba constituida por el comandante de la misión Neil A. Armstrong, de 38 años; Edwin E. Aldrin Jr., de 39 años y piloto del LEM, apodado Buzz; y Michael Collins, de 38 años y piloto del módulo de mando.
    </p>`,

    `<p>
    La denominación de las naves, privilegio del comandante, fue Eagle para el módulo lunar y Columbia para el módulo de mando.
    </p>`,
    
  ],
  cat: [`
    <p>
    La missió lunar nord-americana Apollo 11 va ser la primera a posar una persona a la superfície de la Lluna. Era la cinquena missió tripulada del programa Apollo.[2]
    </p>`,

    `<p>
    La nau Apollo 11 va ser enviada a l'espai pel coet Saturn V des de Cap Canaveral (Florida, EUA). Es va enlairar el 16 de juliol de 1969, va arribar a la Lluna el 20 de juliol a les 20.17 UTC (21.17 CET, 14.17 CST) i va tornar a la Terra el 24 de juliol.
    </p>`,

    `<p>
    Quan l'Apollo 11 es va situar a l'òrbita lunar, Edwin E. «Buzz» Aldrin i Neil A. Armstrong es varen traslladar al mòdul lunar Eagle. Michael Collins va quedar-se a la nau donat suport a les maniobres del mòdul lunar. Quan Armstrong i Aldrin van acabar la seva feina a la superfície de la Lluna, van tornar a l'Eagle i van deixar la Lluna en vol vertical, fins a acoblar-se a la nau on els esperava Collins. Aleshores es van adreçar cap a la Terra. La nau Apollo 11 va caure a les aigües de l'oceà Pacífic, on va ser recuperada, prop de les illes Hawaii.
    </p>`,

    `<p>
    La missió va ser una fita decisiva de la programa espacial estatunidenc contra el programa espacial soviètic durant la cursa espacial i és considerada com un dels moments més significatius a la història de la humanitat. Va comptar amb la participació del bioquímic català Joan Oró.[3]
    </p>
    `
  ]
    ,
  en: [ `
    <p>
    Apollo 11 was a spaceflight conducted by the United States from July 16 to July 24, 1969. It marked the first time in history that humans landed on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC. Aldrin joined him 19 minutes later, and they spent about two and a quarter hours together exploring the site they had named Tranquility Base upon landing.    
    </p>`,
    
    `<p>Armstrong and Aldrin collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth as pilot Michael Collins flew the Command Module Columbia in lunar orbit, and were on the Moon's surface for 21 hours, 36 minutes, before lifting off to rejoin Columbia.
    </p>`,

    `<p>
    Apollo 11 was launched by a Saturn V rocket from Kennedy Space Center on Merritt Island, Florida, on July 16 at 13:32 UTC, and it was the fifth crewed mission of NASA's Apollo program. The Apollo spacecraft had three parts: a command module (CM) with a cabin for the three astronauts, the only part that returned to Earth; a service module (SM), which supported the command module with propulsion, electrical power, oxygen, and water; and a lunar module (LM) that had two stages—a descent stage for landing on the Moon and an ascent stage to place the astronauts back into lunar orbit.
    </p>`,

    `<p>
    After being sent to the Moon by the Saturn V's third stage, the astronauts separated the spacecraft from it and traveled for three days until they entered lunar orbit. Armstrong and Aldrin then moved into Eagle and landed in the Sea of Tranquility on July 20. The astronauts used Eagle's ascent stage to lift off from the lunar surface and rejoin Collins in the command module. They jettisoned Eagle before they performed the maneuvers that propelled Columbia out of the last of its 30 lunar orbits onto a trajectory back to Earth.[9] They returned to Earth and splashed down in the Pacific Ocean on July 24 after more than eight days in space.
    </p>`
  ]
}
