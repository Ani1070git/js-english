//The difference between javascript in .js and txt file is that of the keywords used.
const accountId = 1483326
let accountEmail = "Ani@google.com"
var accountPassword = "12345"
accountCity = "Karnataka"
let accountState;

//accountId = 23

//console.log(accountId);

//to view every detail at once we can use table format

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/