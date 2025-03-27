// Global and Local Scope in js

let a = 900 // Global a

if (true){
    let a = 10 
    const b = 20
    var c = 30 // this is not cool
    console.log("Inner a: ",a); // inner a just limited to the this condition scope
     
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

console.log("outer a:",a);
