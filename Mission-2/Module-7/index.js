// const localModule = require("./localModule1");
// const { name, add } = require("./localModule1");
const { name: fullName, add: sum } = require("./localModule2");

// console.log(localModule.add(2, 3));
// console.log(localModule.name);
// console.log(name);
// console.log(add(2, 3));
console.log(fullName);
console.log(sum(2, 3, 5));

// built in module
const path = require("path");
console.log(path.dirname("C:/Users/DCL/Desktop/next-level2-web-development/Mission-2/Module-7/learn-nodejs"));
console.log(path.parse("C:/Users/DCL/Desktop/next-level2-web-development/Mission-2/Module-7/learn-nodejs"));
console.log(
  path.join("C:/Users/DCL/Desktop/next-level2-web-development/Mission-2/Module-7/learn-nodejs", "index.js")
);
