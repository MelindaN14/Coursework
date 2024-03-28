// block 13 statements,conditionals and Functions
// const x = 0
// if (true)
// {
//      console.log('i am going to be executed')
// } else
// {
//     console.log('i am not going to be executed')
//  }
// // console.log(boolean);
console.log("cat" !== "horse");

if (2 + 2 === 4) {
  console.log("math is working");
} else {
  console.log("math sucks");
}
const outOfBread = true;
const outOfEggs = false;

console.log("Time to go shopping");
if (outOfBread) {
  console.log("Buy Bread!");
}
if (outOfEggs) {
  console.log("Buy Eggs!");
}
console.log("Done Shopping!");

console.log(!('5' === 6))
console.log(!true)
console.log(!(5 === "5"))
console.log(!(3 < 5))
 
// console.log((true && false)) || false && true)
// function checkAccount("firstParam", firstParam)

// const thisIsArandomArrowFunction =() =>

// function sayHello (name){
// return 'Hello, $('Cody')
    
// }
function createMessage (fahrenheit, celsius){
  if (fahrenheit < 32) {
        feels = "very cold";
    } else if (fahrenheit < 64) {
        feels = "cold";
    } else if (fahrenheit < 86) {
        feels = "warm";
    } else if (fahrenheit < 100) {
        feels = "hot";
    } else {
        feels = "very hot";
    }

    return `Temperature ${fahrenheit}°F (${celsius}°C) feels ${feels}.`;
}