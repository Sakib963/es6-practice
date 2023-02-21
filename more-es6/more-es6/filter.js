const  numbers = [13, 5, 23, 11, 18, 43, 55, 1];

const bigNums = numbers.filter(number => number >  20);
// console.log(bigNums)

const tinyNums = numbers.filter(number => number < 10);
// console.log(tinyNums)

const evenNums = numbers.filter(even => even %2 == 0)
// console.log(evenNums)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'iPhone', price: 95000},
    {id: 3, name: 'Tablet', price: 25000},
    {id: 4, name: 'smartWatch', price: 5000},
]

const bigPrice = products.filter(product => product.price > 30000)
console.log(bigPrice)