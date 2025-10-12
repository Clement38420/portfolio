<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import Base3DCard from '@/components/Base3DCard.vue'
</script>

<template>
  <div class="view-background"></div>

  <div class="hero">
    <BaseCard class="hero-text-content" no-hover>
      <h2 class="about-title">{{ $t('about.title') }}</h2>
      <i18n-t keypath="about.description" tag="p" class="description">
        <template v-slot:ense3-link>
          <a
            class="ense3-link link"
            href="https://ense3.grenoble-inp.fr/"
            target="_blank"
            rel="noopener"
          >
            Grenoble INP - Ense3
          </a>
        </template>
        <template v-slot:projects-link>
          <RouterLink class="link" to="/projects">
            {{ $t('nav.projects') }}
          </RouterLink>
        </template>
      </i18n-t>
    </BaseCard>

    <Base3DCard class="portrait">
      <img src="@/assets/images/portrait.jpeg" alt="Clement Charbonnel's portrait" />
    </Base3DCard>
  </div>
</template>

<style scoped>
.hero {
  --portrait-width: 500px;
  --header-height: max(60vh, 500px);

  width: 80vw;
  margin: 10vh auto;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.hero-text-content {
  width: 100%;
  position: relative;
  top: 50px;
  height: calc(var(--header-height) - 100px);
  padding-right: var(--portrait-width);
  padding-bottom: 50px;
}

.portrait {
  width: var(--portrait-width);
  height: var(--header-height);
  border-radius: 15px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.about-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 30%, #2563eb 70%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 2px;
  transform-origin: center left;
  animation: grow 0.6s ease-out 1s both;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.5;
  margin-right: 64px;
  animation: fadeInUp 0.6s ease-out 0.3s both;
  margin-top: 80px;
}

.link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.link:hover {
  color: #1d4ed8;
}

.link::after {
  content: '';
  background: url('@/assets/images/corner-arrow.svg') no-repeat center;
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
  filter: brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(2366%) hue-rotate(212deg)
    brightness(93%) contrast(98%);
}

.link:hover::after {
  transform: translate(2px, -2px);
  filter: brightness(0) saturate(100%) invert(29%) sepia(96%) saturate(5820%) hue-rotate(226deg)
    brightness(89%) contrast(90%);
}
</style>
