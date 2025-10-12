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
  --bg-color: hsl(0, 0%, 95%);
  --bg-light-color: hsl(0, 0%, 100%);
  --bg-dark-color: hsl(0, 0%, 90%);

  --text-color: hsl(0, 0%, 5%);
  --text-muted: hsl(0, 0%, 50%);

  --card-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  --card-shadow-close: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  --card-shadow-high: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 8px 12px 0 rgba(0, 0, 0, 0.1);
}

body {
  background-color: var(--bg-dark-color);
  font-family: Calibri, sans-serif;
  color: var(--text-color);
}

.view-background {
  position: fixed;
  width: 100vw;
  height: calc(100vh - 70px);
  background:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 50%);
}
</style>
