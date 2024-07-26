
// TODO: 1 mostra les taules de multiplicar del 1 al 9 per la consola
console.log("Exercise 1 Multiplication tables");
console.log("");

for (let i = 0; i < 10; i++) {
  console.log(`Multiplication table of ${i}`);
  for (let j =  0; j < 10; j++) {
    let res = i * j;
    let line = `${i} x ${j} = ${res}`;
    console.log(line);
  }
  console.log("");
}

// TODO: 2 recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"
// TODO: 2 rewrite the parseFloat() function so that it takes numbers even if there are letters before them and accepts
//  the symbols ",", "." as a decimal separator. and "'". 
// Eg: "hello89'234" should return "89.234", "43'35goodbye" should return "43.35", "love45.9hate" should return "45.9"

console.log("Exercise 2.0 betterParse()");
console.log("");

function betterParse(string){
  let output = "";
  const abc = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const sep = `,.'`;

  for (const char of string) {
    // Save the number to the output string 
    if (!abc.includes(char.toUpperCase()) && !sep.includes(char)) { 
      output += char;
    }
    // detect if there is a separator and standardize it to a dot (".")
    if (output.length > 0 && sep.includes(char)) {
      if (output.includes(".")) break; // avoid double separators 
      output += ".";
    }

    // to accumulate ... if after the numbers you find a letter
    if (output.length > 0 &&  abc.includes(char.toUpperCase()) ) {  
      break;
    } 
  }

  return output;
}

console.log(betterParse("hola123"));
console.log(betterParse("hola123omar456"));
console.log(betterParse("hola123.45omar456"));
console.log(betterParse("hola123'45omar456"));
console.log(betterParse("hola123,45omar456"));
console.log(betterParse("234.1234'25.5"));
console.log(betterParse("234'1234,25.5"));
console.log("Testing examples:")
console.log(betterParse("hello89'234")); // 89.234
console.log(betterParse("43'35goodbye")); // 43.35
console.log(betterParse("love45.9hate")); // "45.9"


// TODO: 3 crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

console.log("Exercise 3 ");









// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)
// TODO: create a function that takes a text and separates its words (without punctuation marks) and returns them in a new string separated by spaces (without using arrays)

console.log("%cExercise 4: separateWords()",  "font-weight: bold" );
function separateWords(string) {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  let words = "";

  for (const char of string) {
    if (ABC.includes(char.toUpperCase())) words += char;

    if (char == " ") words += " "
  }

  return words;
} 

console.log(separateWords("hola, Omar. Cómo estas?"))
console.log(separateWords("l'Omar és el nostre profe"));
console.log(separateWords(`El Carlos dijo. "¡Omar! ¡Cuidado!"`));

console.log(separateWords(`     El Carlos dijo. "¡Omar! ¡Cuidado!"`));
console.log(separateWords(`El Carlos dijo. "¡Omar! ¡Cuidado!     "`));
console.log(separateWords(`El Carlos dijo.       "¡Omar! ¡Cuidado!"`));
console.log(separateWords(`       El Carlos dijo. "¡Omar! ¡Cuidado!"     `));

// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

console.log("%cExercise 5: randomWords()",  "font-weight: bold" );

function randomWords() {
  string = separateWords()
  let words = string.split(" ");

  return 
}

console.log(randomWords("hola, Omar. Cómo estas?"))
console.log(randomWords("l'Omar és el nostre profe"));
console.log(randomWords(`El Carlos dijo. "¡Omar! ¡Cuidado!"`));

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari


// TODO: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes
// data0 = "NOM Omar"
// data1 = "COG Olmedo"   -> [data0, data1, data2, ...]
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"

// La funció ha de retornar un objecte així:

// {
//     nom: "Omar",
//     cognom: "Olmedo",
//     edat: 33
// }

// TODO: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array d'objectes amb els noms de les columnes com a propietats
// TODO: manage a CSV. The program should take a sting in format CSV and add all the info into an array of objects with the names of the columns as properties

// PISTA: necessitareu ajuda. Demaneu-la
// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];

