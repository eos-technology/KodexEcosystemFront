const walletRoutes = {
  path: '/wallet',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'wallet',
      component: () => import('@/modules/wallet/views/wallet/Index.vue')
    }
  ]
}

export default walletRoutes
