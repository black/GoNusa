const axios = require('axios');

module.exports = (app) => {
    app.get('/getAllItems', (req, res) => {
        console.log("getting...");
        axios.get('http://localhost:3000/data').then((resp) => {
            console.log("Got all the Item");
            res.json(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }).post('/addItem', (req, res) => {
        axios.post('http://localhost:3000/data', req.body).then(resp => {
            res.send('added new item');
            console.log("Added Item");
        }).catch(error => {
            console.log(error);
        });
    }).post('/updateItem', (req, res) => {
        axios.put('http://localhost:3000/data/' + req.body.id, req.body).then(resp => {
            res.send('updated current item');
            console.log("Updated item");
        }).catch(error => {
            console.log(error);
        });
    }).post('/deleteItem', (req, res) => {
        console.log(req.body.id);
        axios.delete('http://localhost:3000/data/' + req.body.id).then(resp => {
            res.send('deleted succesfully');
            console.log("Deleted item");
        }).catch(error => {
            console.log(error);
        });
    });
}