<script setup lang="ts">
import HomeBubbles from '@/components/HomeBubbles.vue'
</script>

<template>
  <div class="titles">
    <h2 class="title">{{ $t('home.title') }}</h2>
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
  font-size: clamp(2.5rem, 8vw, 6rem);
  filter: drop-shadow(0 4px 12px rgba(96, 165, 250, 0.3))
    drop-shadow(0 0 20px rgba(96, 165, 250, 0.2));
  text-shadow: 0 0 6px hsla(224, 76%, 48%, 0.3);
  animation: 0.7s ease-out 0.1s fadeInUp;
  animation-fill-mode: both;
  margin: 0;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 700px;
  color: rgba(55, 65, 81, 0.83);
  animation: 0.7s ease-out 0.3s fadeInUp;
  animation-fill-mode: both;
}

.animated-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    45deg,
    rgba(96, 165, 250, 0.15),
    rgba(59, 130, 246, 0.18),
    rgba(37, 99, 235, 0.12),
    rgba(29, 78, 216, 0.2),
    rgba(99, 102, 241, 0.16),
    rgba(139, 92, 246, 0.14)
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
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
