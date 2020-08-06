import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Academics from '@/components/Academics.vue'


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
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/academics',
    name: 'Academics',
    component: Academics
  }

]

const router = new VueRouter({
  routes
})

export default router