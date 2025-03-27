// how does js execute code + call stack

function greet() {
    console.log("Hello!");
}

function sayGoodbye() {
    console.log("Goodbye!");
}

function main() {
    greet(); // Pushed onto the stack
    sayGoodbye(); // Pushed onto the stack after greet finishes
}

main(); // Pushed onto the stack first