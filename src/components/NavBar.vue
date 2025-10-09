<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { locale } = useI18n()
const route = useRoute()

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}

const toLanguage = computed(() => (locale.value === 'en' ? 'fr' : 'en'))

const languageImage = computed(() => {
  return new URL(`../assets/images/${toLanguage.value}.svg`, import.meta.url).href
})

const navLinks = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.projects', path: '/projects' },
  { name: 'nav.contact', path: '/contact' },
]

const isActiveLink = (path: string) => {
  return route.path === path
}
</script>

<template>
  <nav>
    <h1>Clément Charbonnel</h1>
    <ul class="navbar-items">
      <li v-for="link in navLinks" :key="link.path" class="navbar-item">
        <RouterLink class="view-link" :class="{ active: isActiveLink(link.path) }" :to="link.path">
          {{ $t(link.name) }}
        </RouterLink>
      </li>
    </ul>
    <button class="language-switch" @click="toggleLanguage">
      <img :src="languageImage" :alt="toLanguage" loading="lazy" width="48" height="48" />
    </button>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 70px;
  background-color: var(--bg-light-color);
  box-shadow: var(--card-shadow);
  display: flex;
  justify-content: space-around;
  position: relative;
}

nav * {
  margin: auto 0;
}

h1 {
  position: absolute;
  left: 16px;
  font-size: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.navbar-items {
  display: flex;
  gap: 16px;
  list-style: none;
}

.view-link {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.view-link:hover {
  color: #3b82f6;
  transform: translateY(-1px);
  text-shadow: 0 0 0.5px #3b82f6;
}

.view-link::after {
  content: '';
  background: #3b82f6;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  border-radius: 1px;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(59, 130, 246, 0.15);
}

.view-link:hover::after,
.view-link.active::after {
  transform: translateX(-50%) scaleX(1);
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.2);
}

.view-link.active {
  color: #3b82f6;
  text-shadow: 0 0 1px #3b82f6;
}

.view-link.active::after {
  background: #3b82f6;
}
.language-switch {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5em;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    0.1s box-shadow,
    0.1s transform;
}

.language-switch:hover {
  box-shadow: var(--card-shadow);
  transform: translateY(-55%) scale(1.05);
}

.language-switch:active {
  box-shadow: var(--card-shadow-close);
  transform: translateY(-50%) scale(1);
}

.language-switch img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 2px;
}
</style>
