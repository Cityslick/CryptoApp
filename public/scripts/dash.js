$(function() {
    console.log('dash.js is loaded!')
});



$(document).ready(function() {
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,LTC,XEM,XRP,DASH,ZEC,DGB&tsyms=USD',
        success: function(data) {
                console.log(data);
                getCoinData(data);
        }
    })
    function getCoinData(data) {
        console.log('getting prices...');
        for (coin in data.DISPLAY) {
            console.log(coin);
        }

    }
});





