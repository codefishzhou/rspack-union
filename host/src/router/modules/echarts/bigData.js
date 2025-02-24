export default [
  {
    path: "/bigData",
    name: "bigData",
    meta: {
      title: "大数据平台",
    },
    component: () => import("@remote/bigData"), // 保持远程加载方式
  }
] 