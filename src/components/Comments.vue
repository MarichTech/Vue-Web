<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Comments</h4>
      <ul class="list-group">
        <li
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

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataService from "../service/DataService";

export default {
  name: "comments",
  data() {
    return {
      comments: [],
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      DataService.getComments()
        .then((response) => {
              console.log(response);
          this.comments = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }

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
