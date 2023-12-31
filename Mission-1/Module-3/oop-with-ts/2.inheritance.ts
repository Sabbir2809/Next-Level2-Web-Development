// Inheritance in oop
// Person Common Class
class Person {
  constructor(public id: number, public name: string, public email: string) {}

  getSleep(numOfHours: number) {
    console.log(`${this.name} will sleep for ${numOfHours}`);
  }
}

// extents Parent Class Person
class Student extends Person {
  semester: string;
  department: string;

  constructor(id: number, name: string, email: string, department: string, semester: string) {
    super(id, name, email);
    this.semester = semester;
    this.department = department;
  }

  getStudy(numOfHours: number) {
    console.log(`${this.name} daily study ${numOfHours} Hours`);
  }
}
const student = new Student(2809, "Sabbir", "sabbir@gmail.com", "Final Year", "CSE");
console.log(student.email);
console.log(student.getSleep(5));
console.log(student.getStudy(4));

// extents Parent Class Person
class Teacher extends Person {
  constructor(
    id: number,
    name: string,
    email: string,
    public department: string,
    public designation: string
  ) {
    super(id, name, email);
    this.department = department;
    this.designation = designation;
  }
  takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass} Classes`);
  }
}

const teacher = new Teacher(1, "Aminul Hoque", "aminul.hoque@gmail.com", "CSE", "Assistance Professor");
console.log(teacher.designation);
console.log(teacher.takeClass(6));
console.log(teacher.getSleep(5));
