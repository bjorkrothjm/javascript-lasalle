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


// TRANSFORMATION OF VARIBLE TYPES -------------------------------------------------------------

const PI = "3.1415"
radius = 4.5

console.log("The area of the circle is: ", PI*radius**2)

circle = {
    area: PI*radius**2
}
console.log(circle);

radiusString = radius.toString()
console.log(radiusString, typeof(radiusString));

console.log(typeof(circle));
console.log(typeof(circle.area));
console.log(parseFloat(circle.area));


data = {
    data0: PI,
    data1: parseFloat(PI),
    data2: parseInt(PI),
    data3: radius,
    data4: radius.toString()
}

console.log(data.data0, typeof(data.data0));
console.log(data.data1, typeof(data.data1));
console.log(data.data2, typeof(data.data2));
console.log(data.data3, typeof(data.data3));
console.log(data.data4, typeof(data.data4));