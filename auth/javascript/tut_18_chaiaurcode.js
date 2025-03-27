// Objects de-structure and JSON API intro

const course = {
    coursename: "hmm",
    price: "456",
    cousrseinstructor: "kautubh"
}

const {cousrseinstructor} = course
const {coursename} = course

// console.log(coursename);

// de-structure object

const navbar = ({company}) => {
       return console.log(company);
       
}

navbar(company = "hitesh")

// console.log(navbar("hitesh"));

// API

// {
//     "name": "kaustubh",
//     "age": "56",
//     "price": "678"
// }

