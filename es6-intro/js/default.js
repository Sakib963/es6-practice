/*
    Default Parameter

*/
function add(first, second = 0)
{
    const total = first + second;
    return total;
}

// const result = add(3, 77);
// const result1 = add(3);
// console.log(result)
// const result2 = add(3, 7);
// console.log(result2)
// console.log(result1)

function fullName(first, last = 'Chowdhury')
{
    const name = first + ' ' + last;
    return name;
}

console.log(fullName('gelam'))