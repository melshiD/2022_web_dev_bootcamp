const figlet = require('figlet');
const cowSay = require('cowsay');

const message = "Look Ma! No Hands!"

figlet(message, function(err, data){
    if(err){
        console.log('sorry');
        return;
    }
    console.log(data);
});