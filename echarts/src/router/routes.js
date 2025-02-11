import {remoteViews} from "@remote/views"
import remoteBigData from "@remote/bigData"

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
];

export default routes;
