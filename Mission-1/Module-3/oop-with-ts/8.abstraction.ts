// Abstraction

// idea
interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

// real implementation
class Car1 implements Vehicle {
  startEngine(): void {
    console.log(`I am starting the car engine`);
  }
  stopEngine(): void {
    console.log(`I am stopping the car engine`);
  }
  move(): void {
    console.log(`I am moving the car`);
  }
  test(): void {
    console.log("I am just testing");
  }
}

const toyotaCar1 = new Car1();
toyotaCar1.startEngine();

// abstract class
// idea
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
  test(): void {
    console.log("I am just testing");
  }
}

// implementation
class ToyotaCar extends Car2 {
  startEngine(): void {
    console.log(`I am starting the car engine`);
  }
  stopEngine(): void {
    console.log(`I am stopping the car engine`);
  }
  move(): void {
    console.log(`I am moving the car`);
  }
}

const toyotaCar2 = new ToyotaCar();
console.log(toyotaCar2.test());
