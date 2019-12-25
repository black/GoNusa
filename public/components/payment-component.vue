<template>
    <div class="payment shadow">
        <span>{{title}}</span>
        <input type="file" @change="onFileSelected" multiple="multiple">
        <button @click="onUpload">UPLOAD</button> 
        <ul>
            <li v-for="(item, index) in uploadProgress" v-if="uploadProgress.length>0"> 
                {{index}} : <progress v-bind:value="item" max="100"></progress>
                <span> {{item}}% -- status : {{uploadStatus[index]}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            url: "/trainModel",
            uploadStatus: [],
            selectedFile: [],
            title: 'TRAIN DATA',
            uploadProgress: []
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files; 
            for (let i = 0; i < this.selectedFile.length; i++) {
                this.$set(this.uploadProgress, i, 0);
                this.$set(this.uploadStatus, i,"no status");
            }
        },
        onUpload() { 
            for (let i = 0; i < this.selectedFile.length; i++) {
                const fd = new FormData();
                fd.append('image', this.selectedFile[i], this.selectedFile[i].name);
                axios.post(this.url, fd, {
                        onUploadProgress: uploadEvent => { 
                            this.$set(this.uploadProgress, i, Math.round(uploadEvent.loaded / uploadEvent.total * 100));
                            this.$set(this.uploadStatus, i,"waiting...");
                            console.log('Upload Progess ' + i + " : " + this.uploadProgress[i] + "%"); 
                        }
                    })
                    .then(res => { 
                        this.$set(this.uploadStatus, i,"success"); 
                    }).catch(res => {  
                        this.$set(this.uploadStatus, i,"failed");
                    });
            }
            console.log("uploaded");
        }
    }
}
</script>
<style>
.payment { 
    background-color: #0af;
    display: inline-block;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    color: white;
}
</style>