import { createRouter, createWebHashHistory } from "vue-router";
import Characters from "../views/Characters.vue";

const routes = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favorites.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
