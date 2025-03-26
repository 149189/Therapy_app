//Objects

const tinderuser = {}

tinderuser.name = "chaiaurcode"
tinderuser.age = 20


// console.log(tinderuser);

tinderuser.object = username = {firstname: "chai", lastname: "aurcode"}

// console.log(tinderuser.object.firstname);

const obj_1 = Object.assign({}, tinderuser)
// console.log(obj_1);

const obj_2 = {...tinderuser, ...obj_1}
// console.log(obj_2);

// console.log(Object.keys(obj_2));
// console.log(Object.values(obj_2));

// console.log(Object.entries(obj_2));
// console.log(tinderuser.hasOwnProperty("name"));
// console.log(tinderuser.hasOwnProperty("hero"));

