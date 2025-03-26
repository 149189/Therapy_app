// Array in js

const myarr = [1, 2, 3, 4, 5, "kaustubh",'True'];
// console.log(myarr);

const hero = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow', 'Hawkeye'];
// console.log(hero);

// Array Methods    

hero.push('Spiderman'); // Add element at the end of the array
// console.log(hero);

// push and pop are faster than shift and unshift

hero.pop(); // Remove element from the end of the array
// console.log(hero);

hero.unshift('Black Panther'); // Add element at the start of the array
// console.log(hero);

hero.shift(); // Remove element from the start of the array
// console.log(hero);

// console.log(hero.includes('Thor')); // Check if element is present in the array
// console.log(hero.indexOf('Thor')); // Get the index of the element


const newhero = hero.join(' - '); // Join the elements of the array
// console.log(newhero);

// Slice and Splice

// console.log("A", hero);
const myn1  = hero.slice(1, 4); // Slice the array from index 1 to 4
// console.log("B", myn1);
const myn2 = hero.splice(1,4); // Splice the array from index 1
// console.log("C", myn2);

