/* Destructuring: Object */
const info = {
  id: 2809,
  name: {
    firstName: "Sabbir",
    lastName: "Hossain",
  },
  contactNo: "01829723692",
  address: "Singair",
};

const {
  address,
  name: { firstName },
} = info;
console.log(firstName);

/* Destructuring: Array */
const boysFriend: string[] = ["Sabbir", "Salkin", "Komol", "Mizan", "Maruf"];

const [, bestFriend, ...rest] = boysFriend;
console.log(rest);
