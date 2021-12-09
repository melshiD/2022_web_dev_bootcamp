const myReq = new XMLHttpRequest();

myReq.onload = function(){
    console.log('all done with requerst');
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

myReq.onerror = function(){
    console.log('error!');
    console.log(this);
}

myReq.open('GET', 'https://api.cryptonator.com/api/full/eth-usd');
myReq.send();


//-----------------------
//Fetch api exposure
const ethToUsd = () => fetch('https://api.cryptonator.com/api/full/eth-usd')
                        .then(res => {
                            console.log('Waiting to parse response...', res)
                            return res.json()
                        })
                        .then(data => {
                            console.log('data parsed: ', data)
                        }
                        .catch(e => {
                            console.log('error', e)
                        })


const fetchCrytopPrice = async () => {
    const res = await fetch('https://api.cryptonator.com/api/full/eth-usd');
    const data = await res.json();
    console.log(data.ticker.price);
}