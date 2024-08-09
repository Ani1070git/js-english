const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

console.log(balance.toString());// to-string is a method used to convert the number into string

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // this method is used when we have huge numbers so we can take required numbers for calculation
//like 99.88888476348 => 99.88 upto 2 decimals // the decimal need to passed as an argument in the method


const anotherNumber = 123.89756;
console.log(anotherNumber.toPrecision(3)); //this method will round off the number 123.89756 => to 124
//second example if number is 23.89756 => 23.9  this we get 


//to improve the representation we use tolocalstring
const values = 1000000;
console.log(values.toLocaleString()); //the output is => 1,000,000 this comma is according to the us standards
//to have indian type we 'en-IN'
console.log(values.toLocaleString('en-IN'));