// Stack and Heap Memory in js

// Stack Memory
// Stack memory is used to store variables that are created by the function.
// When a function is called, a new stack memory is created for that function.
// When the function is done executing, the stack memory is removed.

// Heap Memory
// Heap memory is used to store objects and is shared among all functions.
// When an object is created, it is stored in the heap memory.
// When the object is no longer needed, it is removed from the heap memory.

// Example
// function foo() {
//     var a = 10;
//     var b = 20;
//     var c = a + b;
//     return c;
// }
// console.log(foo());

// In the above example, when the foo function is called, a new stack memory is created for the function.
// The variables a, b, and c are stored in the stack memory.

// When the function is done executing, the stack memory is removed.

// The variables a, b, and c are stored in the heap memory.

// Heap Example
// var obj = {
//     name: 'John',
//     age: 30
// };
// console.log(obj);

// In the above example, the object obj is stored in the heap memory.
// let myyoutubechannel = "myyoutubechannel";
// let anothername = myyoutubechannel;
// anothername = "myyoutubechannel2";
// console.log(myyoutubechannel);
// console.log(anothername);
// console.log(myyoutubechannel);
// console.log(anothername);


// let userone = {
//     name: 'John',
//     age: 30 
// }

// let usertwo = userone;
// usertwo.name = 'Jane';
// console.log(userone.name);
// console.log(usertwo.name);
