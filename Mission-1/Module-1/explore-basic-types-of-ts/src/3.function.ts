// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(2, 3));

// arrow function
const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(5, 2));

// object -> function(method)
const userInfo = {
  name: "Sabbir",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
console.log(userInfo.addBalance(10));

// array map
const arr: number[] = [1, 9, 2, 5, 8, 0, 9];
const newArray: number[] = arr.map((element: number): number => element * element);
console.log(newArray);
