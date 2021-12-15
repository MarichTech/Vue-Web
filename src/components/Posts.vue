<template>
<div class="container">
    <div class="list row">
    <div class="col-md-12">
      <h4>Posts List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="retrieveComments()">

            <div class="card" style="margin-bottom: 10px;">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <small class="post-date"> Posted on: {{ post.date }}</small><br>
                <p class="card-text">{{ post.description }}</p>
              </div>
            </div>

        </li>
      </ul>
    </div>
  </div>
  <div v-if="comments">
        <div
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(comment, index) in comments"
          :key="index">

            <div class="card" style="margin-bottom: 10px;">
              <div class="card-body">
                <small class="post-date"> Post Id: {{ comment.postId }}</small><br>
                <p class="card-text">{{ comment.body }}</p>
              </div>
            </div>

        </div>

  </div>
  
</div>

</template>

<script>
import DataService from "../service/DataService";

export default {
  name: "accounts-list",
  data() {
    return {
      posts: [],
      comments: null,
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      DataService.getAll()
        .then((response) => {
              console.log(response);
          this.posts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    retrieveComments() {
      DataService.getComments()
        .then((response) => {
          this.comments = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },
  mounted() {
    this.retrievePosts();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
