<script setup lang="ts">
import HomeBubbles from '@/components/HomeBubbles.vue'
</script>

<template>
  <div class="titles">
    <h2>{{ $t('home.title') }}</h2>
    <h3>
      {{ $t('home.subtitle') }}
      <a class="ense3-link" href="https://ense3.grenoble-inp.fr/" target="_blank" rel="noopener">
        Grenoble INP - Ense3 <img src="@/assets/images/corner-arrow.svg" alt="" />
      </a>
    </h3>
  </div>
  <HomeBubbles></HomeBubbles>
  <div class="animated-background"></div>
</template>

<style scoped>
.titles {
  max-width: 900px;
  text-align: center;
  cursor: default;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  gap: 16px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 30%, #2563eb 70%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 12px rgba(96, 165, 250, 0.3))
    drop-shadow(0 0 20px rgba(96, 165, 250, 0.2));
  text-shadow: 0 0 6px hsla(224, 76%, 48%, 0.3);
  animation: 0.7s ease-out 0.1s fadein;
  animation-fill-mode: both;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 700px;
  color: rgba(55, 65, 81, 0.83);
  animation: 0.7s ease-out 0.3s fadein;
  animation-fill-mode: both;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translate(0, 20px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.animated-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.1),
    rgba(147, 51, 234, 0.08),
    rgba(236, 72, 153, 0.1),
    rgba(59, 130, 246, 0.7)
  );
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

.ense3-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.ense3-link:hover {
  color: #1d4ed8;
}

.ense3-link img {
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
  filter: brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(2366%) hue-rotate(212deg)
    brightness(93%) contrast(98%);
}

.ense3-link:hover img {
  transform: translate(2px, -2px);
  filter: brightness(0) saturate(100%) invert(29%) sepia(96%) saturate(5820%) hue-rotate(226deg)
    brightness(89%) contrast(90%);
}

@keyframes gradientShift {
  0% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 75% 50%;
  }
  100% {
    background-position: 25% 50%;
  }
}
</style>
