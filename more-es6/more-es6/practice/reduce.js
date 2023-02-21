/* 
    You have an array [1, 9, 177, 22]. Add the all elements of this array and give output. Do this using for loop and Array.reduce() method
*/

const numbers = [1, 9, 177, 22];

// Using For Loop
/* 
    let sum = 0;
    for(let i = 0; i<numbers.length; i++)
    {
        sum = sum + numbers[i];
    }
*/


// Using reduce()
const sum = numbers.reduce((previous, current) => previous + current);
console.log(sum)