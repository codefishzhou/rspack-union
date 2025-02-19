import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  hashbang: false,
  history: createWebHashHistory("/"),
  routes,
});

router.beforeResolve(async (to) => {
  if (to.path.startsWith('/user') && !window.USER_REMOTE) {
    await loadRemoteEntry(
      'USER_REMOTE',
      `${process.env.VUE_APP_REMOTEECHARTS_USER}/remoteEntry.js`
    )
  }
})

export default router;
