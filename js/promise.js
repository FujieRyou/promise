// console.log("1");

// new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("2(1秒後に表示)");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("3");
// })

// const promise = new Promise((resolve,reject)=>{
//     resolve("resolveした");
// }).then((val)=>{
//     console.log(val);
// })

const promise = new Promise((resolve,reject)=>{
    reject()
}).then(()=>{
    console.log("resolveしたよ");
}).catch(()=>{
    console.log("rejectしたよ");
})