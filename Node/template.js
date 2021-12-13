const fs = require('fs');
// fs.mkdir('temp', { recursive: true }, (err) =>{
//     console.log('in the callback');
//     if(err) throw err;
// });
// console.log('I come after mkdir')

let folderName = process.argv[2] || 'Project';
folderName = folderName.toString();
fs.mkdirSync(folderName);

// fs.writeFileSync(`${folderName}.html, ${folderName}.css, ${folderName}.js`)
fs.writeFileSync(`${folderName}/test.html`);
fs.writeFileSync(`${folderName}/test.js`);
fs.writeFileSync(`${folderName}/test.css`);