const fs = require('fs');
// fs.mkdir('temp', { recursive: true }, (err) =>{
//     console.log('in the callback');
//     if(err) throw err;
// });
// console.log('I come after mkdir')
fs.mkdirSync('cats');