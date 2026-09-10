import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import About_us from '@/views/About_us.vue'
import Admission from '@/views/Admission.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
      
    },

    {
      path: '/about_us',
      name: 'about_us',
      component: About_us,
      
    },

    {
      path: '/admission',
      name: 'admission',
      component: Admission,
    },

    
    
  ],
})

export default router
