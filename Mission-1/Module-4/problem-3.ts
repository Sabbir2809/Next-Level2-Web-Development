// Problem 3: Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

class Cat {
  name: string;
  color: string;
  sound: string;
  constructor(name: string, color: string, sound: string) {
    this.name = name;
    this.sound = sound;
    this.color = color;
  }
}

const isCat = (obj: Cat): obj is Cat => {
  return obj instanceof Cat;
};

const getAnimal = (obj: Cat): void => {
  if (isCat(obj)) {
    console.log("Yes, it's a cat.");
  } else {
    console.log("No, it's not a cat.");
  }
};

const cat = new Cat("Bullurany", "Black", "Meaw Meaw");
getAnimal(cat);
getAnimal({ name: "a", color: "Black", sound: "b" });
