<template>
    <div class="column">
        <span class="title is-6 is-spaced">
            <span class="has-text-grey-light bd-anchor-link">
                #
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
                <div class="select">
                    <select v-model="data.currency">
                        <option>INR</option>
                        <option>IDR</option>
                        <option>USD</option>
                    </select>
                </div>
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
            <div class="control">
                <input v-model="data.filters" class="input" type="text" placeholder="Add Tags">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-success" @click="submitForm">ADD ITEM</button>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            url: "/addItem",
            title: 'ADD ITEMS',
            data: {
                "title": "",
                "description": "",
                "price": "",
                "currency": "IDR",
                "date": "",
                "filters": [],
                "imgsrc": "http://lorempixel.com/400/200/nature",
                "ratings": 0,
                "offer": "NO"
            },
            status: false,
            uploadStatus: ''
        }
    },
    methods: {
        submitForm() {
            axios.post(this.url, this.data, {
                onUploadProgress: uploadEvent => {
                    this.uploadStatus = "Progess...";
                }
            }).then(res => {
                this.toast("success");
            }).catch(res => {
                this.toast("failed");
            }).finally(res => {
                this.resetForm();
            })
            this.status = true;
        },
        resetForm() {
            Object.keys(this.data).forEach(key => {
                this.data[key] = ''
            });
        },
        toast(message) {
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