 // addition
 let a = 1 + 1;
 console.log(a);

 let b = 10;
 let c = a + b;
 console.log(c);

 //b = b + 1;
 b += 1;
 console.log(b);

 // subtraction
 let x = 10 - 5;
 console.log(x);

 let y = b + x;
 console.log(y);

 x = x - 1;
 // x -= 1;
 console.log(x);

 // multiplication
 let unitPrice = 2;
 let units = 10;
 let total = unitPrice * units;
console.log(total);

// division
let n = 10;
let result = n / 2;

// modulus
let r = 5 % 2;
console.log(r);

// Challenge
let baseWeight = 10000;
let foodWeight = 100;
let passengersWeight = 10;

let fuelUnitWeight = 2; // weight of 1 unit of fuel
let fuelUnits = 100; // total units of fuel we need

let fuelWeight = fuelUnitWeight * fuelUnits;

let totalWeight = baseWeight + foodWeight + passengersWeight + fuelWeight;
console.log(totalWeight);



