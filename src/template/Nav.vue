<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">

      <router-link class="navbar-brand" :to="('/')">Music Blog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Display all the time -->
          <li class="nav-item">
            <MenuLink class="nav-link" path="/" text="Posts"></MenuLink>
          </li>

          <li class="nav-item">
            <MenuLink class="nav-link" path="/add_post" text="Add Posts"></MenuLink>
          </li>

            <li class="nav-item">
            <MenuLink class="nav-link" path="/comments" text="Comments"></MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink class="nav-link" path="/about" text="About"></MenuLink>
          </li>



        </ul>


      </div>
    </div>
  </nav>
</template>

<script>
  import MenuLink from "./MenuLink";
  export default {
    props: ["loggedIn"],
    data() {
      return {
        brand: process.env.VUE_APP_APPNAME
      };
    },
    components: {
      MenuLink
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>



<style>
  nav {
    background-color: #897AAA;
  }
</style>