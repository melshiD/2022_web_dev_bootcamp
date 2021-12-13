const fs = require('fs');
// fs.mkdir('temp', { recursive: true }, (err) =>{
//     console.log('in the callback');
//     if(err) throw err;
// });
// console.log('I come after mkdir')

let folderName = process.argv[2] || 'Project';


// fs.writeFileSync(`${folderName}.html, ${folderName}.css, ${folderName}.js`)
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/test.html`, '');
    fs.writeFileSync(`${folderName}/test.js`, '');
    fs.writeFileSync(`${folderName}/test.css`, '');
} catch(e){
    console.log('something has gone wrong');
    console.log('error: ' + e);
}