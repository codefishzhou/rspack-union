

export default [
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
  ]