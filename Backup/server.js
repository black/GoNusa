const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));

let server = app.listen(1200, () => {
    console.log("Dewi Booking Runing on 1200");
});

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
}).get('/aboutus', (req, res) => {
    res.render('aboutus');
}).get('/explore', (re, res) => {
    res.render('explore');
}).get('/admin', (req, res) => {
    res.render('admin');
});


app.get('/getLists', (req, res) => {
    //res.render('index');
});

app.get('/getImages', (req, res) => {
    //res.render('index');
});

app.post('/submitQueries', (req, res) => {
    console.log("form data", req.body);
    res.send("success");
});

require('./app/database.js')(app);