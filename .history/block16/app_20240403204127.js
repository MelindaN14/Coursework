// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// // let sum = 0
// const newArray = inventory.find((item) => item.name === "apples");

// console.log(newArray);
// console.log(inventory);

// every

const newArray = [2, 4, 6, 8];

const allEven = newArray.every((num) => num % 2 === 0);

console.log(allEven);

// splice

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));

// reduce
const jobArray = [
  { type: "marketing", founded: 1990 },
  { type: "construction", founded: 1600 },
  { type: "fashion", founded: 1920 },
];
console.log(jobArray);
const totalFunded = jobArray.reduce((accumulator))
