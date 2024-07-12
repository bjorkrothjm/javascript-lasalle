
pokemonArray = ["Bulbasaur", "Squirtle","Charmander","Pikachu", "Eevee"]


// TODO: test ARRAY methods: 
console.log("ARRAY METHDOS");

console.log(pokemonArray);
console.log("");
/// toString
/// - converts an array to a string of (comma separated) array values
console.log("toString");
console.log(pokemonArray.toString());
console.log(pokemonArray[0].toString());

console.log("");
/// length
/// - The length property returns the length (size) of an array:
console.log("length");
console.log(pokemonArray.length);

console.log("");
/// at()
/// - Get the X element using at():
console.log("at(2) => 3rd element of array"); 
console.log(pokemonArray.at(2));

console.log("");
/// join
/// The join() method also joins all array elements into a string.
/// It behaves just like toString(), but in addition you can specify the separator 
/// => You can change "," for other characters e.g. "*"
console.log("join(*)");
console.log(pokemonArray.join("*"));

console.log("");
/// pop: DELETE [-1]
/// Popping items out of an array (DELETING)
/// - The pop() method removes the last element from an array:
console.log("pop()");
console.log(pokemonArray.pop());
console.log("The array after pop()");
console.log(pokemonArray);

console.log("");
/// push: ADD to [-1]
/// - pushing items into an array (ADDING)
/// - The push() method adds a new element to an array (at the end):
/// - The push() method returns the new array length:
console.log("push()");
console.log(pokemonArray.push("Mewtwo"));
console.log("The array after push()");
console.log(pokemonArray);

console.log("");
/// shift: DELETE [0]
/// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
console.log("shift()");
console.log(pokemonArray.shift());
console.log("The array after shift()");
console.log(pokemonArray);

console.log("");
/// unshift: ADD to [0]
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length:
console.log("unshift('Gangar')");
console.log(pokemonArray.unshift("Gangar"));
console.log("The array after unshift()");
console.log(pokemonArray);

console.log("");
// ! Changing Elements
console.log("pokemonArray[1] = 'Charizard'  => Change (replace) pokement at index 1 (Squirtle) to Charizard");
console.log(pokemonArray[1] = "Charizard");
console.log(pokemonArray);

console.log("");
/// concat
// The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

pokemonArrayPro = ["Tyranitar", "Dragonite", "Mew", "Kyogre"]
console.log("pokemonArratPro ", pokemonArrayPro);
console.log("concat()");
console.log(pokemonArray.concat(pokemonArrayPro));
console.log("pokemonArray after => does not change the existing arrays => method returns a new array");
console.log(pokemonArray);
console.log(pokemonArrayPro);
console.log("Saving new array being returned and printing:");
newPokemonArray = pokemonArray.concat(pokemonArrayPro);
console.log(newPokemonArray);

console.log("concat('Lugia') => (Merging an Array with Values)");
console.log(pokemonArray.concat("Lugia"));

console.log("");
// copyWithin()
// The copyWithin() method copies array elements to another position in an array:
// Copy to index 2, all elements from index 0:
console.log("copyWithin");
console.log("Array before:");
console.log(pokemonArray);
console.log("array.copyWithin(2, 0) => Array after:");
console.log( pokemonArray.copyWithin(2, 0) );

console.log("");
// slice
/// slices out a piece of an array to a NEW array 
// - The slice() method creates a new array.
// - The slice() method does not remove any elements from the source array.
console.log("Slice");
console.log("Array before:");
console.log(pokemonArray);
console.log(".slice(1");

console.log(pokemonArray.slice(1));

console.log("");
// splice
/// adds new items to an array.
// Example: fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where NEW elements should be ADDED (spliced in).
// The second parameter (0) defines HOW MANY elements should be REMOVED.
// The rest of the parameters ("Lemon" , "Kiwi") define THE NEW ELEMENTS to be added.

// The splice() method returns an array with the deleted items:
console.log("Splice");
console.log("Array before:");
console.log(pokemonArray);
console.log(".splice(1, 0, 'Squirtle' )");
console.log(pokemonArray.splice(1, 0, "Squirtle")) ;

console.log("");

// https://www.w3schools.com/js/js_array_methods.asp

/// unshift

