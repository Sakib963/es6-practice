# Common Interview Questions
## What is ES6? Have you ever used anything in ES6?
ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.

ES6 comes with significant changes to the JavaScript language. Most popular ES6 features that we can use in your everyday JavaScript coding.

* let and const Keywords
* Arrow Functions
* Multi-line Strings
* Default Parameters
* Template Literals
* Destructuring Assignment
### 1. let and const keywords :
The keyword "let" enables the users to define variables and on the other hand, "const" enables the users to define constants. Variables were previously declared using "var" which had function scope and were hoisted to the top. It means that a variable can be used before declaration. But, the "let" variables and constants have block scope which is surrounded by curly-braces "{}" and cannot be used before declaration.
### 2. Arrow Functions
ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.

Arrow functions are defined using the fat arrow (=>) notation.
### 3. Multi-line Strings
ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).

It can be done as shown below :
```
let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
```
### 4. Default Parameters
In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used.
&nbsp;

## Explain the difference between var, let and const?
![difference](https://user-images.githubusercontent.com/66853064/220147995-ae120a10-a6fa-41ff-a22f-e3264d47fdd2.PNG)

## What is the arrow function and how to create it?
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

* Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
* Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
* Arrow functions cannot use yield within their body and cannot be created as generator functions.
```
<!-- Single Line Arrow Function -->
const arrow = (first, second, third) => first * second * third;
<!-- Multiple Line Arrow Function -->
const concatenate = (inputOne, inputTwo) => {
    const newArray = [...inputOne];
    newArray.push(...inputTwo);
    return Math.max(...newArray)
}
```

## Advantages of Arrow Function
The following points will describe the list of advantages which are associated with using Arrow functions instead of normal functions –
* This arrow function reduces lots of code and makes the code more readable.
* Arrow function syntax automatically binds “this” to the surrounding code’s context.
* Writing the arrow => is more flexible as compared with the writing function keyword.

## Discuss spread operator in ES6 with an example
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

## What do you understand about default parameters?
The default parameter is a way to set default values for function parameters a value is no passed in (ie. it is undefined).
```
const defaultAdd = (first , second = 10) => first + second;
```

## What are template literals in ES6?
Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
```
const webString = `I am a web developer.
I love to code.
I love to eat biriyani.`
```

## Tell us the difference between arrow and regular function?
Regular Function: We can write the regular function in two ways, i.e Function declaration, and Function expression.
Arrow Function: There is no declaration approach here, we can write by using Function expressions only.
For better understanding. follow this link: https://levelup.gitconnected.com/7-differences-between-arrow-functions-and-regular-functions-in-javascript-9152883a839f#:~:text=Unlike%20regular%20functions%2C%20arrow%20functions%20do%20not%20allow%20duplicate%20parameters,Syntax%20Error%20to%20be%20thrown.&text=In%20this%20article%2C%20I%20have,and%20arrow%20functions%20in%20JavaScript.