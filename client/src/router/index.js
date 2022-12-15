import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/tattoo-maker',
      name: 'tattoo-maker',
      component: ()=>import('../views/TattooMakerView.vue')
    },{
      path: '/contact',
      name: "contact",
      component: ()=>import('../views/ContactFormView.vue')
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: null, left: null, behavior: 'smooth' };
  }
})

export default router
