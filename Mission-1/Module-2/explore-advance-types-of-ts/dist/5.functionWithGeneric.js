"use strict";
// function with generics
const createArrayWithGeneric1 = (params) => {
    return [params];
};
const res2 = createArrayWithGeneric1("Bangladesh");
const res3 = createArrayWithGeneric1(true);
const res4 = createArrayWithGeneric1(2809);
const res5 = createArrayWithGeneric1({ name: "Sabbir", age: 25 });
// Tuple
const createTupleWithGeneric = (value1, value2) => {
    return [value1, value2];
};
const res6 = createTupleWithGeneric("Sabbir", 25);
const res7 = createTupleWithGeneric("Sabbir", "student");
const res8 = createTupleWithGeneric(false, {
    name: "Sabbir",
    age: 25,
});
const addCourseToStudent = (student) => {
    const course = "Next Level 2 Web Development";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourseToStudent({ name: "A", email: "a@gmail.com" });
const student2 = addCourseToStudent({
    name: "B",
    email: "b@gmail.com",
    isCompleteLevel1: true,
});
