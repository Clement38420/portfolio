import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { router } from '../router.ts'
import fr from './locales/fr.json'
import en from './locales/en.json'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

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
