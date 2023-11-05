"use strict";
{
    // Mapped types
    const arrayOfNumbers = [1, 2, 3, 4, 0];
    // const arrayOfString: string[] = ["1", "2", "3", "4", "5"];
    const arrayOfString = arrayOfNumbers.map((number) => number.toString());
    console.log(arrayOfString);
    // const arrayOfBoolean: boolean[] = [true, false, true, false];
    const arrayOfBoolean = arrayOfNumbers.map((item) => Boolean(item));
    console.log(arrayOfBoolean);
    const area1 = {
        height: "500",
        width: "100",
    };
    console.log(area1);
    const area2 = {
        height: "500",
        width: 100,
    };
    console.log(area2);
}
