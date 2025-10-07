import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { router } from '../router.ts'
import fr from './locales/fr.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en,
  },
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
