<template>
    <div class="form-component shadow">
        <span>{{title}}</span>
        <div class="form">
            <input v-model="data.name" placeholder="Name">
            <input v-model="data.email" placeholder="email" type="email" name="email">
            <input v-model="data.message" placeholder="Message">
            <button @click="submitForm">UPLOAD</button>
        </div>
        <span v-if="status">{{uploadStatus}}</span>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            url: "/submitQueries",
            title: 'Contact Us',
            data: {
                name: '',
                email: '',
                message: ''
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
                })
                .then(res => {
                    this.uploadStatus = "success";
                }).catch(res => {
                    this.uploadStatus = "failed";
                });
            this.status = true;
        }
    }
}
</script>
<style>
.form-component {
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
}
</style>