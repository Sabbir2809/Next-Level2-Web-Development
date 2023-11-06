// 1. class
class Animal {
  // 2. properties
  // public name: string;
  // public species: string;
  // public sound: string;
  // 4. constructor
  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  // 5. method
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

// 6. create object or instance
const cat = new Animal("Billurany", "Cat", "Meaw Meaw");
console.log(cat.name);

const dog = new Animal("Tryson", "Dog", "Ghew Ghew");
console.log(dog.sound);

// 7. method calling
dog.makeSound();
