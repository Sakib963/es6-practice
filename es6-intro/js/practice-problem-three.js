const operations = (numbers) => {
    let  sum = 0;
    for(const number of numbers)
    {
        sum = sum + Math.pow(number, 2);
    }

    const average = sum / numbers.length;
    return average;
}

const numbers = [2, 3, 4, 5];
console.log(operations(numbers))