<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <div class="view-background"></div>
  <div class="contact-view">
    <h2 class="title contact-title">{{ $t('contact.title') }}</h2>

    <div class="links">
      <BaseCard class="contact-card linkedin-card">
        <a
          href="https://www.linkedin.com/in/cl%C3%A9ment-charbonnel-089684285/"
          class="card-content"
          target="_blank"
          rel="noopener"
        >
          <img src="@/assets/images/linkedin.svg" class="icon" alt="" />
          <div class="text-content">
            <span class="text linkedin">LinkedIn</span>
            <span class="subtitle">{{ $t('contact.linkedin.subtitle') }}</span>
          </div>
          <img class="arrow" src="@/assets/images/corner-arrow.svg" alt="" />
        </a>
      </BaseCard>

      <BaseCard class="contact-card email-card">
        <a href="mailto:c.charbo38@gmail.com" class="card-content">
          <img src="@/assets/images/mail.svg" class="icon" alt="" />
          <div class="text-content">
            <span class="text mail">Mail</span>
            <span class="subtitle">{{ $t('contact.email.subtitle') }}</span>
          </div>
          <img class="arrow" src="@/assets/images/corner-arrow.svg" alt="" />
        </a>
      </BaseCard>

      <BaseCard class="contact-card github-card">
        <a href="https://github.com/Clement38420" class="card-content">
          <img src="@/assets/images/github.svg" class="icon" alt="" />
          <div class="text-content">
            <span class="text mail">GitHub</span>
            <span class="subtitle">{{ $t('contact.github.subtitle') }}</span>
          </div>
          <img class="arrow" src="@/assets/images/corner-arrow.svg" alt="" />
        </a>
      </BaseCard>
    </div>

    <div class="footer-note">
      <div class="green-circle"></div>
      <p>{{ $t('contact.footerNote') }}</p>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 2rem 2rem;
  min-height: 600px;
}

.contact-title {
  filter: drop-shadow(0 4px 20px rgba(96, 165, 250, 0.3));
  position: relative;
  text-align: center;
  margin: 0 0 4rem 0;
  animation: fadeInUp 0.8s ease-out;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
  transform-origin: center;
  animation: grow 0.8s ease-out 0.5s both;
}

.links {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-card {
  position: relative;
  width: 350px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

.linkedin-card:hover {
  box-shadow: 0 20px 40px rgba(16, 71, 163, 0.3) !important;
}

.email-card:hover {
  box-shadow: 0 20px 40px rgba(242, 66, 54, 0.3) !important;
}

.github-card:hover {
  box-shadow: 0 20px 40px rgba(189, 109, 253, 0.3) !important;
}

.card-content {
  display: flex;
  color: inherit;
  text-decoration: none;
  align-items: center;
  gap: 1rem;
  position: relative;
  height: 100%;
}

.icon {
  width: 1.8em;
  height: 1.8em;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 3);
  position: relative;
  z-index: 2;
}

.contact-card:hover .icon {
  transform: scale(1.1) rotate(5deg);
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.text.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #004182 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text.mail {
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text {
  font-size: 1.1em;
  font-weight: bold;
  line-height: 1.2;
}

.subtitle {
  font-size: 0.8em;
  color: var(--text-muted);
}

.arrow {
  width: 1.2em;
  height: 1.2em;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  opacity: 0.5;
}

.contact-card:hover .arrow {
  transform: translateX(4px) translateY(-4px);
  opacity: 0.7;
}

.footer-note {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #138f41;
  font-size: 0.9em;
  text-align: center;
  border: 1px solid #22c55e;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  background-color: rgba(34, 197, 94, 0.12);
  animation: fadeInUp 0.8s ease-out 0.9s backwards;
}

.green-circle {
  height: 12px;
  aspect-ratio: 1 / 1;
  background-color: #1eaf53;
  border-radius: 50%;
  display: inline-block;
  margin-top: -2px;
}

@keyframes grow {
  0% {
    transform: translateX(-50%) scaleX(0);
  }
  100% {
    transform: translateX(-50%) scaleX(1);
  }
}

@media (max-width: 900px) {
  .title {
    margin-top: 100px;
  }
}
</style>
