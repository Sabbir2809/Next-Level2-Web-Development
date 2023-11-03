"use strict";
// nullable type
const searchName = (value) => {
    if (value) {
        console.log("Searching");
    }
    else {
        console.log("There is Nothing to Search");
    }
};
searchName(null);
// unknown type
const getSpeedInMeterPerSecond = (value) => {
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }
    else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }
    else {
        console.log(`Wrong Input`);
    }
};
getSpeedInMeterPerSecond(null);
// never type
function throwError(msg) {
    throw new Error(msg);
}
throwError("Invalid Email");
