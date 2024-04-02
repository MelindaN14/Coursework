//objects

const fruits = {
  name: 'banana',
  color: ['green', 'yellow', 'brown'],
  sugar: 14,
}
console.log(fruits);

const shoe = {
  brand: 'converse',
  hasLaces: true,
  hasVelcro: false,
  color: ['green', 'pink'],
  price: 67.99,
  activityType: 'casual'
}
console.log(shoe);
// access property type in objects
const myCar = {
  color: 'blue',
  brand: 'acura',
  trim: 'sport'
};
myCar.weight = '1577kg';
// two ways to access property type
console.log(myCar.color);
console.log(myCar['color']);
// object dot Notation - a way to access properties within objects using a static, prev know key
console.log(myCar.trim);
/* Object Properties Bracket
a means to access prop within objects with a dynamic, variable key */
console.log('color'); 
console.log(myCar.property); 
console.log(myCar["property"]); 

/* AddinG Object properties
to add simply assign a new value to a new key */

// Guided Practice Dinner Party
const dinner = {
  cheeseburger: '12',
  steak: '20',
  soup: '8',
  macAndCheese: '14',
  soupAndSalad: '16',
};
console.log(dinner);
console.log(Object.values(dinner));
console.log(Object.keys(dinner));

let totalCost = 0;
for (const individualMeal in dinner)
{
  totalCost += dinner[individualMeal];
}
console.log(totalCost);

// function calculateCost (meal)
// {
//   let total = 0;
//   for (const food in meal)
//   {
//     total += meal[food];
//   }
// //   return total;
//assign new keys 

//delete key
// delete.soup