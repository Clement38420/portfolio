<script setup lang="ts">
import HomeBubbles from '@/components/HomeBubbles.vue'
</script>

<template>
  <div class="titles">
    <h2 class="title">{{ $t('home.title') }}</h2>
    <h3>
      {{ $t('home.subtitle') }}
      <a class="ense3-link" href="https://ense3.grenoble-inp.fr/" target="_blank" rel="noopener">
        Grenoble INP - Ense3 <img src="../assets/images/icons/corner-arrow.svg" alt="" />
      </a>
    </h3>
  </div>
  <HomeBubbles></HomeBubbles>
  <div class="home-background"></div>
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
  animation: 0.7s ease-out 0.1s fadeInUp;
  animation-fill-mode: both;
  margin: 0;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1em, 2vw, 1.4rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 900px;
  color: rgba(55, 65, 81, 0.83);
  animation: 0.7s ease-out 0.3s fadeInUp;
  animation-fill-mode: both;
}

.home-background {
  position: fixed;
  inset: 0;
  z-index: -2;
  background: radial-gradient(ellipse at 50% 100%, #fde68a 0%, #fffbeb 75%);
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
</style>
