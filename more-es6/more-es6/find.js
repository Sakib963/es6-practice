const  numbers = [13, 5, 23, 11, 45, 18, 43, 55, 1];

const fivesAll = numbers.filter(number => number % 5 == 0)
const fives = numbers.find(number => number % 5 == 0)
console.log(fives)
/* 
    filter will return all elements which is true in condition (like querySelectorAll)
    find will return first element which is true in condition (like querySelector)
*/

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'iPhone', price: 95000},
    {id: 3, name: 'Tablet', price: 30000},
    {id: 4, name: 'smartWatch', price: 5000},
]

const cheap = products.find(product => product.price < 40000)
console.log(cheap)