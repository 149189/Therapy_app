// Filter Map and Reduce in js

const muNums = [1, 2, 3, 4, 5, 6, 7];

// const newnums = muNums.filter((num) => {
//   return num <= 4;
// });

const newNums = [1, 2, 3, 4];
newNums.forEach((num) => {
  newNums.push(num);
});

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userbooks = books.filter((bk) => {
  return bk.genre === "History";
});

// console.log(userbooks);

const edi = books.map((bk) => bk.edition);

// console.log(edi);

const numers = newNums
  .map((num) => num + 1)
  .map((num) => num * 2)
  .filter((num) => num > 1);

// console.log(numers);

// +++++++++++++++++++++++ Reduce +++++++++++++

// const total = newNums.reduce(function (acc, cv) {
//   return acc + cv;
// }, 0);

const total = newNums.reduce((acc, cv) => {
  return acc + cv;
}, 0);

// console.log(newNums);
// console.log(total);

const shopping = [
  { item: "js", price: 500 },
  { item: "cpp", price: 700 },
  { item: "python", price: 900 },
  { item: "C", price: 689 },
];

const price = shopping.reduce((acc, item) => acc + item.price, 0);

console.log(price);
