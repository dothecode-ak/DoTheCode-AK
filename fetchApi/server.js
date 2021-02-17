
const express = require('express');
const fetch = require("node-fetch");
var unirest = require('unirest');
var app = express();
const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server is running at  ${PORT}`));

// news api integration
(async () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d9de6711528245afb370f355acb5f759';
    let response = await fetch(url);

    let apidata = await response.json();
    for (var m = 0; m < 2; m++) {
        console.log(apidata.articles[m].title);
        console.log(apidata.articles[m].description);
        console.log(apidata.articles[m].urlToImage);
    }

})();

// gaana.com free api

var req = unirest("GET", "https://devru-gaana-v1.p.rapidapi.com/featuredAlbums.php");

req.headers({
    "x-rapidapi-host": "devru-gaana-v1.p.rapidapi.com",
    "x-rapidapi-key": "4817249bbdmshca86e28734e5b1fp150302jsn8d80882c9560"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
