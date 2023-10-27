const templateRoutes = {
  path: '/template',
  // component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'template',
      component: () => import('@/modules/template/views/template/Index.vue')
    }
  ]
}

export default templateRoutes
