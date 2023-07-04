import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import Contact from './views/Contact.vue'

export  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        // You could also have named views at tho top
        component: HomePage,
      },
      {
        path:'/about',
        component: About,
      },
      {
        path:'/services',
        component: Service,
      },
      {
        path:'/contact',
        component: Contact,
      }
    ],
  })