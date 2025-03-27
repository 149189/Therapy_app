// Control Flow

// const username  = false;

// if (username){
//     console.log("Username is Logged in");
    
// }
// else{
//     console.log("Username is Required");
    
// }

const users = function () {
    let names = ['Kaustubh', 'rohandas', 'sahil singhh', 'neo chan'];
    return names;
};

const nama = users();

for (let index = 0; index < nama.length; index++) {
    const element = nama[index];
    console.log(element);
}




// if (nama==true){
//     console.log(`Names are ${nama}`);
    
// }
// else {
//     console.log("Not Retrived");
    
// }