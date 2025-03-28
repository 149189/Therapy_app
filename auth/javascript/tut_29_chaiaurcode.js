// High order array Loop

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const num of arr) {
  //   console.log(num);
}

const greet = "hello world";
for (const element of greet) {
  //   console.log(element);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("CN", "Canada");
map.set("UK", "Kingdom");

// console.log(map);

for (const [element, value] of map) {
  //   console.log(element, value);
}

const obj = {
  js: "Javascript",
  cpp: "Cplis",
  python: "Anaconda",
  swift: "Swity",
};

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) obj;
  const element = obj[key];
  //   console.log(key + " = " + element);

  obj;
}

const code = ["js", "py", "cpp", "c"];

code.forEach((element) => {
  console.log(element);
});
