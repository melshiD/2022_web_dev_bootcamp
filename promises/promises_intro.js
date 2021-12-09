// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() *4500) + 500;
//     setTimeout(()=>{
//         if(delay > 4000){
//             failure('Connection Timedout:')
//         }
//         else{
//             success(`here is your fake data from ${url}`)
//         }
//     }, delay)
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 20000){
                reject('connection timeout')
            }
            else{
                resolve(`here is your fake data from ${url}`)
            }
        }, 1)
    })
}

// let request = fakeRequestPromise('www.melshtastic.com/yearInReview')
//             .then(
//                 () => {
//                     console.log(request);
//                     console.log('it worked');
//                 }
//             )
//             .catch(
//                 ()=>{
//                     console.log(request);
//                     console.log('timeout!');
//                 }
//             );

// console.log(request);
// request.then(console.log(request));
// setTimeout(()=>console.log(request), 5000);

const newPromise = fakeRequestPromise('www.melshtastic.com/yearInReview')
                .then((data)=> {
                    console.log(data)
                    console.log('it worked')
                    printPromise()
                    return fakeRequestPromise('www.melshtastic.come/yearInReview/Celestophone')
                })
                .then((data)=>{
                    console.log(data)
                    console.log('it worked page 2')
                    printPromise()
                    return fakeRequestPromise('www.melshtastic.com/yearInReview/Celestophone/NFT_sample_library')
                }).then((data)=>console.log(data))
                .catch((data)=>{
                    console.log(data)
                    printPromise()
                    console.log('Oh NO!  Request Failed')
                });

const printPromise = ()=> console.log(newPromise);


new Promise((resolve, reject) => {
    resolve();
})