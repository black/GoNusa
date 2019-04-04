const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));

let server = app.listen(1357, () => {
        console.log("Dewi Booking Runing on 1357");
    });

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});