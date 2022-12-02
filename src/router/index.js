import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Shop.vue"),
  },
  {
    path: "/",
    redirect: { name: "Shop" },
  },
  {
    path: "/about",
    name: "SpalmerartAbout",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/About.vue"),
  },
  {
    path: "/contact",
    name: "SpalmerartContact",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Contact.vue"),
  },
  {
    path: "/trending",
    name: "TrendingPage",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Trending.vue"),
  },
  {
    path: "/print",
    name: "PrintPage",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Print.vue"),
  },
  {
    path: "/original",
    name: "OriginalPage",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Original.vue"),
  },
  {
    path: "/detail/:id",
    name: "DetailPage",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../pages/Detail.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Shop" }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
