/*
    Template String
*/

// We can declare string in three ways
const person = 'Adam Sand'; 
const person2 = "Ben White"; 
const person3 = `Donald Trump`; 

const multiLine = 'First line text \n' +
'Second line text \n' +
'Third line text \n' +
'Fourth line text';
// console.log(multiLine)

const newMultiLine = `First Line of text
Second line of text
Third line of string`
console.log(newMultiLine)

const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and '+ b + ' is: ' + (a+b)
// console.log(summary)
const newSummary = `sum of ${a} and ${b} is: ${a+b}`
console.log(newSummary)