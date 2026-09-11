import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import About_us from '@/views/About_us.vue'
import Admission from '@/views/Admission.vue' 
import SampleData from '@/views/SampleData.vue'
import SampleMethods from '@/views/SampleMethods.vue'
import SampleVmodel from '@/views/SampleVmodel.vue'


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

    {
      path: '/sample-data',
      name: 'sampleData',
      component: SampleData,
    },

    {
      path: '/sample-methods',
      name: 'sampleMethods',
      component: SampleMethods,
    },

     {
      path: '/sample-vmodel',
      name: 'sampleVmodel',
      component: SampleVmodel,
    },

    
    
  ],
})

export default router
