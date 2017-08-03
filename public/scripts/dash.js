$(function() {
    console.log('dash.js is loaded!')
});



$(document).ready(function() {
    console.log('getting prices...');
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,LTC,XEM,XRP,DASH,ZEC,DGB&tsyms=USD',
        success: function(data) {
                console.log(data);
                getCoinData(data);
        }
    })
    function getCoinData(data) {
        for (price in data.DISPLAY) {
            if (price === currency[0]) {
                console.log(data.DISPLAY.currency[0].USD);
            }
        }

    }
});




