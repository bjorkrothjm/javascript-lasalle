console.log("hello world");

// 0. Normal function
hello = function() {
  return "Hello World Normal!";
}
console.log(hello());


// 1. With Arrow Function
hello = () => {
  return "Hello World Arrow!";
}
console.log(hello());


// 2. Arrow Functions Return Value by Default:
hello = () => "Hello World Arrow with return value by default!";
console.log(hello());


// 3. Arrow Function With Parameters:
hello = (val) => "Arrow function with parameters " + val;

let arrow3 = hello(111); 
console.log(arrow3);

// 4. Arrow Function Without Parentheses:
hello = val => "Arrow function without parameters " + val;

let arrow4 = hello("no parameters!!!"); 
console.log(arrow4);





