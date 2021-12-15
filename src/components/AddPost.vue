<template>
  <h1>Add Post</h1>



     <form  @submit.prevent="savePost()" action="/" method="post">
        <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" required v-model="post.title" placeholder="Post Title">
    
        </div>

        <div  class="mb-3">
        <label class="form-label">Description</label>
        <textarea type="text" class="form-control" required v-model="post.description" placeholder="Post Description"></textarea>

        </div>


        <button class="btn btn-primary"  type="submit">Submit </button>
    </form>

</template>

<script>

import DataService from "../service/DataService";

export default {
    name: "add-post",
    data() {
        return {
        post: {
            title: "",
            description: "",
            data: {}

        },
        submitted: false
        };
    },
    methods: {
        savePost() {


        let formData = new FormData();
        formData.append('title', this.post.title)
        formData.append('description', this.post.description)

        DataService.addPost(formData)
            .then(response => {

                let response_data =response.data;
                console.log(response_data);
                            
                alert('Data saved successfully');
                this.$router.push('/');


                })
            .catch(e => {
            console.log(e);
            });
        },
        
        newTutorial() {
        this.submitted = false;
        this.tutorial = {};
        }
    }
};

</script>

<style>

</style>