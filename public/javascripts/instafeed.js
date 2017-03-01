var Instafeed = require('instafeed.js');

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: process.env.ID_CLIENT_ID
});

feed.run();
