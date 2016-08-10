const express = require('express');
const app = express();
const ForecastIO = require('forecast-io')
const forecast = new ForecastIO('762f196987cd213056fcf0697f691ed4')
var forecastData = {};

app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.render('dist/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

forecast
    .latitude('37.8267')            
    .longitude('-122.423')          
    .get()                          
    .then(res => {                  
        
        forecastData = res;
        console.log(forecastData);
    })
    .catch(err => {                 
        console.log(err)
    })

app.get( '/forecast', function ( req, res ) {
	res.send(forecastData);
});