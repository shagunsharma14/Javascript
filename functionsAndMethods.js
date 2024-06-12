// function myFunction(msg, msgg){
//     console.log(msg);
// }
// myFunction("msg", "hello");

//Sum of two numbers
// function sum(x, y){
//     r = x+y;
//     return r;
// }
// let result = sum(8,9);
// console.log(result);

//Arrow function
//sum of two number
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };
// arrowSum(5,5);

// //multiplication
// const arrowMult=(a,b)=>{
//     console.log(a*b)
// };
// arrowMult(5,5)

// //print hello
// const printHello = ()=> console.log("Hello");
// printHello()  

//forEach function
// let arr = [2,4,5,6,7];
// arr.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })

//Practice question
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// })

//map method
// let arr = [1,2,3,4,5];
// let newArr = arr.map((val)=>{
//     return val*val;
// })
// console.log(newArr);

//filter method
// let arr = [1,2,3,4,5,6,7,8,9];
// let oddArr = arr.filter((val)=>{
//     return val%2!==0;
// })
// console.log(oddArr)

//Reduce method
// let arr =[1,3,55,6,6]
// let output = arr.reduce((prev, curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output)

//Practice
// let arr = [87, 93, 64, 99, 86];
// let newArr = arr.filter((val)=>{
//     return val>=90;
// })
// console.log(newArr);

//Practice
let userInput = prompt("Enter n: ");
let arr= [];
for(let i=1; i<=userInput; i++){
    arr[i-1] = i;
}
console.log(arr);
let sumArr = arr.reduce((prv, curr)=>{
    return prv+curr;
});
console.log(sumArr);
let productArr = arr.reduce((prv, curr)=>{
    return prv*curr;
})
console.log(productArr);