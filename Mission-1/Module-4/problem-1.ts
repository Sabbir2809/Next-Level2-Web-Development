// Problem 1: Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
type TStringOrNumber = string | number;
type LengthOrSquare = (param: TStringOrNumber) => TStringOrNumber;

const getLengthOrSquare: LengthOrSquare = (param) => {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * param;
  }
};
console.log(getLengthOrSquare(2));
console.log(getLengthOrSquare("Maru"));
