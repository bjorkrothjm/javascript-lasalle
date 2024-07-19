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

