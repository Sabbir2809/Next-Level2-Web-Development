// Problem 5: Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: number;
}
type CarAndDriver = Car & Driver;

const combineProperties = (car: Car, driver: Driver): CarAndDriver => {
  return {
    ...car,
    ...driver,
  };
};

const car: Car = {
  make: "A",
  model: "B",
  year: 2023,
};
const driver: Driver = {
  name: "C",
  licenseNumber: 12345,
};

console.log(combineProperties(car, driver));
