"use strict";
/* Rest Operator */
const greetings = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetings("Salkin", "Komol", "Mizan");
