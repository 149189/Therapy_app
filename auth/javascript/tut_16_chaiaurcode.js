//objets in js

//object literal
var obj = { 
    name: "John",
    age: 30,
    city: "New York"
};
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);

//object constructor - singletons
var obj = new Object();
obj.name = "John";
obj.age = 30;
obj.city = "New York";

obj.greeting = function() {
    return "Hello";
    
}   

console.log(obj.greeting());

obj.greetingtwo = function() {
    console.log("Hello");
    ;
}

console.log(obj.greetingtwo());
