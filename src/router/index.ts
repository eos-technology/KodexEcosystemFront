import { createRouter, createWebHistory } from 'vue-router'
//importation
import walletRoutes from '@/modules/wallet/router';
import dashboardRoutes from '@/modules/dashboard/router';
import authRoutes from '@/modules/auth/router'
import templateRoutes from '@/modules/template/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //module
walletRoutes,
dashboardRoutes,
    authRoutes,
    templateRoutes
  ]
})

export default router
