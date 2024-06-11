

let marks = prompt("Enter the marks: ");
if(marks>=80 && marks<=100){
    console.log("A");
}else if(marks>=70 && marks<=89){
    console.log("B");
}else if(marks>=60 && marks<=69){
    console.log("C");
}else if(marks>=50 && marks<=59){
    console.log("D");
}else if(marks>=0 && marks<=49){
    console.log("F");
}else{
    console.log("Invalid Input");
}