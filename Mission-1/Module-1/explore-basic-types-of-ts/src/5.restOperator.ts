/* Rest Operator */
const greetings = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greetings("Salkin", "Komol", "Mizan");
