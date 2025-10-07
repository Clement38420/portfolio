import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { router } from '../router.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        projects: 'Projets',
        contact: 'Contact',
      },
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
  },
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
