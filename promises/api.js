let thisJson = {"ticker": { "base": "BTC", "target": "USD", "price": "443.7807865468", "volume": "31720.1493969300", "change": "0.3766203596" }, "timestamp": 1399490941, "success": true, "error": "" };
// const newData = JSON.parse(thisJson);
console.log(thisJson.ticker.price);

let newJson = JSON.stringify(thisJson);

console.log(newJson);

//how come the first console.log() doesn't have quotes?  
//It seems like JS is parsing the JSON for me automatically at the onset