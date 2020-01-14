<template>
    <div class="column is-4 is-desktop">
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
        <div class="field">
            <label class="heading"><strong>RATING</strong></label>
            <div class="control">
                <input v-model="data.ratings" max="5" min="1" class="input" type="number" placeholder="Text input">
            </div>
        </div>
        <div class="field">
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
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="submitForm">UPDATE</button>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            url: "/updateItem",
            title: 'Add Item',
            id: null,
            data: {
                "title": "",
                "description": "",
                "price": "",
                "currency": "IDR",
                "date": "",
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
            axios.post(this.url, {
                postion: this.id,
                data: this.data
            }, {
                onUploadProgress: uploadEvent => {
                    this.uploadStatus = "Progess...";
                }
            }).then(res => {
                this.uploadStatus = "success";
            }).catch(res => {
                this.uploadStatus = "failed";
            }).finally(res => {
                this.resetForm();
            })
            this.status = true;
        },
        resetForm() {
            Object.keys(this.data).forEach(key => {
                this.data[key] = ''
            });
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