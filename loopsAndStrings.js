// for loop

// while loop

// do-while loop

// for-of loop (strings and arrays)
// str = "stringsAndArrays";
// for(let i of str){
//     console.log(i);
// }

//for-in loop (used for objects and arrays)
// let student = {
//     age: 20,
//     name: "abc"
// };
// for(let key in student){
//     console.log(key,student[key]);
// }

//Practice
// let gameNum = 25;
// let userNum = prompt("Enter the number; ");
// while(gameNum!=userNum){
//     console.log("Enter the number again: ");
//     userNum = prompt("Enter the number; ");
// }
// console.log("You won!");

//Strings
//tempelate literals
// let str =    `special string`;

// let student = {
//     age: 20,
//     name: "abc"
// };

// console.log(`The name is ${student.name} and the age is ${student.age}`);
// console.log ("The name is", student.name, "and the age is ", student.age);

//Practice
let name = prompt("Enter name: ");
let username = `@${name}${name.length}`;
console.log(username);