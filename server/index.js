const express = require('express');

const path = require('path');

const db = require('./db.js');

const compression = require('compression');

const app = express();

const PORT = 3001;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());

// Uncomment if you want to serve the bundle locally instead of S3
app.get('/bundle.js', function(req, res) {
    res.sendFile("../client/bundle.js", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent: bundle.js')
        }
    })
});

app.get('/restaurants', function(req, res) {
    db.query((err, results) => {
        if (err) {
            res.status(500);
            res.end(err);
        } else {
            res.end(JSON.stringify(results));
        }
    })
});

// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));
