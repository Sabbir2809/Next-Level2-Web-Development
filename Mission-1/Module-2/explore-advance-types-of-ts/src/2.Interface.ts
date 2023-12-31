// Interface, type vs interface

// Best Practice: object interface
interface IUser2 {
  name: string;
  age: number;
}
interface IUserWithRole2 extends IUser2 {
  role: string;
}
const user2: IUserWithRole2 = {
  name: "Rubel",
  age: 30,
  role: "doctor",
};

// object type
type TUser1 = {
  name: string;
  age: number;
};
type TUserWithRole1 = TUser1 & { role: string };
const user1: TUserWithRole1 = {
  name: "Sabbir",
  age: 25,
  role: "student",
};

// Best Practice: array (type)
type Roll1 = number[];
const rollNumber1: Roll1 = [1, 2, 3];

interface Roll2 {
  [index: number]: string;
}
const rollNumber2: Roll2 = ["1", "2", "3"];

// Best Practice: function (type)
type TAdd = (n1: number, n2: number) => number;
const AddTwoNumber: TAdd = (n1, n2) => n1 + n2;

// function (interface)
interface ISub {
  (n1: number, n2: number): number;
}
const SubTwoNumber: ISub = (n1, n2) => n1 - n2;
