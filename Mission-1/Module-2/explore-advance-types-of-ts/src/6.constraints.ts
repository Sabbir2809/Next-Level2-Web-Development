{
  // Constraints in typescript
  const addToCourse = <T extends { id: number; name: string; email: string }>(params: T) => {
    const course = "Level 2";
    return {
      ...params,
      course,
    };
  };

  const s1 = addToCourse({ id: 1, name: "A", email: "a@gmail.com", age: 25 });
  const s2 = addToCourse({ id: 2, name: "B", email: "b@gmail.com", age: 25, role: "level2" });
  const s3 = addToCourse({ id: 1, name: "C", email: "c@gmail.com" });

  // Constraint using keyof
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner1 = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // dynamically

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "A",
    age: 1,
    address: "Dhaka",
  };
  const ans1 = getPropertyValue(user, "age");
  // const ans2 = getPropertyValue(user, "emni");
}
