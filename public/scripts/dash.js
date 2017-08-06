$(function() {
    console.log('dash.js is loaded!')
});



$(document).ready(function() {
    // let coinList = [];
    function update() {
        $.ajax({
        url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,LTC,XEM,XRP,DASH,ZEC,DGB&tsyms=USD',
        success: function(data) {
                console.log(data);
                showData(data);
        }
    });
}
update();
setInterval(update, 5000);

function showData(data){
    console.log(data)
    Object.keys(data.DISPLAY).map((name, i) => {
        const value = data.DISPLAY[name];
        $('#'+name+'price').text(`Price: ${value.USD.PRICE}`);
        $('#'+name+'open').text(`Open: ${value.USD.OPEN24HOUR}`);
        $('#'+name+'high').text(`High: ${value.USD.HIGH24HOUR}`);
        $('#'+name+'low').text(`Low: ${value.USD.LOW24HOUR}`);
        $('#'+name+'change').text(`Pct Change ${value.USD.CHANGEPCT24HOUR}%`);
        
        if(value.USD.PRICE >= value.USD.OPEN24HOUR) {
            $('#'+name+'container').css('color', '#00FF00');
            console.log('higher');
        } else {
            console.log('lower');
            $('#'+name+'container').css('color', '#FF0000');
        }
    })

    // $('#bitcoin').text(data.DISPLAY[coin].USD);
}

    // function showData(coinList) {
    //     console.log(coinList[0].PRICE);
    //     $('#bitcoin').text(coinList[0].PRICE);
    // };
    // function getCoinData(data) {
    //     console.log('getting prices...');  
    //     for (coin in data.DISPLAY) {
    //         coinList.push(data.DISPLAY[coin].USD);
    //     }
    //     console.log(coinList);
    //     showData(coinList);
    // }
});







