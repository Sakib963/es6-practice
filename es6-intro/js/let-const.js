// breakup with var
// no more use of var
// let: let it to reassigned
// const: do not allow it to reassigned

let money = 25;
money = 35;

console.log(money)

const bird = 'Chorui Pakhi';
// bird = 'moina pakhi'
const message = bird + ' potas potas'
console.log(message)

const numbers = [12, 89, 45, 5, 66]
// can't reassign in const
// numbers = [78, 54, , 8, 1, 12, 5]
numbers.push(100, 200);
// console.log(numbers)
// numbers[0] = 1000;
// console.log(numbers[0])
// console.log(numbers)

const student = {
    name: 'mofiz',
    address: 'Rangpur'
}
// student = {name: 'mofazzol'}
student.name = 'mofazzol';
console.log(student)