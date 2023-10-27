import { createRouter, createWebHistory } from 'vue-router'
//importation
import authRoutes from '@/modules/auth/router'
import templateRoutes from '@/modules/template/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //module
    authRoutes,
    templateRoutes
  ]
})

export default router
