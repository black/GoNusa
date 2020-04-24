let bus = new Vue();
new Vue({
    el: '#app',
    components: {
        'navbar-component': httpVueLoader('../components/navbar-component.vue'),
        'top-component': httpVueLoader('../components/top-component.vue'),
        'activities-component': httpVueLoader('../components/activities-component.vue'),
        'form-component': httpVueLoader('../components/form-component.vue'), 
        'login-component': httpVueLoader('../components/login-component.vue') ,
        'account-component': httpVueLoader('../components/account-component.vue'),
        'testimonial-component': httpVueLoader('../components/testimonial-component.vue'),  
        'itemlist-component': httpVueLoader('../components/admin/itemlist-component.vue'), 
        'editable-component': httpVueLoader('../components/admin/editable-component.vue'),
        'admin-login': httpVueLoader('../components/admin/admin-login.vue')
    }
});