import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// 使用 require.context 替代 import.meta.glob
const modules = require.context('./modules', true, /\.js$/)
const routes = modules.keys().flatMap(key => modules(key).default)

console.log(modules.keys(), routes)
const router = createRouter({
  hashbang: false,
  history: createWebHashHistory("/"),
  routes, // 使用合并后的路由数组
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
