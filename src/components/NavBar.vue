<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}

const toLanguage = computed(() => (locale.value === 'en' ? 'fr' : 'en'))

const languageImage = computed(() => {
  return new URL(`../assets/images/${toLanguage.value}.svg`, import.meta.url).href
})
</script>

<template>
  <nav>
    <h1>Clément Charbonnel</h1>
    <ul class="navbar-items">
      <li class="navbar-item">
        <RouterLink class="view-link" to="/">{{ $t('nav.home') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/about">{{ $t('nav.about') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/projects">{{ $t('nav.projects') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/contact">{{ $t('nav.contact') }}</RouterLink>
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
  transition: 0.1s background-color;
}

.view-link:hover {
  background-color: var(--bg-color);
  border-radius: 8px;
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
  transition: 0.1s box-shadow;
}

.language-switch:hover {
  box-shadow: var(--card-shadow);
}

.language-switch:active {
  box-shadow: var(--card-shadow-close);
}

.language-switch img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 2px;
}
</style>
