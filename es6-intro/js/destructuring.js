const fish = {
    name: 'king hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '01513776978',
    price: 6000
}


const phone = fish.phone;
const color = fish.color;
const address = fish.address;

console.log(phone)
console.log(color)
console.log(address)


const {age, name} = {name: 'almas', age : 56, profession: 'Make up artist'}
console.log(age, name)

const {price} = fish; 
console.log(price)


// Array Destructuring

const [number] = [44, 99]
console.log(number)


const nayoks = ['sakib', 'bappa', 'raj']

const [king, lost, notun] = nayoks;

console.log(notun)

function getName (){
    return ['alim', 'halim']
}

const [baba, chacha] = getName();

console.log(chacha, baba)

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars)
