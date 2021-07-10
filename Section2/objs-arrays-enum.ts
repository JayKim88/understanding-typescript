// const person: { name: string; age: number } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type
// } = {
//   name: "jay",
//   age: 30,
//   hobbies: ["sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
//values are allocated as 0, 1, 2. But specific number or string can be allocated as well

const person = {
  name: "jay",
  age: 30,
  hobbies: ["sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); //push is exception in tuple
// person.role[1] = "hello";

// console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
