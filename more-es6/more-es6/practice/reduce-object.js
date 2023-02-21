const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

// let ageSum = 0;
// for(let i =0; i < people.length; i++)
// {
//     ageSum = ageSum + people[i].age;
// }

const ageSum = people.reduce((previous, current) => {
    return previous + current.age;
}, 0)
console.log(ageSum)