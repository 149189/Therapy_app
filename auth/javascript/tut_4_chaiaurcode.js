const acc_id = 1;
let acc_email = "kaustubhpy@gmail.com"; 
var password = "123456";

// const variables cant be changed
/*
dont use var keyword because it is not block scoped
use let instead of var
 */
password = "1234567";
// var can be redeclared
let acc_state;
console.table({acc_id, acc_email, password, acc_state});