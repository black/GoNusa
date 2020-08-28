import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyBUEGfpdaQp4PWIn-jdP_JEf9JwafzZtaw",
     authDomain: "gonusabooking.firebaseapp.com",
     databaseURL: "https://gonusabooking.firebaseio.com",
     projectId: "gonusabooking",
     storageBucket: "gonusabooking.appspot.com",
     messagingSenderId: "258941994308",
     appId: "1:258941994308:web:9787786b2a0dc08c310311",
     measurementId: "G-NP7121XDBQ"
};

firebase.initializeApp(firebaseConfig)

// utils
const auth = firebase.auth()
const firedb = firebase.firestore()

// collection references
const usersCollection = firedb.collection('users')
const postsCollection = firedb.collection('posts')
const commentsCollection = firedb.collection('comments')
const likesCollection = firedb.collection('likes')

// export utils/refs
export {
     auth,
     firedb,
     usersCollection,
     postsCollection,
     commentsCollection,
     likesCollection
}