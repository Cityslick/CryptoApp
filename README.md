# CryptoTracker

![WIREFRAME](/public/images/wireframe.jpg)
![SCREENSHOTS](/public/images/CryptoApp-Home.png)
![SCREENSHOTS](/public/images/Dashboard.png)

## OVERVIEW
- This is a cryptocurrency tracker app allowing users to follow the top traded cryptocurrencies.
- Users can save their "favorite" currencies and get real time up to date pricing information
- Allows for a clear visual view of all prices coming in from all the exchanges
- Included a stocktwits newsfeed for each particular currency so users can get a feel for what is being
talked about on social media regarding a specific cryptocurrency

### USER STORIES
As a user I should be able to:
-Authenticate my registration and login
-View my user profile page with my name, my username and the cryptocurrencies that I follow
-View a dashboard page that gives me real pricing
-Click on "More" to learn specifically about each crytocurrency and to view social media trends on that
particular asset
- Click "follow" on a single currency page to add that specific currency to my user profile tracking section
- Click "delete" to remove from my tracking section

### TECHNICAL DISCUSSION

This app uses the following technologies:
HTML/CSS
JAVASCRIPT
NODE.JS
EXPRESS
(EXTRA) NPM MODULES:
STOCKTWITS
NODE-FETCH
JQUERY

Api's:
CRYPTOCOMPARE
STOCKTWITS

### SAMPLE CODE

- Running a front-end API call on a setInterval time loop

```js

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
        $('#'+name+'price').text(`${value.USD.PRICE}`);
        $('#'+name+'open').text(`Open: ${value.USD.OPEN24HOUR}`);
        $('#'+name+'high').text(`High: ${value.USD.HIGH24HOUR}`);
        $('#'+name+'low').text(`Low: ${value.USD.LOW24HOUR}`);
        $('#'+name+'change').text(`${value.USD.CHANGEPCT24HOUR}%`);
        $('#'+name+'mkt').text(`Mkt Cap: ${value.USD.MKTCAP}`);
        $('#'+name+'vol').text(`Volume: ${value.USD.VOLUME24HOUR}`);
        $('#'+name+'supply').text(`Supply: ${value.USD.SUPPLY}`);
        
        if(value.USD.PRICE >= value.USD.OPEN24HOUR) {
            $('#'+name+'container').css('color', '#00FF00');
            console.log('higher');
        } else {
            console.log('lower');
            $('#'+name+'container').css('color', '#FF0000');
        }
    })
}

});
```
### SAMPLE CODE 2

- Running the stocktwits stream API call with database property in url (helper)

```js

function getTweets(req, res, next) {
    Coin.findById(req.params.id)
        .then(coin => {
            return fetch(`https://api.stocktwits.com/api/2/streams/symbol/${coin.handle}.json`);
        }).then(fetchRes => fetchRes.json()).then(jsonRes => {
            res.locals.tweets = jsonRes;
            return next();
        }).catch((err) => {
            console.log(err);
            return next(err);
        });
}



```

### FIXES AND FUTURE ADDITIONS
I definitely want to add more currencies into the mix and utilize perhaps another API that
can deliver financial and technology news (i.e. The Economist, TechCrunch, etc..) to give users
a better overall experience. Additionally would love to update the styling even more. It would
also be great to add in some more specifics regarding each currency as well. 

### ACKNOWLEDGMENTS

Thanks to the following for providing guidance, help and insight:
Ramsey Nasser
J. Silverstein
Drew Mahart
Aury Rodriguez
Carly Warner
Joe DiPieri
Amadou Kante
Ryan Jada

