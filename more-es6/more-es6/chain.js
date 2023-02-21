const users = [
    {
        id: 1,
        name: 'abul',
        job: 'doctor'
    }
]

// console.log(users[0].name)

const data = {
    count: 500,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'kabul', job: 'leader'}
    ]
}
// console.log(data.data[1].name)

const user = {
    id: 5001,
    name: 'thomas alva edison',
    address: {
        street: {
            first: '35/1 kochukhet lane',
            second: 'THird Floor',
            third: 'Right Side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}
console.log(user.address.street.third)
// Optional Chaining
console.log(user.address.street?.second)