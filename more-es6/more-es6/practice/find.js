/* 
    You are given an array say [33, 50, 79, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using array.filter() method.
*/

const numbers = [33, 880, 79, 90, 101, 30];

const divisibleByTen = numbers.find(x=> x%10 == 0);
console.log(divisibleByTen)