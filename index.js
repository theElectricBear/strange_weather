const express = require('express');
const app = express();
const ForecastIO = require('forecast-io')
const forecast = new ForecastIO('762f196987cd213056fcf0697f691ed4')

app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.render('dist/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get( '/forecast', function ( req, res ) {
  console.log(req.query);
  forecast
    .latitude(req.query.lat)            
    .longitude(req.query.long)          
    .get()                          
    .then(response => {                  
        res.send(response);
    })
    .catch(err => {                 
        console.log(err)
    }) 
});