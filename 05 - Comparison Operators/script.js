let item = 'window';

if(item != 'engine') {
    console.log('not engine!');
}

let score = 5;

if(score >= 60) {
    console.log('pass');
}
else if (score < 10) {
    console.log('meet the teacher');
}
else {
    console.log('not pass');
}

let isEngine = item == 'engine';
console.log(isEngine);

if(isEngine) {

}

// Challenge
let balance = 100;
let itemPrice = 1000;

// 1. check balance
// 2. if they buy, update balance

if(balance >= itemPrice) {
    // update balance
    //balance = balance - itemPrice;
    balance -= itemPrice;
    console.log('item purchased');
    console.log(balance);
}
else {
    console.log('not enough balance');
}