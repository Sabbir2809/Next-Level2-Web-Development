// function with generics

const createArrayWithGeneric1 = <T>(params: T): T[] => {
  return [params];
};
const res2 = createArrayWithGeneric1<string>("Bangladesh");
const res3 = createArrayWithGeneric1<boolean>(true);
const res4 = createArrayWithGeneric1<number>(2809);
const res5 = createArrayWithGeneric1<{ name: string; age: number }>({ name: "Sabbir", age: 25 });

// Tuple
const createTupleWithGeneric = <X, Y>(value1: X, value2: Y): [X, Y] => {
  return [value1, value2];
};
const res6 = createTupleWithGeneric<string, number>("Sabbir", 25);
const res7 = createTupleWithGeneric<string, string>("Sabbir", "student");
const res8 = createTupleWithGeneric<boolean, { name: string; age: number }>(false, {
  name: "Sabbir",
  age: 25,
});

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level 2 Web Development";
  return {
    ...student,
    course,
  };
};
const student1 = addCourseToStudent<{ name: string; email: string }>({ name: "A", email: "a@gmail.com" });
const student2 = addCourseToStudent<{ name: string; email: string; isCompleteLevel1: boolean }>({
  name: "B",
  email: "b@gmail.com",
  isCompleteLevel1: true,
});
