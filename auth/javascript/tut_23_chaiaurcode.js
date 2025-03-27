// this and arrow functions in js

const user = {
    username: "hitesh",
    price: 890,

    welcomemessage: function (){
        console.log(`${this.username}! Welcome to coding.`);
        
    }
}



// console.log(user.welcomemessage());
user.username = "Kaustubh"
// console.log(user.welcomemessage());


// console.log(this);

function one(){
    let username = "kasutbh"
    // console.log(this.username);
    
}
// one()

const chai = function () {
     let username = "kasutbh"
    // console.log(this.username); // undefined
    
}
// chai()

// arrow Functions

const chai2 = (num1,num2) => num1*num2 // Inplicit Return

// console.log(chai2(4,6));
const chai3 = (num1, num2) =>
    {
    return num1 + num2;
}

// console.log(chai3(6,8));
