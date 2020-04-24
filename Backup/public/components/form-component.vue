<template>
    <div class="column is-4 is-desktop">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input v-model="data.name" class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="data.email" class="input is-danger" type="email" placeholder="Email input" value="hello@">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea v-model="data.message" class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="submitForm">SEND</button>
            </div>
        </div>
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