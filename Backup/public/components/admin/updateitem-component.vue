<template>
    <div class="column">
        <span class="title is-6 is-spaced">
            <span class="has-text-grey-light bd-anchor-link">
                # {{id}}
            </span>
            <span class="bd-anchor-name">
                {{title}}
            </span>
        </span>
        <div class="field">
            <div class="control">
                <input v-model="data.title" class="input" type="text" placeholder="Title">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input v-model="data.description" class="input" type="text" placeholder="Description">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <input v-model="data.price" class="input" type="number" placeholder="Price">
            </div>
            <div class="control">
                <span>IDR</span>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label class="heading"><strong>RATING</strong></label>
                <div class="control">
                    <input v-model="data.ratings" max="5" min="1" class="input" type="number" placeholder="Text input">
                </div>
            </div>
            <div class="control">
                <label class="heading"><strong>OFFER</strong></label>
                <div class="control">
                    <div class="select">
                        <select v-model="data.offer">
                            <option>NO</option>
                            <option>YES</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control tags">
                <!-- <input v-model="data.tags" class="input" type="text" placeholder="Add Tags"> -->
                <span class="tag" v-for="tag in data.tags">{{tag}}</span>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="updateData">UPDATE</button>
            </div>
            <div class="control">
                <button class="button" @click="deleteItem"><span class="has-text-danger">DELETE</span></button>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            updateURL: "/updateItem",
            delURL: "/deleteItem",
            title: 'UPDATE ITEM',
            id: null,
            data: {
                "id": null,
                "title": "",
                "description": "",
                "price": "",
                "date": "",
                "tags": [],
                "imgsrc": "http://lorempixel.com/400/200/nature",
                "ratings": 0,
                "offer": "NO"
            },
            status: false,
            uploadStatus: ''
        }
    },
    methods: {
        updateData() {
            axios.post(this.updateURL, this.data, {
                onUploadProgress: uploadEvent => {
                    this.uploadStatus = "Progess...";
                }
            }).then(res => {
                this.toast("Success", true);
            }).catch(res => {
                this.toast("failed", false);
            }).finally(res => {
                this.resetForm();
            });
            this.status = true;
        },
        deleteItem() {
            axios.post(this.delURL, { "id": this.id })
                .then((resp) => {
                    console.log("deleted item");
                    this.toast("Deleted");
                }).catch(error => {
                    if (error.response) {
                        this.toast("failed");
                    }
                }).finally(res => {
                    this.resetForm();
                });
        },
        resetForm() {
            this.id = '';
            Object.keys(this.data).forEach(key => {
                this.data[key] = ''
            });
        },
        receiveEditData() {
            bus.$on('edit_data', (value) => {
                this.id = (JSON.parse(value)).id;
                this.data = JSON.parse(value);
                console.log('data ## ', JSON.parse(value));
            });
        },
        toast(message, status) {
            bus.$emit('changed-data', status);
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
    mounted() {
        this.receiveEditData();
    }
}
</script>
<style>
/* .form-component {
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    color: white;
}

.form {
    display: grid;
    grid-row-gap: 10px;
}

.form>input {
    padding: 10px;
    border: none;
    border-radius: 3px;
} */
</style>