# Common Interview Question in ES6
## What’s the difference between map, foreach, filter?
* .forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.
* .map() executes the same code on every element in an array and returns a new array with the updated elements.
* .filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

## What’s the difference between filter and find?
* filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
* In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned.

## What is the difference between for..of and for..in?
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

* for..in iterates over all enumerable property keys of an object
* for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.

## How do you empty an array?
1) Assigning it to a new empty array
2) Setting its length to zero
3) Using splice() method
4) Using pop() method

## Difference between class and object.
Object is an instance of a class. All data members and member functions of the class can be accessed with the help of objects. When a class is defined, no memory is allocated, but memory is allocated when it is instantiated (i.e. an object is created).
* A class is a template for creating objects in a program, whereas the object is an instance of a class.
* A class is a logical entity, while an object is a physical entity.
* A class does not allocate memory space; on the other hand, an object allocates memory space.
* You can declare a class only once, but you can create more than one object using a class.

## What is a Prototype chain? Or how does inheritance work in JavaScript?
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

## What does destructing do in es6?
Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

## Is optional chaining is same as ternary operator?
It's also known as the ternary conditional operator because it combines some of what the ternary operator does together with the chaining operator, normally called dot notation.

It's similar to the traditional dot syntax which lets you access an object and its properties.

## What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation?
* Dot notation is the most common way to access elements in JavaScript. To use dot notation, you simply write the name of the object followed by a dot and the name of the property you want to access. For example, if we have an object called “person” with a property called “name”, we would access the name property using person.name.
* Bracket notation is less common than dot notation, but it is useful in certain situations. To use bracket notation, you write the name of the object followed by brackets and the property you want to access. For example, if we have an object called “person” with a property called “name”, we would access the name property using person[“name”].