"use strict";
var _a, _b;
// Ternary operator
const userAge = 25;
const isAdult = userAge >= 18 ? "Adult" : "Teen";
console.log(isAdult);
// nullish coalescing operator (null/undefined) decision making
const isAuthenticated = "";
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1 }, { result2 });
const newUser = {
    name: "Sabbir",
    address: {
        city: "Dhaka",
        road: "Singair",
        presentAddress: "Kanainagar",
    },
};
const userAddress = (_b = (_a = newUser === null || newUser === void 0 ? void 0 : newUser.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Account";
console.log({ userAddress });
