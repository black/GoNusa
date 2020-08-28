<template>
    <ul class="activity-component">
        <li class="collection" v-for="item,i in listContent" v-on:click="openCollection(event)">
            <img v-bind:src="item.imgsrc" alt="item.imgsrc"><br>
            <div>
                <span>{{i}} {{item.title}}</span><br>
                <span>{{item.description}}</span><br>
                <span>{{item.currency}} : {{item.price}}</span><br>
                <span>Ratings : {{item.ratings}}</span><br>
                <span>Date : {{item.date}}</span>
            </div>
        </li>
    </ul>
</template>
<script>
module.exports = {
    data: function() {
        return { 
            title: 'SIGNUP',
            poptitle:'Choose methods'
            status: false
        }
    },
    methods: {  
        newLogin(user) {
             if(user){
               // app(user);
             }else{
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
             }
        },
        newSignup(){

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
.activity-component {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
}

.collection {
    border: 1px solid #eee;
    border-radius: 5px;
}

.collection>img {
    width: 100%;
    object-fit: cover;
}

.collection>div {
    padding: 20px;
}


.collection:hover {
    background: #eee;
    color: black;
}

.photos {
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>