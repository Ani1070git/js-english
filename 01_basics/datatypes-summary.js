// primitives 

// 7 types : string , number , boolean , null , undefined , symbol , BigInt


const number  = 100;
const value = 110.77; // there is no special type like float and this comes under number category

const outsideTemp = null; // null type

let isEmail; // undefined type or it can be written as let isEmail = undefined

const id = Symbol('123');
const anotherid = Symbol('123');

// the symbol is the datatype used to make a value unique

//console.log(id === anotherid);// the output is false because the symbol makes both the values unique

const bigNumber = 234754869n;

// reference types (non primitive)

//Arrays , objects , functions

const heros = ["shaktiman" ,"naagraj" , "dogo"];

let myObj = {
    name : "Ani",
    age : 20,
    ismarried : false,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);