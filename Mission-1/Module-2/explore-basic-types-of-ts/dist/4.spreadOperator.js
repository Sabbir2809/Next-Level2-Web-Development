"use strict";
{
    /* Spread Operator: Array */
    const boysFriend = ["Sabbir", "Salkin", "Komol", "Mizan", "Maruf"];
    const girlsFriend = ["Shafa", "Sajia", "Zafrin"];
    const friendZone = [...boysFriend, ...girlsFriend];
    console.log(friendZone);
    /* Spread Operator: Object */
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), { mentors2 });
    console.log(mentorList);
}
