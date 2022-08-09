/*****************************************************************************************************************************************

🌟 INTRO INTO JAVASCRIPT 🌟

 💡 There are two ways to run Javascript. Run it inside your browser, and one to run it outside. There are also two ways to run JavaScript inside the browser.

1. Create a HTML file and insert the Javascrpit code within the <script></script> tags.
2. Create an external .js file and link it inside the HTML file: 
    <script src="javascript.js"><script>

******************************************************************************************************************************************
 
🌟 VARIABLES 🌟

💡 An easy way to think of variables is to simply think of it as 'storage containers' for data in your code. There are three ways to declare a variable: var, let, and const.

💡 Both the var and const statements are relatively new. Used to be only var was used to declare variables. 

💡 var and let behave in mostly the same way. The only differences is that var will let you redeclare a variable, while let will not.

💡 When naming variables, camelCase is the most common, but you can also use $ and _ when naming variables.

❗ Examples of incorrect variable names: 
    let 1a; //cannot start with a digit.
    let my-name; hyphens '-' are not allowed in the name.

❗ Case matters - Variables named apple and APPLE are two different variables.

💡 Constants - To declare a constant (unchanging variable), use const instead.
    Uppercase COnstatnts - You can use constants for difficult to remember values liike hex codes for colors (#FF7F00).
      - const COLOR_BLUE = "#00BFFF"
    
    Benefits:
      - COLOR_BLUE is easier to remember than "#00BFFF"

    When should you use a capital const vs a normal const?
      - In other words, capital-named constants are only used as aliases for “hard-coded” values, or put more simply, variables that won't change no matter what.

******************************************************************************************************************************************
🌟 NUMBERS 🌟

💡 Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator        Description

+               Addition
-               Subtraction
*               Multiplication
**              Exponents
/               Division
%               Modulus (Remainder)
++              Increment
--              Decrement

💡 The numbers (in an arothmetic operation) are called OPERANDS


******************************************************************************************************************************************
🌟 DATA TYPES 🌟

There are 8 basic data types:
- Numbers: for numbers of any kind; integer or floating-point, Integers are limited by ±(2^53-1) or (9007199254740991).
- bigINT: for integer numbers of arbitrary length.
- Strings: A string may have zero or more characters. There's no seperate single-character type. Must be surrounded by quotes.
  1. Double quotes "Hello"
  2. Single QUotes 'Hello'
  3. Backticks `Hello` - "extended funtionality" quotes. Allow us to embed variables and expressions into a string by wrapping them in ${...}
- Boolean: Two type of values, true and false. Commonly used to store yes/no values.
- Null: Used for unknown values - a standalone type that has a single value null.
-Undefined: for unassigned values - a standalone type that has a single value 'undefined'.
-Objects and Symbols: Objects for more complex data structures. Symbol for unique identifiers.

- typeOf: Operator allows us to see which type of operator is stored in variable.

******************************************************************************************************************************************
🌟 STRINGS 🌟 




************************************/

console.log('Hello World'); // Hello World

let message = 'Hello';

console.log(message); // Hello

message = "What's up?";

console.log(message);

//var message = 'Hey'; // 'message' has already been declared


// You can declare multiple variables in one line
let name = 'patrick', age = 25, chat = 'Hello';

// Can copy data from one to another
let admin = name;
// alert(admin);

let planet = 'Earth';
let userName = 'Patrick';

//Practice

console.log(23+97);

console.log(45 + 75 + 83 + 39 + 78 + 21);

console.log((4 + 6 + +9) / 77);

let a = 10;

console.log(a);

console.log(9 * a);

let b = 7 * a;

console.log(b);

const max = 57;
let actual = max -13;

let percentage = actual / max

console.log(9 % 7);

let star = '🌟'
console.log(star);

console.log("You're a shooting " + star + '!')

const COLOR_BLUE = "#00BFFF"
let color = COLOR_BLUE
// alert(color);

let x = 5;
x++;
console.log(x);


const badString = 'string';
console.log(badString);

