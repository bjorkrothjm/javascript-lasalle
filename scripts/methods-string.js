// Methods are functions associated with an Object
// ----------------------------------------------

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "
console.log("Original version of text:");
console.log(text);

console.log("");
// TODO: test STRING METHODS: trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()
// ! the string methods does not modify the strings
// ! strings are immutable
// ! => we have to create a new string and save changes to this
console.log("STRING METHDOS");

console.log("");

/// trim() - removes white space from both ends of a string
console.log("trim:");
console.log(text.trim());

console.log("");

/// trimStart() - removes white space from the left of a string
console.log("trimStart:");
console.log(text.trimStart());

console.log("");

/// trimEnd() - removes white space from the right of a string
console.log("trimEnd:");
console.log(text.trimEnd());

console.log("");

/// padStart() - pads a string from the START of a string with 2nd arg until it reaches the lenght of the 1st arg
// if the 1st argument is less than or equal to str.length, then str is returned AS IT IS.
// 1st arg: targetLenght - The length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, then str is returned as-is.
// 2nd arg: padString - The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is the unicode "space" character (U+0020).

// - padText.padStart(4,"0"); => pads a string with "0" (from start/left) until it reaches the length 4:
console.log("padStart:");
padText = "5"
console.log(padText.padStart(4,"x")); // xxx5

console.log(text);
console.log(text.length);

textPaddedS = text.padStart(text.length+4, "0"); // pads a string with "0" from start/left with 4 0s
console.log(textPaddedS); 

console.log("");

/// padEnd() - pads a string from the END of a string with 2nd arg until it reaches the lenght of the 1st arg
// padText.padEnd(10,"0") - pads a string with "0" from end/right until it reaches  the lenght of 10
console.log("padEnd:");
console.log(padText.padEnd(10,"0"));  // 5000000000

textPaddedS = text.padEnd(text.length+4, "0"); // pads a string with "0" from end/right with 4 0s
console.log(textPaddedS); 

console.log("");

/// replace()
// -  The replace() method does not change the string it is called on.
// -  The replace() method returns a new string.
// -  The replace() method replaces only the first match
console.log("replace:");

console.log("replace: Aquesta => THIS");
console.log("replace: text.replace('Aquesta', 'THIS')");
console.log( text.replace("Aquesta", "THIS") );

console.log("replace: l'Omar => el profe");
console.log(text.replace("Omar", "el profe"));

console.log("");
/// replaceAll()
// - The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// - If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// WORKS WITH REGEX
// - don't spend time learning
// - search on: https://regexr.com/ or elsewhere

/// split()
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters:
console.log("split:");

console.log("split: text.split(); ");
console.log(text.split(" "));

console.log("trim + split:");
console.log(text.trim().split(" "));

console.log("");
/// toUpperCase() - converts all chars in a string to upper case
console.log("toUpperCase:");
console.log(text.toUpperCase());

console.log("");
/// toLowerCase() - converts all chars in a string to lower case
console.log("toLowerCase:");
console.log(text.toLowerCase());

console.log("");
/// slice() - extracts a part of a string and returns the extracted part in a new string.
// - 2 parameters: start position, and end position (end not included).
// - IF ONLY 1 PARAMETER => extracts from position of argument to the end of the string

console.log("slice: first word => text.trim().slice(0, 7)" );
console.log(text.trim().slice(0, 7));

console.log("");

console.log("slice: last word => text.trim().slice(-7, )" );
console.log(text.trim().slice(-7, ));

console.log("");

console.log("slice: word una => text.trim().slice(-7, )" );
console.log(text.trim().slice(11, 14));

console.log("");

/// concat() - concatenates 2 strings
console.log("text.concat:- OK?");
console.log(text.concat("- OK?"));

console.log("");

console.log("text.trim().concat:- OK?");
console.log(text.trim().concat("- OK?"));

console.log("");
// TODO: test STRING SEARCH methods: indexOf(), indcludeS(), ...With()
console.log("STRING SEARCH METHDOS");

console.log("");
/// indexOf
console.log("indexOf('Aquest') - returns index of first match");
console.log(text.indexOf("Aquest"));

console.log("");

console.log(".trim().indexOf('Aquest') - returns index of first match");
console.log(text.trim().indexOf("Aquest"));

console.log("");
/// includes()
// The includes() method returns true if a string contains a specified value.
console.log("includes('Aquest') - should return True");
console.log(text.includes("Aquest"));
console.log("includes('something') - should return False");
console.log(text.includes("something"));

console.log("");
/// ...With()

// - Find out if the string starts with the specified characters:
// => True or False 
// string.startsWith(searchValue, start) where start="Start at position" & default is 0
console.log("startsWith('A')");
console.log(text.startsWith("A"));

console.log("");

console.log("trim + startsWith('A')");
console.log(text.trim().startsWith("A"));

console.log("");
/// match()
text2 = "The rain in SPAIN stays mainly in the plain";
console.log("text2: The rain in SPAIN stays mainly in the plain");
console.log("match('ain')");
console.log( text2.match("ain") );

console.log("");
/// matchAll()
console.log("matchAll('ain')");
console.log( text2.matchAll("ain") );

console.log("");


console.log("TASKS");

// TODO: Task: - EXPLAIN HOW IT WORKS
console.log("Task DNI: hide the first 4 and last 2 chars of DNI")
dni = "12345678A"
console.log("DNI completo: " + dni);
console.log("DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X"));

/// dni.slice(4) => extracts the chars from the 5th char (index 4) to the end
console.log(dni.slice(4));
// .padStart(dni.length, "X") => Make the str 9 chars long and pad the start/left of the string with X so that it reaches a lenght of 9 chars  
console.log( dni.slice(4).padStart(dni.length, "X") );
// .slice(0,-2) => extracts from index 0 to index 2 (not included) of the string
console.log( dni.slice(4).padStart(9, "X").slice(0,-2) );

console.log("DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X"));

console.log("");
// TODO: Task: censurar el nombre en el text de 
console.log("Task: censurar el nombre en el text de");
nom = "Omar"

console.log("Text normal: ") 
console.log(text.trim() );

console.log("Text cencurat: text.trim().replace(nom, ''.padEnd(nom.length, 'X')) ");

console.log( text.trim().replace(nom, "".padEnd(nom.length, "X")) );

console.log("");
// TODO: manage dates with loops and condicionals:

data0 = "NAME Johan"
data1 = "AGE 33"
data2 = "HOBBY programming"

data = "NAME Johan AGE 33 HOBBY programming" 

console.log("");

// -------------------MORE METHODS---------------------------
// substring()
// - substring() is similar to slice().
// - The difference is that start and end values less than 0 are treated as 0 in substring()

// substr()
// - substr() is similar to slice()
// - The difference is that the second parameter specifies the LENGTH of the extracted part.

// repeat()


