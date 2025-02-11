import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  hashbang: false,
  mode: "hash",
  history: createWebHashHistory("/"),
  routes,
});

export default router;
