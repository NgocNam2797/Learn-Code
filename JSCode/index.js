
// Tìm hiểu về Promise
// slepp=(ms)=>{
//     return new Promise((res)=>{
//         setTimeout(res, ms)
//     })
// }

// slepp(1000)
//     .then( ()=>{
//         console.log(1);
//         return slepp(1000)
//     })
//     .then (()=>{
//         console.log(2);
//         // return slepp(1000)
//         return new Promise((resole, reject)=>{
//             reject('loi roi');
//         })
//     })
//     .then (()=>{
//         console.log(3);
//         return slepp(1000)
//     })
//     .then (()=>{
//         console.log(4);
//         return slepp(1000)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// const promise= Promise.resolve('thanh cong');
// const promise= Promise.reject(' khong thanh cong');
// promise.then((res)=>{
//     console.log('resres',res);
// })
// .catch((err)=>{
//     console.log(err)
// })

const promise1= new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([1,2])
        },200)
})

// const promise2= new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve([3,4,5])
//     },5000)
// })
const promise2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('errr')
    },10)
})


// Nếu một trong 2 promise1 và promise2 bị lỗi thì nhảy vào catch
// Promise.all([promise1,promise2])
// .then((result)=>{
//     const array= [...result[0],...result[1]];
//     console.log(array)

// })
// .catch((err)=>{
//     console.log(err)
// })

Promise.race([promise1, promise2])
.then((res)=>{
    console.log('resresres',res);
})
.catch((err)=>{
    console.log(err)
})