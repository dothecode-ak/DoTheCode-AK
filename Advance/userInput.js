const ps =require('prompt-sync');
const prompt=ps();
let num1=prompt('Enter the first number: '),
num2=prompt('Enter the second number: ');
var sum=(parseInt(num1)+parseInt(num2));
console.log(sum);