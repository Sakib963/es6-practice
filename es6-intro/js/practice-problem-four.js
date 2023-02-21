const concatenate = (inputOne, inputTwo) => {
    const newArray = [...inputOne];
    newArray.push(...inputTwo);
    return Math.max(...newArray)
}

const arrayOne = [1, 2, 3, 47, 50];
const arrayTwo = [12, 24, 34, 47, 6000];

console.log(concatenate(arrayOne, arrayTwo));
