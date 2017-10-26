var http = require('http');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=" + apikey;

// we are going to do sdomething.... this is the long way to do it.

var weatherAsData = '';


// http module has a get method. it takes 2 args:
// 1. Where
// 2. Code to run when back (with the data)
var request = http.get(weatherUrl, (theResponse) => {
    // console.log(theResponse)
    // console.log(theResponse.statusCode)
    theResponse.on('data', (chunkOfData) => {
        // console.log(chunkOfData)
        weatherAsData += chunkOfData;
    });
    theResponse.on('end', () => {
        console.log(weatherAsData);
    });
});

var request = require('request');

var weatherAsData = "";

request.get(weatherUrl, (error, response, weatherData) => {
    console.log(JSON.parse(weatherData))
})