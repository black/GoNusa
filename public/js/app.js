let bus = new Vue();

new Vue({
    el: '#app',
    components: {
        'top-component': httpVueLoader('../components/top-component.vue'),
        'activities-component': httpVueLoader('../components/activities-component.vue'),
        'form-component': httpVueLoader('../components/form-component.vue'),
        'payment-component': httpVueLoader('../components/payment-component.vue')
    }
}); 