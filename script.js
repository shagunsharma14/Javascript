// let h2 = document.querySelector("body > h2");
// console.log(h2.innerText);
// let text = h2.innerText+" Apna College"
// h2.innerText = text;
let divs = document.getElementsByClassName("box");
let idx = 1;
for (let div of divs){
    div.innerText =  `New element index is: ${idx}`;
    idx++;
    console.log(div.innerText);
}