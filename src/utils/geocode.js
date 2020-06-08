const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFzb25sZWVqaW4iLCJhIjoiY2tiNXVsbnhsMThxNjJzcDdycHdlaG1kbSJ9.-6fO-IRV-64iTiIXchfICA&limit=1';

    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('error occured', undefined)
        } else if (!body.features || body.features.length === 0) {
            callback('unable to find', undefined)
        } else {
            const [longitude, latitude] = body.features[0].center;
            callback(undefined, {
                longitude: longitude, 
                latitude : latitude,
                location: body.features[0].place_name
            })
        }
    });

}

module.exports = geocode