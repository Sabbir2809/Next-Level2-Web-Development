{
  // Utility Types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick
  type NameAge = Pick<Person, "name" | "age">;
  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;
  // Required
  type PersonRequired = Required<Person>;
  // Partial
  type PersonPartial = Partial<Person>;
  // Readonly
  type PersonReadonly = Readonly<Person>;
  // const user1: PersonReadonly = { name: "A", age: 1, contactNo: "018" };
  // user1.name = ""

  // Record
  type MyObj = Record<string, unknown>;
  const obj1: MyObj = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
  };
  console.log(obj1);
}
