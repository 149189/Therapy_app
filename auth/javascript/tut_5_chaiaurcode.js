//Datatypes and EMCA Standards
"use strict"; // treat all js code as newer version of js

// 1. Number
let num = 10;
console.log(num);
// 2. String
let str = "Hello World";
console.log(str);
// 3. Boolean
let bool = true;    // false
console.log(bool);  
// 4. Undefined
let und;
console.log(und);
// 5. Null
let n = null;
console.log(n);
// 6. Object
let obj = {
    name: "Kaustubh",
    age: 20
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
// 7. Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
// 8. Function
function fun() {
    console.log("Hello from function");
}   
fun();
// 9. Date
let date = new Date();
console.log(date);
// 10. RegExp
let reg = /kaustubh/;
console.log(reg);

// EMCA Standards
// 1. let and const
// let is block scoped

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof n);
console.log(typeof obj);