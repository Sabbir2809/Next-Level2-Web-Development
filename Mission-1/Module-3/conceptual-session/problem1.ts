type User = {
  id: number;
  name: string;
};
const users: Array<User> = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "C",
  },
  {
    id: 3,
    name: "D",
  },
];

const getPropertyFromArray = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  return array.map((obj) => obj[key]);
};
console.log(getPropertyFromArray(users, "name"));
