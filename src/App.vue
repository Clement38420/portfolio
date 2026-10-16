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
:root {
  --bg-color: hsl(45, 20%, 94%);
  --bg-light-color: hsl(45, 65%, 98%);
  --bg-dark-color: hsl(45, 15%, 83%);
  --bg-page-color: hsl(45, 40%, 99%);

  --text-color: hsl(45, 12%, 7%);
  --text-muted: hsl(45, 10%, 42%);

  --card-shadow-high: 5px 5px 0 hsl(45, 25%, 82%);
}

html {
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  display: none;
}

body {
  background-color: var(--bg-page-color);
  font-family: 'Open Sans', sans-serif;
  color: var(--text-color);
  font-size: clamp(1rem, 3vw, 1.2rem);
}

.view-background {
  position: fixed;
  inset: 70px 0 0 0;
  background-image:
    linear-gradient(rgba(120, 100, 60, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 100, 60, 0.08) 1px, transparent 1px),
    linear-gradient(180deg, #ffffff 0%, hsl(46, 70%, 97%) 85%);
  background-size:
    40px 40px,
    40px 40px,
    100% 100%;
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
