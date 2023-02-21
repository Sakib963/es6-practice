const add = (first, second) => first + second;
const getFullName = (first , last) => first+ " "+ last;

const multiply = (a, b) => a * b;

const result = multiply(6,7)
// console.log(result)

// no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num*2;

// one parameter simplified version
const fiveTimes = num => num * 5;

// multi line arrow function
const sumOfNumbers = (numbers) => {
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
const sum = sumOfNumbers(numbers);
console.log(sum)