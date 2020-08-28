<template>
    <div class="columns is-multiline" >
        <div class="column is-3-desktop" v-on:click="openCollection(event)" v-if="offer==item.offer" v-for="item,i in listContent">
            <div class="box">
                <div class="columns is-mobile is-multiline">
                    <div class="column is-4-mobile is-full-desktop">
                        <figure class="image is-square">
                            <img v-bind:src="item.imgsrc">
                        </figure>
                    </div>
                    <div class="column is-8-mobile">
                        <div class="media">
                            <div class="media-content">
                                <span class="title is-4">{{item.id}} {{item.title}}</span>
                                <div>
                                    <span class="icon is-small has-text-warning is-size-7" v-for="n in parseInt(item.ratings)">
                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="content is-hidden-mobile">
                            {{item.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
module.exports = {
    props: ['offer'],
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
        getJSONdata() {
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
        this.getJSONdata();
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