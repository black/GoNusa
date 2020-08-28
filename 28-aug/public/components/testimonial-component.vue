<template>
    <nav class="level">
        <div v-for="item in testimonials" class="level-item has-text-centered">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{item.title}}</p>
                            <p class="subtitle is-6">{{item.contact}}</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </div>
    </nav>
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
            testimonials: []
        }
    },
    methods: {
        onFakeData() {
            for (let i = 0; i < 4; i++) {
                this.testimonials.push({
                    title: "title_" + 1,
                    contact: "@joe_+" + 1,
                    testimonials: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                });
            }
        }
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
    beforeMounte: function() {
        this.onFakeData();
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