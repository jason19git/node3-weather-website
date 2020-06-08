const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11752d7652f20e7f3c2c4041b2172703&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + 
                " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " +
                body.current.humidity + "%.");
        }
    });
}

module.exports = forecast;
