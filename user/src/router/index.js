import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  hashbang: false,
  mode: "hash",
  history: createWebHashHistory("/user/"),
  routes,
});

export default router;
