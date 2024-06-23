
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
    
    // (async function getAllData(){
    //     console.log("getting data1...");
    //     await getData(1);
    //     console.log("getting data2...");
    //     await getData(2);
    //     console.log("getting data3...");
    //     await getData(3);
    //     console.log("All data received");
    
    // })();//can only be executed once