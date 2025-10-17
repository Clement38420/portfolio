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
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Calibri;
  src: url('./assets/fonts/Calibri/calibri_bold.ttf');
  font-weight: bold;
  font-style: normal;
}

:root {
  --bg-color: hsl(0, 0%, 95%);
  --bg-light-color: hsl(0, 0%, 100%);
  --bg-dark-color: hsl(0, 0%, 90%);

  --text-color: hsl(0, 0%, 5%);
  --text-muted: hsl(0, 0%, 40%);

  --card-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  --card-shadow-close: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  --card-shadow-high: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 8px 12px 0 rgba(0, 0, 0, 0.1);
}

body {
  background-color: var(--bg-dark-color);
  font-family: Calibri, sans-serif;
  color: var(--text-color);
  font-size: clamp(1rem, 3vw, 1.2rem);
}

.view-background {
  position: fixed;
  inset: 70px 0 0 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
  z-index: -1;
}

.title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #4a96f6 0%, #3b82f6 30%, #2563eb 70%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 80px;
  width: fit-content;
  padding-bottom: 0.05em;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
