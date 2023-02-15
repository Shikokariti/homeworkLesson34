let bitcoinRate = fetch('https://data.binance.com/api/v3/ticker/24hr').then((response)=>response.json());
console.log(bitcoinRate);
