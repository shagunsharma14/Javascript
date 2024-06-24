// let h2 = document.querySelector("body > h2");
// console.log(h2.innerText);
// let text = h2.innerText+" Apna College"
// h2.innerText = text;
// let divs = document.getElementsByClassName("box");
// let idx = 1;
// for (let div of divs){
//     div.innerText =  `New element index is: ${idx}`;
//     idx++;
//     console.log(div.innerText);
// } 

// //Practice question
// let button = document.createElement("button");
// button.innerText = "click me";  

// button.style.backgroundColor = "red";
// button.style.color = "white";

// console.dir(button);
// document.querySelector("body").prepend(button);


//Practice Question
// let para = document.querySelector("p");
// para.classList.add("newClass");
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e)=>{
//     console.log("btn1 was clicked!");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };
// btn1.addEventListener("click",(e)=>{
//     console.log("btn1 was clicked!");
// });
// let handler = ()=>{
//     console.log("btn1 was clicked again!");
// }
// btn1.addEventListener("click",handler);
// btn1.removeEventListener("click", handler);
// currMode = "white";
// btn1.addEventListener("click", ()=>{
//     if(currMode === "white"){
//         document.body.style.backgroundColor = "black";
//         currMode = "dark";
//     } else{
//         document.body.style.backgroundColor = "white";
//         currMode = "white";
//     }                                                                                
//     console.log(currMode)
// });
// classes and objects
// class toyota{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new toyota(); 
// fortuner.setBrand("Fortuner");

// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("ntg");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);
//         this.branch = this.branch;
//     };
//     work(){
//         console.log("solve poblems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let shObj = new Engineer();

// console.log(shObj.work);
// let chemEngObj = new Engineer("Shagun");

//Practice question
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("Data loading...");
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//         }
//     editData(){
//         console.log("Data editing...");
//     }
// }
// let user1 = new User("User1", "abc@gmail.com");
// console.log(user1.viewData());

// let adminObj = new Admin("adminName", "admin@abc.com");
// console.log(adminObj.editData());

//callback
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000); 
// }

// getData(1, ()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })

// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promis");
//         // resolve("success");
//         reject("Error");    })
// }

// //resolve
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

// //reject
// promise.catch((err)=>{
//     console.log("reject", err);
// });

//Promise chain
// function asycFunction1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("success");
//         },4000);
//     });
// }

// function asycFunction2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fectchin data1...");
// let p1 = asycFunction1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fecching data2...");
//     let p2 = asycFunction2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

// console.log("fetching data1...");
// asycFunction1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2...");
//     asycFunction2().then((res)=>{
//         console.log(res);
//     });
// });
// console.log("fetching data2...");
// let p2 = asycFunction2();
// p2.then((res)=>{
//     console.log(res);
// });

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataId);
//             resolve("success");
//         },2000);
//     });
// }
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })

//Async-Await
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
//     });
// }
// async function getWeatherData(){
//     await api();
//     await api();
// }

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
// });
// }

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("All data received");

// }
// getAllData();





//callback
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000); 
// }

// getData(1, ()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })


//Promise chain
// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataId);
//             resolve("success");
//         },2000);
//     });
// }
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })


// Async-await
//function getData(dataId){
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             console.log("data", dataId);
    //             resolve("success");
    //         }, 2000);
    // });
    // }
    
    // async function getAllData(){
    //     console.log("getting data1...");
    //     await getData(1);
    //     console.log("getting data2...");
    //     await getData(2);
    //     console.log("getting data3...");
    //     await getData(3);
    //     console.log("All data received");
    
    // }
    // getAllData();

    