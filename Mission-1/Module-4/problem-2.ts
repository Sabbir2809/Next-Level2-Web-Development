// Problem 2: Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

const getAddressCity = (person: Person): string | undefined => {
  return person["address"]?.["city"];
};

const user: Person = {
  name: "Sabbir",
  age: 25,
  address: {
    city: "Dhaka",
    street: "123 Main Street",
  },
  phone: "018",
};
const city = getAddressCity(user);
console.log(city);
