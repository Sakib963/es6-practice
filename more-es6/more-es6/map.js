const numbers = [2, 7, 4, 6, 3];


function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

function doubleItOld (number){
   return number * 2;
}

const doubleIt = num => num* 2;

/* 
    purpose: 
        1. get an array
        2. for every elements of the array, do something
        3. store the result in an array 
        4. return the result array as output
*/

const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2)

const fiveTimes = [1,2,3,4,5].map(x => x*5)

console.log(fiveTimes)

// console.log(getDoubles(numbers));
// console.log(makeDouble);
// console.log(makeDoubleDirect);