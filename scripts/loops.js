// TODO: LOOPS
console.log("LOOPS");

console.log("-----------------------------");
console.log("for Loops");
console.log("-----------------------------");


for (let i=0; i < 10; i++) {
  console.log("Hola " + i);
}

console.log("-----------------------------");

for (let i=9; i >= 0; i--){
  console.log("Hola " + i);
}

console.log("-----------------------------");

alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++) {
  console.log("Hola "+ alumnos[i]);
}

console.log("-----------------------------");
console.log("modify array elements with Loops");
console.log("-----------------------------");

for (let i = 0; i < alumnos.length; i++) {  // recorrer un array con indice
  // const alumno = alumnos[i];
  // console.log("Hola, " + alumno);
  alumnos[i] = alumnos[i].toUpperCase()  // modifica los elementos del array
}
console.log(alumnos);

console.log("-----------------------------");
console.log("for of Loops");
console.log("for (const VARIABLE of ARRAY)");

console.log("-----------------------------");


for (const alumno of alumnos) {     // recorrer un array sin indice
  console.log("Hola, " + alumno);

  // ! alumnos[alumnos.indexOf(alumno)] = "Omar"         MALA IDEA
}

console.log("-----------------------------");
console.log("for in Loops");
console.log("for (const VARIABLE in OBJECT)");
console.log("-----------------------------");

professor = {
  nom: "Omar",
  cognoms: "Olmedo Ferrer",
  edat: 33,
  localitat: "Piera"
}

for (const proprietat in professor) {
  if (Object.hasOwnProperty.call(professor, proprietat)) {
    const element = professor[proprietat];
    console.log(`La propriedad ${proprietat} del professor tiene un valor de ${element}`);

  }
}


console.log("-----------------------------");
console.log("While Loops");
console.log("while (i<10) {DO DOMETHING; i++;}" );
console.log("-----------------------------");


let i = 0;
while (i < 10) {
  console.log("Hola " + i);
  i++;
}

console.log("-----------------------------");
console.log("forEach Loops");
console.log("ARRAY.forEach( VARIABLE => {console.log('Hola ' + VARIABLE) });" );
console.log("-----------------------------");

alumnos.forEach(varName => {
  console.log("Hola " + varName);
});

// TODO 1: write a loop that displays a message in the console 10 times AND alternate its color between RED an BLUE

for (let i = 0; i < 10; i++) {
  if (i%2 == 0) {
    console.log("%c Hola in RED", "color:red;");
  } else {
    console.log("%c Hola in BLUE", "color:blue;");
  }
  

}

// TODO 2: write a loop that shows the numbers 0 to 20 AND if its a multiple of 2 also shows "hola", a multiple of 3 "adeu" a multiple of 5 "que tal"


for (let i = 0; i <= 20; i++) {
  console.log(i);
  if (i%2 === 0) console.log("hola"); // LOOK AT difference between 2 and 3 "="
  if (i%3 === 0) console.log("adeu");
  if (i%5 === 0) console.log("que tal?");
}

// TODO 3: write a counter that shows in the console the numbers from 1 until the number introduced by a parameter (but not more than 1000)

function myCounterPrompt() {
  j = prompt("Enter a number between 0 and 1000")
  j = parseInt(j)
  //console.log(typeof(j));
  if (j > 1000 || j < 0) {
    console.log("Needs to be a number between 0 and 1000");
    return myCounterPrompt();
  }

  for (let i = 1; i <= j; i++) {
    console.log(i);
  }

}
// myCounterPrompt()


inputNumber = prompt("Enter a number between 0 and 1000")
function myCounterPara(num) {
  num = parseInt(num)
  //console.log(typeof(j));
  if (num > 1000 || num < 0) {
    console.log("Needs to be a number between 0 and 1000");
    return myCounter();
  }

  for (let i = 1; i <= num; i++) {
    console.log(i);
  }

}
// myCounterPara(inputNumber)



// TODO 4: write a counter that shows the numbers that contains at least one digit from the input STRING (prompt) taken from a user AND that are less than or equal to 100

function displayDigits1() {
  inputNumb = prompt("Enter a number: ")
  inputArray = inputNumb.split("");
  // console.log(inputArray);

  for (let i = 0; i <= 100; i++) {
    counterArray = i.toString().split("")
    // console.log(counterArray);
    
    //console.log("HI", i);

    for (let j = 0; j < counterArray.length; j++){
      // console.log( counterArray[j] );
      if ( inputArray.includes( counterArray[j]) ) {
        console.log(i);
      }

    }
  }

}

displayDigits1()



function displayDigits2() {
  digits = prompt("Enter a number AGAIN: ")
  for (let i = 0; i <= 100; i++) {
    // if (digits.includes(i) ) console.log(i);

    counterString = i.toString()

    for (const character of counterString) {
      if (digits.includes(character)) {
        console.log(i);
        break;
      }
    }
  }
}

displayDigits2()




// TODO: 5 write a shopping list - Make a prompt repeated until the user introduces a "paraula clau" (use BREAK for this) 
// - each introduced word should be a item on the shopping list 
// Format: 
// Shopping list
// - Break
// - Butter
// - Water 

function shoppingList() {
  let element = ""
  let list = "Shopping list \n"

  while (element != stop) {
    element = prompt("Add an item to the shopping list. Write STOP when you are done.")
    if ( element.toLowerCase() == "stop") break;
    list += "- " + element + "\n"
    
    

  }
  console.log(list);
}

shoppingList()
