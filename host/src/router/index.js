import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  hashbang: false,
  mode: "hash",
  history: createWebHistory("/"),
  base: "/dashboard/",
  routes,
});

export default router;
