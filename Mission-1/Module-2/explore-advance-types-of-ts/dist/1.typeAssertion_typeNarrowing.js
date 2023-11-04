"use strict";
// Type assertion / type narrowing (as)
let anything;
anything = "Next Level Developer";
anything = 2;
// (anything as number)
const kgToGm = (value) => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `The Converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
};
const result1 = kgToGm(1000);
const result2 = kgToGm("1000");
try {
    console.log(anything);
}
catch (error) {
    console.log(error.message);
}
