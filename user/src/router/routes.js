// import {remoteViews} from "@remote/views"
// import remoteBigData from "@remote/bigData"

const routes = [
  {
    path: '/user',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: 'a',
        component: () => import('@/views/home.vue')
      }
    ]
  },
];

export default routes;
