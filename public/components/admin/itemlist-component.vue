<template>
    <div class="columns is-multiline">
        <div class="tabs is-centered">
            <ul>
                <li v-on:click="filterType='all'"><a>All</a></li>
                <li v-on:click="filterType='adventure'"><a>Adventure</a></li>
                <li v-on:click="filterType='hotels'"><a>Hotels</a></li>
                <li v-on:click="filterType='spa'"><a>Spa</a></li>
                <li v-on:click="filterType='else'"><a>Something Else</a></li>
            </ul>
        </div>
        <div class="column is-6-desktop" v-for="item,i in filteredItems">
            <div class="box" :class="{'active-edit': i == activeIndex}" v-on:click="updateData(item,i)">
                <div class="columns">
                    <div class="column is-4">
                        <figure class="image is-square" @error="replaceByDefault">
                            <img v-bind:src="item.imgsrc" @load="checkLoad()" @error="replaceByDefault($event)">
                        </figure>
                    </div>
                    <div class="column">
                        <div class="media">
                            <div class="media-content">
                                <span class="title is-6">{{item.id}} {{item.title}}</span>
                                <div>
                                    <span class="icon is-small has-text-warning is-size-7" v-for="n in parseInt(item.ratings)">
                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="content is-hidden-mobile is-size-7">
                            {{item.description}}
                            <div class="is-size-6">
                                {{item.currency}} <strong>{{item.price}}</strong>
                            </div>
                        </div>
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
            db: firebase.firestore(),
            title: 'Activities List',
            downloadStatus: '',
            listContent: [],
            activeIndex: null,
            filterType: 'all'
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
        checkLoad() {
            console.log("loaded");
        },
        updateData(data, index) {
            this.activeIndex = index;
            bus.$emit('edit_data', JSON.stringify(data));
        },
        replaceByDefault(event) {
            event.target.src = '../img/placeholder.png'
        },
        toast(message) {
            var options = {
                style: {
                    main: {
                        width: "200px",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        background: "#eee",
                        color: "black"
                    }
                },
                settings: {
                    duration: 2000
                }
            };
            iqwerty.toast.Toast(message, options);
        },
        convertPrice(from_price, to_price) {
            /*axios.get('https://api.exchangeratesapi.io/latest?symbols=' + from_price + "," + to_price)
                .then((data) => {
                    console.log(data);
                    //return data;
                }).catch((err) => {
                    console.log("ERROR", err);
                }).finally(() => {

                });
            return from_pric;*/
        }
    },
    computed: {
        filteredItems() {
            return this.listContent.filter(content => {
                console.log("FILTER: ", this.filterType, content);
                if (this.filterType != 'all') return content.tags.indexOf(this.filterType.toLowerCase()) > -1;
                else return this.listContent;
            })
        }
    },
    mounted() {
        this.getJSONdata();
        bus.$on('changed-data', (res) => {
            this.getJSONdata();
            this.activeIndex = null;
        });
    }
}
</script>
<style>
.active-edit {
    border: 1px solid #4a148c;
    background: #eee;
}

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