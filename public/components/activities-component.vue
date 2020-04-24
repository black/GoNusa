<template>
    <div class="columns is-multiline">
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
                                <span class="title is-4">{{item.title}}</span>
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
                    <div class="content is-hidden-mobile">
                        {{item.price}}
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
            db: firebase.firestore(),
            title: 'Activities List',
            downloadStatus: '',
            status: false,
            listContent: []
        }
    },
    methods: {
        getJSONdata() {
            this.db.collection('places').get().then((snapshot) => {
                snapshot.forEach(doc => {
                    console.log(doc.data());
                    this.listContent.push(doc.data());
                });
                this.downloadStatus = "success";
            }).catch(function(error) {
                console.log("Error getting document:", error);
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