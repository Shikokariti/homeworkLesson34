let displayPrice = document.getElementById('displayRate');

promiseRun();
function promiseRun() {
   const a = fetch('https://data.binance.com/api/v3/ticker/24hr').then((response)=>response.json()).then((response)=>renderHTML(response)).catch((errorResponse)=>displayError(errorResponse));
    console.log(a);
}
function renderHTML(response) {
    console.log(response);
    let lastPrice = response.find(item => item.symbol == 'BTCUSDT');
    displayPrice.innerText = lastPrice.lastPrice;
    console.log(lastPrice.lastPrice);
    setTimeout(promiseRun,1000);
}
function displayError(errorResponse) {
    alert(errorResponse);
}
