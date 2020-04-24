const functions = require('firebase-functions'),
    express = require('express'),
    firebase = require('firebase-admin');
const app = express();

firebaseApp = firebase.initializeApp();
realdatabase = firebaseApp.database();
firedatabase = firebaseApp.firestore();

// set up view engine
app.set('view engine', 'ejs');

let isAuthenticated = () => {
    return false;
}

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/admin', (req, res) => {
    res.render('admin');
});

exports.gonusa = functions.https.onRequest(app);

exports.addContent = functions.https.onCall((data, context) => {
    // Checking that the user is authenticated.
    if (!context.auth) {
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
            'while authenticated.');
    }

    firedatabase.collection('places').add(data.text)
        .then(res => {
            console.log(res);
        })
        .cathc(err => {
            throw new functions.https.HttpsError('unknown', error.message, error);
        });

    return {
        data: "success"
    }
});