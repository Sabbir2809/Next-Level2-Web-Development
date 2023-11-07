// data types
let id: number = 120; // number
let carName: string = "Tesla"; // string
let bol: boolean = true; // boolean
let arr1: number[] = [1, 2, 3]; // array of number
let arr2: Array<number> = [1, 2, 3];
let str1: string[] = ["A", "B", "C"]; // array of string
let str2: Array<string> = ["A", "B", "C"];
let employee: [number, string, boolean] = [1, "A", true]; // mixed data type
let tuple: [number, number] = [2, 3]; // tuple

// type enum: numeric, string, heterogeneous
enum Role {
  admin = "Admin",
  user = "user",
  moderator = "moderator",
}
console.log(Role.admin);

// type: Union(|)
const union: string | number = "Sabbir";

// type: any
let something: any = 1;
