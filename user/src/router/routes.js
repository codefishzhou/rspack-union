// import {remoteViews} from "@remote/views"
// import remoteBigData from "@remote/bigData"

const routes = [
  {
    path: '/user',
    name: 'userHome',
    component: () => import('@/views/user.vue')
  },
  {
    path: '/home',
    name: 'userHome',
    component: () => import('@/views/home.vue')
  },
];

export default routes;
