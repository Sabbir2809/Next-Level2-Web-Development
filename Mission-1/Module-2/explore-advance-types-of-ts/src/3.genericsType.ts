// Introduction to generics

// type generic
type GenericArray1 = Array<number>;
type GenericArray2 = Array<string>;
type GenericArray3 = Array<boolean>;

type GenericArray<T> = Array<T>;

// const numberArray1: GenericArray1 = [1, 2, 3, 4, 5];
const numberArray2: GenericArray<number> = [1, 2, 3, 4, 5];

// const stringArray1: GenericArray2 = ["A", "B", "C", "D", "E"];
const stringArray2: GenericArray<string> = ["A", "B", "C", "D", "E"];

// const booleanArray1: GenericArray3 = [true, false, false, true, true];
const booleanArray2: GenericArray<boolean> = [true, false, false, true, true];

interface User {
  name: string;
  age: number;
}
// array of object
const familyMembers: GenericArray<User> = [
  {
    name: "A",
    age: 1,
  },
  {
    name: "B",
    age: 2,
  },
];

// generic tuple
type GenericTuple<x, y, z> = [x, y, z];
const people: GenericTuple<string, string, string> = ["x", "Y", "Z"];
const userWithId: GenericTuple<number, { name: string; age: number }, boolean> = [
  1,
  { name: "A", age: 1 },
  true,
];
