/* 
    You are given an array say [33, 50, 79, 90, 101, 30]. Now return/get all the elements which ar[33, 50, 79, 90, 101, 30]e divisible by 10 using array.filter() method.
*/

const numbers = [33, 50, 79, 90, 101, 30];
const divisibleByTen = numbers.map(x => x % 10 == 0)
// const divisibleByTen = numbers.filter(x => x % 10 == 0)
console.log(divisibleByTen)

/* 
    Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.
*/