console.log("This is variables.js")

// userName is a variable of type "string"
userName = "Josh";
userSurname = 'Gårlin'
userTitle = `Student` // written with shift + ¿

console.log(userName);
console.log(userSurname);
console.log(userTitle);

console.log(userName, userSurname, userTitle);
console.log(userName + userSurname + userTitle);
console.log(userName +  " " + userSurname + " " + userTitle);


console.log(`Qué tal estás ${userName} ${userSurname}?`);

userAge = 33; // number 
userHasHair = true // Boolean
userName = "Marco"; // string


{
    let userNickname = "Joshi" // assinging within local scope
}
// console.log(userNickname); // Will give error because only defined within local scope

const userNickname =  "Joshi"// assinging with 
console.log(userNickname); // Will NOT give error


// Ejercicio - Should output "2, 1" (without assigning numbers to any variable)
a = 1;
b = 2;

/// Only change code here
// c = 2;
// b = a;
// a = c;

//// Solition 1 
c = a;
a = b;
b = c;

//// Solition 2
// [a, b] = [b, a]

/// Don't change code here 
console.log(a, b); // should output "2, 1"


// TODO arrays, objects




