import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Add",
    name: "AddPost",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddPost.vue"),
  },
  {
    path: "/projects/:id",
    name: "EditProject",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditProject.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
