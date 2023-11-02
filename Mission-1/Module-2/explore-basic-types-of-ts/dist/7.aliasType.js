"use strict";
/* Type Alias */
const student1 = {
    fullName: "Md Sabbir Hossain",
    gender: "Male",
    studentId: 2809,
    departmentName: "CSE",
    contactNo: "01829723692",
    isStudent: true,
    address: "Singair",
};
const student2 = {
    fullName: "Ataur Rahman Rubel",
    gender: "Male",
    studentId: 2809,
    departmentName: "Medical",
    isStudent: false,
};
const username = "sabbir2809";
const currentAge = 25;
const isLogin = false;
const checkAdmin = (value) => {
    if (value === true) {
        console.log("Admin");
        return true;
    }
    else {
        console.log("User");
        return false;
    }
};
