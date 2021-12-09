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
            if(delay > 4000){
                reject('connection timeout')
            }
            else{
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}

let request = fakeRequestPromise('www.melshtastic.com/yearInReview')
            .then(
                () => {
                    console.log(request);
                    console.log('it worked');
                }
            ).catch(
                ()=>{
                    console.log(request);
                    console.log('timeout!');
                }
            );

console.log(request);
request.then(console.log(request));
setTimeout(()=>console.log(request), 5000);