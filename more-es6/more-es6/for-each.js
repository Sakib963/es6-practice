const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];

// for each doesnt give any return values
friends.forEach(friend => {

})

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'iPhone', price: 95000},
    {id: 3, name: 'Tablet', price: 25000},
    {id: 4, name: 'smartWatch', price: 5000},
]

// It will be undeefined, because for each doesnt return any values
const names = products.forEach(product => product.name)

console.log(names)

/* 
Difference between for-each and map
    forEach: 
        1. return value: undefined
        2. original array: not modified
    map:
        1. return value: new Array will be created based on your callback function
        2. original array: not modified
*/