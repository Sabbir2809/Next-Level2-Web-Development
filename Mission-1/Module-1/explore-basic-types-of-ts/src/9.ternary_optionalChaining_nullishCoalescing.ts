// Ternary operator
const userAge: number = 25;

const isAdult = userAge >= 18 ? "Adult" : "Teen";
console.log(isAdult);

// nullish coalescing operator (null/undefined) decision making
const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1 }, { result2 });

// optional chaining(?.)
type TNew = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;
  };
};

const newUser: TNew = {
  name: "Sabbir",
  address: {
    city: "Dhaka",
    road: "Singair",
    presentAddress: "Kanainagar",
  },
};

const userAddress = newUser?.address?.permanentAddress ?? "No Permanent Address";
console.log({ userAddress });
