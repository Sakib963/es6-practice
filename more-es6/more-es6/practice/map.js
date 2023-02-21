// You have an odd array (Array with odd numbers). [1,3,5,7,9]. Now convert this array into an even array (array with even numbers). Do this using for loop and array.map() method.

const numbers = [1, 3, 5, 7, 9];

// Using For Loop
/* 
const evenArray = [];
for(let i =0; i < numbers.length; i++)
{
    evenArray.push(numbers[i]+1);
}
*/


// Using Map() Method
const evenArray = numbers.map(x => x+1);
console.log(evenArray)

/* 
    Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.
*/