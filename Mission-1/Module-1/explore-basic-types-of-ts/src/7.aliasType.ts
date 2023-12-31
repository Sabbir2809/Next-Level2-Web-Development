/* Type Alias */

// object type alias
type TStudent = {
  fullName: string;
  gender: string;
  studentId: number;
  departmentName: string;
  contactNo?: string;
  isStudent: boolean;
  address?: string;
};

const student1: TStudent = {
  fullName: "Md Sabbir Hossain",
  gender: "Male",
  studentId: 2809,
  departmentName: "CSE",
  contactNo: "01829723692",
  isStudent: true,
  address: "Singair",
};

const student2: TStudent = {
  fullName: "Ataur Rahman Rubel",
  gender: "Male",
  studentId: 2809,
  departmentName: "Medical",
  isStudent: false,
};

// variable type alias
type Username = string;
type Age = number;
type IsLogin = boolean;

const username: Username = "sabbir2809";
const currentAge: Age = 25;
const isLogin: IsLogin = false;

// function type alias
type CheckAdmin = (value: boolean) => boolean;

const checkAdmin: CheckAdmin = (value) => {
  if (value === true) {
    console.log("Admin");
    return true;
  } else {
    console.log("User");
    return false;
  }
};
