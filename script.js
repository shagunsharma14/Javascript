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
let btn1 = document.querySelector("#btn1");
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
currMode = "white";
btn1.addEventListener("click", ()=>{
    if(currMode === "white"){
        document.body.style.backgroundColor = "black";
        currMode = "dark";
    } else{
        document.body.style.backgroundColor = "white";
        currMode = "white";
    }
    console.log(currMode)
});