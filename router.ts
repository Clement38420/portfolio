import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './src/views/HomeView.vue'
import AboutView from './src/views/AboutView.vue'
import ContactView from './src/views/ContactView.vue'
import ProjectsView from './src/views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Clément Charbonnel - Portfolio',
      description:
        'Clément Charbonnel, étudiant ingénieur en mécatronique, automatique et robotique à Grenoble INP - Ense3. Découvrez mon parcours, mes projets et mes coordonnées.',
    },
  },
  {
    path: '/about',
    component: AboutView,
    meta: {
      title: 'À propos - Clément Charbonnel',
      description:
        'Parcours de Clément Charbonnel : étudiant ingénieur à Grenoble INP - Ense3, en Erasmus au Técnico Lisboa. Compétences, expériences et CV.',
    },
  },
  {
    path: '/projects',
    component: ProjectsView,
    meta: {
      title: 'Projets - Clément Charbonnel',
      description:
        'Projets personnels et académiques de Clément Charbonnel : développement web, automatique, mécanique et électronique.',
    },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: {
      title: 'Contact - Clément Charbonnel',
      description: 'Contacter Clément Charbonnel : LinkedIn, GitHub ou par email.',
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
