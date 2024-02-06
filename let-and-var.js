// let and var are both used to declare variables in JavaScript, but they have some key differences:
// Scope:

// var: Variables declared with var are function-scoped, meaning they are only accessible within the function where they are declared. If a variable is declared outside any function, it becomes a global variable.
// let: Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces {}) where they are declared. This includes if statements, for loops, and any other block structures.
// example
//// Using var
function exampleVarScope() {
  if (true) {
    var varScoped = "I am var-scoped";
  }
  console.log(varScoped); // Outputs: "I am var-scoped"
}

exampleVarScope();

// Using let
function exampleLetScope() {
  if (true) {
    let letScoped = "I am block-scoped";
  }
  // Uncommenting the line below would result in a ReferenceError
  // console.log(letScoped);
}

exampleLetScope();

//Hoisting:

// var: Variables declared with var are hoisted to the top of their scope during the execution phase. This means you can use a variable before it's declared without causing an error, but the value will be undefined.
// let: Variables declared with let are also hoisted, but they are not initialized. Accessing a let variable before its declaration results in a ReferenceError.
// Using var
console.log(varHoisted); // Outputs: undefined
var varHoisted = "I am hoisted with var";

// Using let
// Uncommenting the line below would result in a ReferenceError
// console.log(letHoisted);
let letHoisted = "I am hoisted with let";

// Example 3: Re-declaration

// Using var
var redeclareVar = "I am var";
var redeclareVar = "I am re-declared var";
console.log(redeclareVar); // Outputs: "I am re-declared var"

// Using let
// Uncommenting the lines below would result in a SyntaxError
// let redeclareLet = "I am let";
// let redeclareLet = "I am re-declared let";
// With var, you can re-declare a variable within the same scope without any issues. Attempting to do the same with let would result in a SyntaxError.

// Example 4: Global Object Property

// Using var
var globalVar = "I am global with var";
console.log(window.globalVar); // Outputs: "I am global with var" (in a browser)

// Using let
let globalLet = "I am global with let";
console.log(window.globalLet); // Outputs: undefined (in a browser)
// When declared globally, variables with var become properties of the global object (window in browsers). Variables declared with let at the global level do not become properties of the global object.
// Example 5: Temporal Dead Zone (TDZ)

// Using var
console.log(varInTDZ); // Outputs: undefined
var varInTDZ = "I am var in TDZ";

// Using let
// Uncommenting the line below would result in a ReferenceError
// console.log(letInTDZ);
let letInTDZ = "I am let in TDZ";

// ---------------------------------------------------------------------------------

// With var, the variable is accessible (but undefined) before its declaration due to hoisting. With let, trying to access the variable before its declaration (within the temporal dead zone) results in a ReferenceError.

// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables or functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// Here's an example:

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5

// --------------------------------------------------
// Temporal Dead Zone (TDZ):

// The Temporal Dead Zone (TDZ) is a concept related to variables declared with let and const. In JavaScript, when a variable is declared with let or const, it is hoisted to the top of its block or scope, but it is not initialized until the actual declaration statement is encountered during execution. The time between the start of the block and the declaration is called the Temporal Dead Zone.

// Here's an example:

console.log(z); // Outputs: ReferenceError: z is not defined
let z = 15;
// In this example, trying to access z before its declaration results in a ReferenceError. This is because during the Temporal Dead Zone, z is recognized as a variable, but it has not been initialized yet.

// It's generally good practice to declare variables at the top of their scope to avoid confusion caused by hoisting and the Temporal Dead Zone.
