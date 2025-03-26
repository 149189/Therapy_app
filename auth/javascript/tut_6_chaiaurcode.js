//Datatype conversion confusion

let score = "abc33";
//console.log(typeof score);
let valueinnumber = Number(score);
//console.log(valueinnumber);
//console.log(typeof valueinnumber);

// "33" is a string, but when we convert it to a number, it becomes a number.
// The output will be 33.
// "33abc" will also be converted to NaN.
// "abc33" will be converted to NaN.

let isloggedin = "name";
let booleanisloggedin = Boolean(isloggedin);
//console.log(booleanisloggedin);
//console.log(typeof booleanisloggedin);
//console.log(typeof isloggedin);

//1 in boolean is true, 0 is false.
// If we convert a string to a boolean, it will be true.
// If we convert an empty string to a boolean, it will be false.
// If we convert a number to a boolean, it will be true.
// If we convert 0 to a boolean, it will be false.
// If we convert NaN to a boolean, it will be false.

let somenumber = 33;

let namestring = String(somenumber);
console.log(typeof namestring);

// If we convert a number to a string, it will be a string.
// If we convert a boolean to a string, it will be a string.
// If we convert a NaN to a string, it will be a string.
// If we convert an empty string to a string, it will be a string.
// If we convert a null to a string, it will be a string.
