"use strict";
{
    // Constraints in typescript
    const addToCourse = (params) => {
        const course = "Level 2";
        return Object.assign(Object.assign({}, params), { course });
    };
    const s1 = addToCourse({ id: 1, name: "A", email: "a@gmail.com", age: 25 });
    const s2 = addToCourse({ id: 2, name: "B", email: "b@gmail.com", age: 25, role: "level2" });
    const s3 = addToCourse({ id: 1, name: "C", email: "c@gmail.com" });
    const getPropertyValue = (obj, key) => {
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
