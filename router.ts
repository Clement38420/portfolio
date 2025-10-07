import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './src/views/HomeView.vue'
import AboutView from './src/views/AboutView.vue'
import ContactView from './src/views/ContactView.vue'
import ProjectsView from './src/views/ProjectsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
