import {remoteViews} from "@remote/views"

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/bigData",
    name: "bigData",
    meta: {
      title: "大数据平台",
    },
    component: remoteViews.bigData,
  },
];

export default routes;
