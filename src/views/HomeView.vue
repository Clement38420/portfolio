<script setup lang="ts">
import HomeBubbles from '@/components/HomeBubbles.vue'
</script>

<template>
  <h2>Salut ! Je m'appelle Clément</h2>
  <HomeBubbles></HomeBubbles>
</template>

<style scoped>
h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  letter-spacing: -0.02em;
  margin: 0;
}

#waveCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}
</style>
