"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// arrow function
const sub = (num1, num2) => num1 + num2;
console.log(sub(5, 2));
// object -> function(method)
const userInfo = {
    name: "Sabbir",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
console.log(userInfo.addBalance(10));
// array map
const arr = [1, 9, 2, 5, 8, 0, 9];
const newArray = arr.map((element) => element * element);
console.log(newArray);
