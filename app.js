var express = require('express');
var morgan = require('morgan');
var path = require('path');

var log_format = ':method :status :url';
var logger = morgan(log_format);
var app = express();


// Send page
function send_page(res, page_name) {
    var file_path = path.join(__dirname, 'public/html/', page_name);
    res.sendFile(file_path, function(err) {
        if (err) {
            res.status(404);
            send_page(res, 'not-found.html');
        }
    });
}


// Log
app.use(logger);

// Files
app.use(express.static('public'));

// Home
app.get('/', function(req, res) {
    send_page(res, 'home.html');
});

// Any page
app.get(/.+/, function(req, res) {
    var file_name = req.url.slice(1) + '.html';
    send_page(res, file_name);
});


// Listening
app.listen(8080, function() {
    console.log('\nListening on localhost:8080\n');
});
