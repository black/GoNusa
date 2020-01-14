// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1XkJau_Li3xTv2aXHcpz7fJOHcHWkSsI",
    authDomain: "gonusa-c9565.firebaseapp.com",
    databaseURL: "https://gonusa-c9565.firebaseio.com",
    projectId: "gonusa-c9565",
    storageBucket: "gonusa-c9565.appspot.com",
    messagingSenderId: "1024185123384",
    appId: "1:1024185123384:web:1fd58baab3d5f8439a5ccd",
    measurementId: "G-GS52V2XLXN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let bus = new Vue();
new Vue({
    el: '#app',
    components: {
        'navbar-component': httpVueLoader('../components/navbar-component.vue'),
        'top-component': httpVueLoader('../components/top-component.vue'),
        'activities-component': httpVueLoader('../components/activities-component.vue'),
        'form-component': httpVueLoader('../components/form-component.vue'), 
        'account-component': httpVueLoader('../components/account-component.vue'),
        'testimonial-component': httpVueLoader('../components/testimonial-component.vue'),
        'additem-component': httpVueLoader('../components/admin/additem-component.vue'),
        'updateitem-component': httpVueLoader('../components/admin/updateitem-component.vue'),
        'itemlist-component': httpVueLoader('../components/admin/itemlist-component.vue')
    }
});