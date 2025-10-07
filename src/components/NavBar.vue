<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <nav>
    <h1>Clément Charbonnel</h1>
    <ul class="navbar-items">
      <li class="navbar-item">
        <RouterLink class="view-link" to="/">{{ t('nav.home') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/about">{{ t('nav.about') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/projects">{{ t('nav.projects') }}</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink class="view-link" to="/contact">{{ t('nav.contact') }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 70px;
  background-color: white;
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
}
</style>
