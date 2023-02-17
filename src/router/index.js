import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("../views/AppsView.vue"),
  },
  {
    path: "/tech",
    name: "Tech",
    component: () => import("../views/TechView.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/advanced",
    name: "Advanced",
    component: () => import("../views/AdvancedView.vue"),
  },
  {
    path: "/diff",
    name: "Diff",
    component: () => import("../views/DiffView.vue"),
  },
  {
    path: "/aff",
    name: "Aff",
    component: () => import("../views/AffView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
