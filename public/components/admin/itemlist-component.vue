<template>
    <div class="columns is-multiline">
        <div class="tabs is-centered">
            <ul>
                <li class="is-active"><a>All</a></li>
                <li><a>Adventure</a></li>
                <li><a>Hotels</a></li>
                <li><a>Spa</a></li>
                <li><a>Something Else</a></li>
            </ul>
        </div>
        <div class="column is-6-desktop" v-on:click="updateData(item,i)" v-for="item,i in listContent">
            <div class="box" :class="{'active-edit': i == activeIndex}">
                <div class="columns">
                    <div class="column is-4">
                        <figure class="image is-square">
                            <img v-bind:src="item.imgsrc">
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
            url: "http://localhost:3000/data",
            title: 'Activities List',
            downloadStatus: '',
            listContent: [],
            activeIndex: null
        }
    },
    methods: {
        getJSONdata() {
            axios.get(this.url)
                .then((res) => {
                    this.listContent = res.data;
                    console.log(this.listContent);
                    this.toast("success");
                }).catch(error => {
                    if (error.response) {
                        this.toast("failed");
                    }
                }).finally(() => {
                    //his.toast("Completed Request");
                });
        },
        updateData(data, index) {
            this.activeIndex = index;
            bus.$emit('edit_data', JSON.stringify(data));
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
    mounted() {
        this.getJSONdata();
        bus.$on('success-updated', (res) => {
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