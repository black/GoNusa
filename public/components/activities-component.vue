<template>
    <div class="columns">
        <div class="column is-3-tablet" v-for="item,i in listContent" v-on:click="openCollection(event)">
            <div class="card">
                <div class="card-image">
                    <figure style="width:100%" class="image is-4by2">
                        <img v-bind:src="item.imgsrc" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{item.title}}</p>
                            <p class="subtitle is-6">{{item.ratings}}</p>
                        </div>
                    </div>
                    <div class="content">
                        {{item.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            url: "http://localhost:3000/data",
            title: 'Activities List',
            downloadStatus: '',
            status: false,
            listContent: []
        }
    },
    methods: {
        onFileSelected() {
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
        }
    },
    computed: {
        getCover: function(item) {
            return null;
        },
        getTitle: function(item) {
            return null;
        }
    },
    mounted: function() {
        this.getImages();
    }
}
</script>
<style>
/* .activity-component {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
} */

/* .collection { 
    border-radius: 5px;
}

.collection>img {
    width: 100%;
    object-fit: cover;
}

.collection>div {
    padding: 20px;
} */


/* .collection:hover {
    background: #eee;
    color: black;
} */
/* 
.photos {
    height: 200px;
    background-size: cover;
    background-position: center;
} */
</style>