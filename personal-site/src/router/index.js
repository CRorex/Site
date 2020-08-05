import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = new VueRouter({
  routes
})

export default router