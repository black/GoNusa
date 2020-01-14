const axios = require('axios');

module.exports = (app) => {
    app.get('/getAllItems', (req, res) => {
        console.log("all items", req.body);
        res.send('got all');
    }).post('/addItem', (req, res) => {
        console.log("all items", req.body);
        axios.post('http://localhost:3000/data', req.body).then(resp => {
            res.send('added new item');
            console.log("Done");
        }).catch(error => {
            console.log(error);
        });
    }).post('/updateItem', (req, res) => {
        console.log("all items", req.body);
        axios.put('http://localhost:3000/data/' + req.body.position, req.body.data).then(resp => {
            res.send('added new item');
            console.log("Updated item");
        }).catch(error => {
            console.log(error);
        });
    }).post('/deleteItem', (req, res) => {
        res.send('deleted succesfully');
    });
}