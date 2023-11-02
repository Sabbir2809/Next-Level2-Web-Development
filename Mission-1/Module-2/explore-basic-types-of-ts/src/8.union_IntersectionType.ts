// Union(|) and Intersection(&) Type

type FrontendDeveloper = "HTML" | "CSS" | "JavaScript" | "React";
type BackendDeveloper = "Node" | "Express" | "Mongodb" | "JavaScript";
type FullStackDeveloper1 = FrontendDeveloper & BackendDeveloper;
type FullStackDeveloper2 = FrontendDeveloper | BackendDeveloper;

const developer1: FrontendDeveloper = "React";
const developer2: BackendDeveloper = "Express";
const developer3: FullStackDeveloper1 = "JavaScript";
const developer4: FullStackDeveloper2 = "Express";

// object
type DeveloperInfo = {
  name: string;
  email: string;
  gender: "Male" | "Female";
  role: "Admin" | "User";
  position?: FullStackDeveloper2;
};

const newPosition: DeveloperInfo = {
  name: "Sabbir Hossain",
  email: "sabbirto13@gmail.com",
  gender: "Male",
  role: "User",
  position: "React",
};

type Dev = {
  level: "level-1" | "level-2";
  position: FullStackDeveloper1;
};

const dev1 = {
  level: "level-2",
  position: "JavaScript",
};
console.log(dev1);
