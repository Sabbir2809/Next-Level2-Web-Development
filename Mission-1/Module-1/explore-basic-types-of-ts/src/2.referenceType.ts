/* Reference Data Type: Object */

// Type Alias for object
type USER = {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
  isMarried: boolean;
  readonly institute: "DIU";
};

const user: USER = {
  firstName: "Sabbir",
  // middleName: "",
  lastName: "Hossain",
  age: 25,
  isMarried: false,
  institute: "DIU",
};
console.log(user);
