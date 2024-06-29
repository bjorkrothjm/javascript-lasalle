console.log("This is arrays.js")

let data = ["Dog", 23, true]

console.log(data)

// control + command + space to use emojis
let dog = "🐶"
let cat = "🐱"
let racoon = "🦝"
let pig = "🐷"
let koala = "🐨"

let animals = [dog, cat, racoon, pig, koala, koala, koala]

console.log(animals);

// Updating array with index 
animals[5] = racoon

console.log(animals);


console.log(data[1]); // access elements of an array using their Index

console.log("The data array contains " + data.length + " elements"); // lenght is a Property of arrays

console.log(`The data array contains  + ${data.length} + elements`); // lenght is a Property of arrays

console.dir(data); // To see all info about 

// Objects ---------------------


student = {
    firstName: "Leo",
    lastName: "Messi",
    age: 34,
    hobby: "", 
    animal: koala
}

console.log(student);

// Changing the value of property of an object 
student.age = 36;

console.log(student);

// Adding vlaues to object

student.lenght = 165;
student.weight = 72;


console.log(student);

students = [
    student,
    {
        firstName: "Cristiano",
        lastName: "Ronaldo",
        age: 37,
        hobby: "", 
        animal: cat,
        length: 185,
        wieght: 78
    }
]

console.log(students);

console.log(`Student data type: ${typeof(student)} `);
console.log(`Students data type: ${typeof(students)} `);
console.log(`Student data type: ${typeof(animals)} `);
console.log(`Student data type: ${typeof(dog)} `);
console.log(`Student data type: ${typeof(student.age)} `);


//TODO: create an array with 5 objects with min. 4 properties each inside them

animalsByName = [
    animal1 = {
        name: "dogge",
        animal: dog,
        age: 4,
        length: 150,
        height: 88,
        wieght: 33,
        food: "dog food"
    },
    animal2 = {
        name: "meowy",
        animal: cat,
        age: 4,
        length: 34,
        height: 20,
        wieght: 9,
        food: "fish and birds"
    },
    animal3 = {
        name: "Mr Coon",
        animal: racoon,
        age: 8,
        length: 34,
        height: 20,
        wieght: 9,
        food: "fish and birds"
    },
    animal4 = {
        name: "Mr Coola",
        animal: koala,
        age: 11,
        length: 34,
        height: 20,
        wieght: 9,
        food: "fish and birds"
    },
    porky = {
        name: "Porky",
        animal: pig,
        age: 5,
        length: 189,
        height: 90,
        wieght: 64,
        food: "anything"
    }

]

//console.log(animalsByName)

// TODO: create an array that contains a list of the properties of the objects

//propArray = Object.keys(animalsByName[1])
// console.log("Property array: ", propArray);
//console.log( Object.keys(animalsByName[0]).concat(Object.keys(animalsByName[1]) ) );
//console.log( new Set ( Object.keys(animalsByName[0]).concat(Object.keys(animalsByName[1])) ) );
propSet = new Set (
    Object.keys(animalsByName[0]).concat(Object.keys(animalsByName[1]),
    Object.keys(animalsByName[2]),
    Object.keys(animalsByName[3]),
    Object.keys(animalsByName[4])
));

//console.log(propSet);
propArrayFromSet = [... propSet]
//console.log("Property array (from set): ", propArrayFromSet);


// TODO: Create a variable that contains the sum of a (numeric) property

// console.log( animalsByName[0].age );
ageSum = animalsByName[0].age +  animalsByName[1].age +  animalsByName[2].age +  animalsByName[3].age +  animalsByName[4].age; 
//console.log(ageSum);

// TODO: Show all the above in the console

console.log("Todo 1", animalsByName)
console.log("Todo 2 - Property array (from set): ", propArrayFromSet);
console.log("Todo 3: ", ageSum);


// TODO: Show a phrase that summarizes the properties of each object in the console

console.log(`The properties of the objects are  `);

// TODO: Search for a way to show all the object in a table in the console 
