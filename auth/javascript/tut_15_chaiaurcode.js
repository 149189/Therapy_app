const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros) // Output: ["thor", "ironman", "spiderman", ["batman", "superman", "flash"]];
// console.log(marvel_heros[3][1]);


const all_ner_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_ner_heroes) // Output: ["thor", "ironman", "sideman", "batman", "superman", "flash"];

const an_arr = [1, 2, 3, 4, 5, [6, 7, 8, 9,[10, 11, 12]]]
// console.log(an_arr[5][4][1]) // Output: 11

const real_arr = an_arr.flat(Infinity)
// console.log(real_arr) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// console.log(Array.isArray("Hitesh")) // Output: undefined;
// console.log(Array.from("Hitesh")) // Output: ["H", "i", "t", "e", "s", "h"];

let score1 = 10
let score2 = 20 
let score3 = 30

// console.log(Array.of(score1, score2, score3)) // Output: [10, 20, 30];
