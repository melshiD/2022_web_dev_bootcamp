async function hello(){
    
}

const asyncFunc = async() => {
    throw 'lalala';
    // return 'lalala';
}

asyncFunc().then(data => {
    console.log(data);
})
.catch(err => {
    console.log('you threw an error' + err);
})

