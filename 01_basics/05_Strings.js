const name = "Ani" ;

const count = 10;

//console.log(typeof name);

//console.log(name + count + " value");  this is outdated pratice

//console.log(`Hello my name is ${name} and my repo count is ${count} `); // backticks `` is used to have string exterpolation 
//and also to have readability

//string is a object type and not array type and values are store in key value pairs

const gameName = new String('chaiaur-code');

//console.log(gameName[2]);
//console.log(gameName.__proto__);

//console.log(gameName.length);

//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4); // this does not includes the 4th index 0 = c , 1 = h , 2 = a, 3 = i
//console.log(newString); // substring does not allow negative numbering 

//to have negative numbering we use slice method
const anotherString = gameName.slice(0,-4);
//console.log(anotherString);


//Trim method is used to remove the unwanted space
const newSpace = "    Jira   ";
//console.log(newSpace);
//console.log(newSpace.trim());


const url = "https://javascript.com%20learn";
//to avoid the %20 we use replace method which helps to improve the readability 
console.log(url.replace('%20' , '-'));

console.log(url.includes('javascript'));