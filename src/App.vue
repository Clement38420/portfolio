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
  --card-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

body {
  background-color: #c3c3c3;
  font-family: Calibri, sans-serif;
}
</style>
