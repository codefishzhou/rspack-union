import {remoteViews} from "@remote/views"
import remoteBigData from "@remote/bigData"
import remoteUser from "@user/user"

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
    component: remoteBigData,
  },
  {
    path: "/user/:pathMatch(.*)*",
    name: "user",
    meta: {
      title: "用户中心",
      // federation: {
      //   basePath: '/'
      // }
    },
    component: remoteUser,
  }
];

export default routes;
