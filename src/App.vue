<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <main>
    <RouterView />
  </main>
</template>

<style>
@font-face {
  font-family: Calibri;
  src: url('./assets/fonts/Calibri/calibri.ttf');
}

@font-face {
  font-family: Calibri;
  src: url('./assets/fonts/Calibri/calibri_bold.ttf');
  font-weight: bold;
}

:root {
  --bg-color: hsl(210, 80%, 95%);
  --bg-light-color: hsl(0, 0%, 100%);
  --bg-dark-color: hsl(0, 0%, 90%);

  --text-color: hsl(0, 0%, 5%);
  --text-muted: hsl(0, 0%, 60%);

  --card-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  --card-shadow-close: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

body {
  background-color: var(--bg-color);
  font-family: Calibri, sans-serif;
}
</style>
