const authRoutes = {
  path: '/auth',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('@/modules/auth/views/login/Index.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/auth/views/register/Index.vue')
    },
    {
      path: 'forgot-password',
      name: 'forgot-password',
      component: () => import('@/modules/auth/views/forgot-password/Index.vue')
    },
    {
      path: 'recover-password',
      name: 'recover-password',
      component: () => import('@/modules/auth/views/recover-password/Index.vue')
    }
  ]
}

export default authRoutes
