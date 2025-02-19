import {remoteViews} from "@remote/views"
import remoteBigData from "@remote/bigData"

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
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/user',
    component: () => import('@/components/layout/userContainer.vue'),
    children: [
      {
        path: ':pathMatch(.*)*',
        component: () => import('@user/UserApp')
      }
    ]
  }
];

export default routes;
