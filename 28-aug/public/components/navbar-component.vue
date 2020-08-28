<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item href="#">
                <img class="is-24x24" src="img/logo.svg" alt="Go Nusa">
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="#">
                <b-field>
                    <b-input placeholder="No label" rounded></b-input>
                </b-field>
            </b-navbar-item>
            <b-navbar-item href="#">
                ABOUT US
            </b-navbar-item>
            <b-navbar-item href="#">
                REVIEWS
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
module.exports = {
    data: function() {
        return {
            /*url: "http://localhost:3000/data",
            title: 'Activities List',
            downloadStatus: '',
            status: false,
            listContent: []*/
        }
    },
    methods: {
        /*onFileSelected() {
            bus.$emit('imageurl', this.url);
        },
        getImages() {
            axios.get(this.url)
                .then((res) => {
                    this.listContent = res.data;
                    console.log(this.listContent);
                    this.status = false;
                    this.downloadStatus = "success";
                }).catch(error => {
                    if (error.response) {
                        console.log(error.responderEnd);
                        this.downloadStatus = "failed";
                        this.status = true;
                    }
                });
        },
        openCollection(event) {
            console.log("clicked");
        }*/
    },
    computed: {
        /* getCover: function(item) {
             return null;
         },
         getTitle: function(item) {
             return null;
         }*/
    },
    mounted: function() {
        /*this.getImages();*/
    }
}
</script>
<style>
.activity-component {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
}
</style>