// Type Guard Using Typeof and in
{
  type NumberString = number | string;
  const add = (param1: NumberString, param2: NumberString) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(5, 5);
  console.log(result1);
  const result2 = add("1", "2");
  console.log(result2);

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const user1: NormalUser = {
    name: "Sabbir",
  };
  const user2: AdminUser = {
    name: "Sabbir",
    role: "Admin",
  };
  getUser(user1);
  getUser(user2);
}

// instanceof guard
{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`I am Making Sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am Barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log(`I am Meawing`);
    }
  }

  // smart handling
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  // const getAnimal = (animal: Animal) => {
  //   if (animal instanceof Dog) {
  //     animal.makeBark();
  //   } else if (animal instanceof Cat) {
  //     animal.makeMeaw();
  //   } else {
  //     animal.makeSound();
  //   }
  // };

  const dog = new Dog("Tryson", "Dog");
  const cat = new Cat("Billu", "Dog");
  getAnimal(cat);
}
