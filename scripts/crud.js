
const server = "https://pruebasalle-a1814-default-rtdb.europe-west1.firebasedatabase.app/";
const project = "johan-bjorkroth/"
const database = "frases"

const url = server + project + database + ".json"

console.log(url);



const sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hi!");
  let frase = document.querySelector("#my-text")
  console.log(frase);

  postFrase(frase)
})
//showFrases()
getDB();


async function getDB() {
  res = await fetch(url);
  res = await res.json()
  console.log(res);
}



async function showFrases() {
  let cont = document.querySelector(".frases");

  try {
    res = await fetch(url)
    res = await res.json();
    console.log(res);

    for (const id in res) {
      console.log(id);
      console.log(res[id]);
      const frase = res[id];
      showFrase(frase.date, frase.phrase, id)
    }

  }
  catch (error) {
    console.log(error);
  }
}


function showFrase(date, frase, id) {
  let cont = document.querySelector(".frases");

  cont.innerHTML += `<div class="frase" id="${id}">
          <p class="date">${date}</p>
          <p>${frase}</p>
          <div class="links">
            <a href="" class="mod">Modificar</a>
            <a href="" class="del">Eliminar</a>
          </div>
        </div>`

}

async function postFrase(frase) {
  log(frase)
  let fetcha = new Date();
  try {
    res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        date: fetcha,
        phrase: frase
      })
    })
    res = await res.json()
    console.log(res);
    
  }
  catch(error){
    console.log(error);
  }
  
}



