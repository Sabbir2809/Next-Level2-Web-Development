// Problem 6: Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

const sumArrayOfNumbers = (param: unknown): void => {
  const isArrayOfNumbers = Array.isArray(param) && param.every((element) => typeof element === "number");
  if (isArrayOfNumbers) {
    const sum: number = param.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum);
  } else {
    console.error("Parameter is Not an Array of Numbers");
  }
};
sumArrayOfNumbers([1, 2, 3]); // Output: Sum of numbers: 6
sumArrayOfNumbers([1, "2", 3]); // Output: Array contains non-numeric values.
sumArrayOfNumbers("Not an array"); // Output: Input is not an array.
