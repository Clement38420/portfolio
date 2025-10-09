<script setup lang="ts">
import HomeBubbles from '@/components/HomeBubbles.vue'
</script>

<template>
  <h2>{{ $t('messages.heading') }}</h2>
  <HomeBubbles></HomeBubbles>
</template>

<style scoped>
h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  max-width: 900px;
  text-align: center;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 30%, #2563eb 70%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 12px rgba(96, 165, 250, 0.3))
    drop-shadow(0 0 20px rgba(96, 165, 250, 0.2));
  text-shadow: 0 0 6px hsla(224, 76%, 48%, 0.3);
  cursor: default;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 1s ease-out 0.1s fadein;
  animation-fill-mode: both;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 20px));
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
