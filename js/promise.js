// setTimeout(()=>console.log(3),1000);
// setTimeout(()=>console.log(2),1000);
// setTimeout(()=>console.log(1),1000);
// ↑の処理じゃカウントダウンにはならない。

// setTimeout(()=>{
//     console.log(3);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(1);
//         },1000)
//     },1000)
// },1000)
// ↑の処理じゃカウントダウンにはなるがコードがネストされてわかりにくい。これがコールバック地獄

new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(3);
        resolve()
    },1000)
}).then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(2);
            resolve();
        },1000)
    })
}).then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },1000)
    })
})
// ↑ネストが解消され見やすくなった


new Promise ((resolve,reject)=>{
    resolve("こんにちわ")
}).then(res => console.log(res))