
// 
getPokemon(6);

async function getPokemon(num) {
  
  // Fetch pokemon from the api - using "then"
  //let num = Math.floor(151 * Math.random() +1)
  // fetch("https://pokeapi.co/api/v2/pokemon/" + num)
  // .then(res => res.json())
  // .then(res => {
  //   console.log(res)
  //   console.log(res.types[0].type.name)
  // });

  // FETCH + SHOW 
  for (i = 0; i < num; i++) {
    const aPokemon = await fetchPokemon()
    console.log(aPokemon);
    
    showPokemon(aPokemon)
  }
}
  
  
async function fetchPokemon() {
  let num = Math.floor(151 * Math.random() +1)
  console.log(num);

  try {
    apiCallPromise = await fetch("https://pokeapi.co/api/v2/pokemon/" + num)
    const apiCallObject = await apiCallPromise.json();
    // console.log(apiCallObject);
    // console.log(apiCallObject.types)
    // console.log(apiCallObject.name);
    // console.log(apiCallObject.cries.latest);
    
    
    let pokemon = {
      pName: apiCallObject.name,
      types: [
        apiCallObject.types[0].type.name,
        // Use ternary operator to only add a second type if there is one
        apiCallObject.types[1] ? apiCallObject.types[1].type.name : ""
      ],
      img: apiCallObject.sprites.front_default,
      cry: apiCallObject.cries.latest,
      text: "Placeholder"
    }    
    console.log(pokemon);
    
    return pokemon
  }
  catch(error) {
    console.log(error);
  }
}

// Render 
function showPokemon({ pName, types, cry, img, text }) {

  let cont = document.querySelector(".cont")

  let colors = {
      normal: '#D6D5B9',
      fire: '#F7BE8E',
      water: '#B1CAF7',
      electric: '#FBE898',
      grass: '#B9E3A0',
      ice: '#CEEEED',
      fighting: '#E08E8A',
      poison: '#CE93CE',
      ground: '#F1D9AE',
      flying: '#D4C8F9',
      psychic: '#FCA7C3',
      bug: '#D1DE86',
      rock: '#DAD093',
      ghost: '#B5A3C9',
      dragon: '#B698FE',
      dark: '#B4A49A',
      steel: '#DEDEE9',
      fairy: '#ECBAD4',
  };

  // capitalize first letter of the name
  // pName = pName.charAt(0).toUpperCase() + pName.slice(1);
  background = colors.electric;
  text = "placeholder text"
  console.log("types: ",types);
  

  cont.innerHTML += `
  <div class="card" style="background: ${background}">
      <img src="${img}" alt="" height="200px" width="200px">
      <h3>${pName}</h3>
      <p>${text}</p>
      <a href="#" onclick="
      (function(){
          var audio = document.querySelector('audio#${pName}');
          audio.play();
      })();
      " >Oír grito</a>
      <audio id="${pName}" src="${cry}"></audio>
  </div>`
}