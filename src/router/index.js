import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: () => import("@/views/QuotePage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactInfo.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
