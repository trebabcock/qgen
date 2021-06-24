import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reports/time_to_close",
    name: "Time To Close",
    component: () => import("../views/Reports/TimeToClose.vue"),
  },
  {
    path: "/reports/new",
    name: "Time To Close",
    component: () => import("../views/Reports/New.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("../views/Report.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
