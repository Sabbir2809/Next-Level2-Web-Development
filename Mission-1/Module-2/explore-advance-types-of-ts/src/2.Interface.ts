// Interface, type vs interface

// Best Practice: object interface
interface User2 {
  name: string;
  age: number;
}
interface userWithRole2 extends User2 {
  role: string;
}
const user2: userWithRole2 = {
  name: "Rubel",
  age: 30,
  role: "doctor",
};

// object type
type User1 = {
  name: string;
  age: number;
};
type userWithRole1 = User1 & { role: string };
const user1: userWithRole1 = {
  name: "Sabbir",
  age: 25,
  role: "student",
};

// Best Practice: array (type)
type Roll1 = number[];
const rollNumber1: Roll1 = [1, 2, 3];

interface Roll2 {
  [index: number]: number;
}
const rollNumber2: Roll2 = [1, 2, 3];

// Best Practice: function (type)
type Add = (n1: number, n2: number) => number;
const AddTwoNumber: Add = (n1, n2) => n1 + n2;

// function (interface)
interface Sub {
  (n1: number, n2: number): number;
}
const SubTwoNumber: Sub = (n1, n2) => n1 - n2;
