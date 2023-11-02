const dashboardRoutes = {
  path: '/',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'Dashboard',
      component: () => import('@/modules/dashboard/views/dashboard/Index.vue')
    }
  ]
}

export default dashboardRoutes
