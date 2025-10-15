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

function toggleNavBarItems() {
  const navbarItems = document.querySelector('.navbar-items') as HTMLElement
  const title = document.querySelector('h1') as HTMLElement

  if (navbarItems.classList.contains('show')) {
    hideNavBarItems()
  } else {
    title.style.display = 'none'
    navbarItems.classList.add('show')
    setTimeout(() => {
      navbarItems.style.transform = 'scaleX(1)'
    }, 10)
  }
}

function hideNavBarItems() {
  const navbarItems = document.querySelector('.navbar-items') as HTMLElement
  const title = document.querySelector('h1') as HTMLElement
  if (window.innerWidth <= 768) {
    navbarItems.style.transform = 'scaleX(0)'
    setTimeout(() => {
      navbarItems.classList.remove('show')
      title.style.display = 'block'
    }, 300)
  }
}
</script>

<template>
  <nav>
    <button class="nav-menu" @click="toggleNavBarItems">
      <img src="@/assets/images/menu.svg" alt="menu" />
    </button>
    <h1>Clément Charbonnel</h1>
    <ul class="navbar-items">
      <li v-for="link in navLinks" :key="link.path" class="navbar-item">
        <RouterLink
          class="view-link"
          :class="{ active: isActiveLink(link.path) }"
          :to="link.path"
          @click="hideNavBarItems"
        >
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
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  padding: 0 16px;
  font-size: 1.3em;
}

nav * {
  margin: auto 0;
}

.nav-menu {
  background: none;
  border: none;
  padding: 0;
  display: none;
  width: 2em;
  height: 2em;
  transform-origin: center;
  transition: transform 0.1s;
}

.nav-menu img {
  width: 100%;
  height: 100%;
  margin: 0;
}

.nav-menu:hover {
  transform: scaleY(1.3);
}

h1 {
  font-size: 1.5rem;
  justify-self: start;
}

.navbar-items {
  padding: 0;
  display: flex;
  gap: 16px;
  list-style: none;
  justify-content: center;
  flex: 1;
}

.navbar-items.show {
  display: flex !important;
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
  height: 0.15em;
  border-radius: 100000px;
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
  width: 2em;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    0.1s box-shadow,
    0.1s transform;
}

@media (hover: hover) {
  .language-switch:hover {
    box-shadow: var(--card-shadow);
    transform: translateY(-20%) scale(1.05);
  }
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

@media (min-width: 1000px) {
  .navbar-items {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }

  nav {
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  nav {
    justify-content: space-between;
    font-size: 1em;
  }

  .nav-menu {
    display: block;
  }

  .navbar-items {
    display: none;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    gap: 0;
    transform-origin: left;
  }

  .navbar-items.show {
    display: flex !important;
  }

  .view-link {
    padding: 12px 4px;
  }
}
</style>
