import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  hashbang: false,
  history: createWebHashHistory("/"),
  base: "/dashboard/",
  routes,
});

export default router;
