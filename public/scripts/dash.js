$(function() {
    console.log('dash.js is loaded!')
});



$(document).ready(function() {
    let bitcoinData;
    console.log('getting prices...');
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,LTC,XEM,XRP,DASH,ZEC,DGB&tsyms=USD',
        success: function(data) {
                console.log(data);
                bitcoinData = data;
        }
    })
    function getCoinData(data) {
        for (price in data.DISPLAY) {
            console.log(price);
        }

    }
});





