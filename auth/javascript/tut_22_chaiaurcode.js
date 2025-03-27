// Scope Level and mini hoisting in js


// function one(){
//     const username = "jhf";
//     const password = 567

//     function mew(){
//         const username = "jkl";
//         return (username , password)
//     }

//     console.log(username);
//     console.log(mew());
    
    
// }

// one()


console.log(addone(4));


function addone(num){
    return num+1
}

// user() -> this is solved by Hoisting in next tuts
const user = function name(){
    return 3+2
}