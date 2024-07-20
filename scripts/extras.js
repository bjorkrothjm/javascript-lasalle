
console.log(Math.PI);
console.log(Math.SQRT2);


randNumb = Math.random()

// Random number between 0 (inclusive),  and 1 (exclusive):
console.log( randNumb);

// Random integer between 0 and 9
console.log( Math.floor( randNumb *10)  );

// Random integer between 0 and 10
console.log( Math.floor( randNumb *11)  );

// Random integer between 1 and 10
console.log( Math.floor( randNumb *11) + 1  );

// ADD descr
console.log( Math.round( randNumb ) );
// ADD descr
console.log( Math.round( randNumb*10 ) );

// TODO : create a function that returns a random whole number between a (min) and b (max) 

function randomizer(min, max) {
  let randFloat = Math.random()
  min = parseInt(min)
  max = parseInt(max)

  // WHAT?
  let randNumb = Math.floor( randFloat * max) + min
  console.log(randNumb);

  //  random number between min and max (both included):
  let randNumb2 = Math.floor(randFloat * (max - min + 1) ) + min;
  console.log(randNumb2);

  // random number between min (included) and max (excluded):
  let randNumb3 = Math.floor(randFloat * (max - min) ) + min;
  console.log(randNumb3);

  return randNumb;
}

// minNumber = prompt("Enter an integer that the random number cannot be lower than: ")
// maxNumber = prompt("Enter an integer that the random number cannot be higher than: ")
// randomizer(minNumber, maxNumber);

console.log("-------------------------");
console.log("DATES");

// TODO : ?

// Fechas

let time = new Date()
console.log(time);

let time2 = new Date(1990, 11, 16)
console.log(time2);

let time3 = new Date("June 20 2024 11:00")
console.log(time3);

console.log(time.getMinutes());
console.log(time2.getMinutes());
console.log(time3.getMinutes());

console.log(time3.getTime());

console.log(time.getHours());
console.log(time.getDay());
