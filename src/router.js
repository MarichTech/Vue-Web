import {
  createWebHistory,
  createRouter
} from "vue-router";

const routes = [{
    path: "/",
    alias: "/accounts",
    name: "accounts",
    component: () => import("./components/Posts")
  },
  {
    path: "/comments",
    name: "comments",
    component: () => import("./components/Comments")
  },

  {
    path: "/add_post",
    name: "Add Post",
    component: () => import("./components/AddPost")
  },

  {
    path: "/about",
    name: "about",
    component: () => import("./components/About")
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;