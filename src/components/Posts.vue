<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Posts List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
        >
          {{ post.post }} {{ post.created_on }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Comments</h4>
        <div>
          <label><strong>Post:</strong></label> {{ currentPost.name }}
        </div>
        <div>
          <label><strong>Date:</strong></label> {{ currentPost.email }}
        </div>
        <button class="btn btn-primary" :to="'/accounts/' + currentPost.id">
          Comment
        </button>
        <router-link class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Click a post to view comments</p>
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
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      DataService.getAll()
        .then((response) => {
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

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
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
