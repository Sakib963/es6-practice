const numbers = [12, 56, 87, 44];

const half = numbers.map(num => num/2)
// console.log(half);

const third = numbers.map(x => parseFloat((x / 3).toFixed(2)));
// console.log(third)

const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters)

const nameLength = friends.map(friend => friend.length);
// console.log(nameLength)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'iPhone', price: 95000},
    {id: 3, name: 'Tablet', price: 25000},
    {id: 4, name: 'smartWatch', price: 5000},
]

// const items = products.map(product => product.name)
const prices = products.map(product => product.price);
console.log(prices)