const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];
let sum = 0
const newArray = inventory.map((item) => item.name === 'apples');

console.log(newArray);