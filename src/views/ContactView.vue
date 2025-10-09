<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h2 class="contact-title">{{ $t('contact.title') }}</h2>
    </div>

    <div class="links">
      <BaseCard class="contact-card linkedin-card">
        <a
          href="https://www.linkedin.com/in/cl%C3%A9ment-charbonnel-089684285/"
          class="card-content"
          target="_blank"
          rel="noopener"
        >
          <img src="@/assets/images/linkedin.svg" alt="LinkedIn" class="icon" />
          <div class="text-content">
            <span class="text linkedin">LinkedIn</span>
            <span class="subtitle">{{ $t('contact.linkedin.subtitle') }}</span>
          </div>
          <img class="arrow" src="@/assets/images/corner-arrow.svg" alt="" />
        </a>
      </BaseCard>

      <BaseCard class="contact-card email-card">
        <a href="mailto:c.charbo38@gmail.com" class="card-content">
          <img src="@/assets/images/mail.svg" alt="Email" class="icon" />
          <div class="text-content">
            <span class="text mail">Mail</span>
            <span class="subtitle">{{ $t('contact.email.subtitle') }}</span>
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
.contact-page {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 50%);
}

.contact-hero {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out;
}

.contact-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 30%, #2563eb 70%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 20px rgba(96, 165, 250, 0.3));
  margin: 0 0 1rem 0;
  position: relative;
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
  animation: slideIn 0.8s ease-out 0.5s both;
}

.links {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card {
  position: relative;
  width: 300px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

.linkedin-card:hover {
  box-shadow: 0 20px 40px rgba(16, 71, 163, 0.3);
}

.email-card:hover {
  box-shadow: 0 20px 40px rgba(107, 114, 128, 0.3);
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
  width: 32px;
  height: 32px;
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
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 1.2;
}

.subtitle {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.arrow {
  width: 24px;
  height: 24px;
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
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid #22c55e;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  background-color: rgba(34, 197, 94, 0.12);
  animation: fadeInUp 0.8s ease-out 0.9s backwards;
}

.green-circle {
  width: 12px;
  height: 12px;
  background-color: #1eaf53;
  border-radius: 50%;
  display: inline-block;
  margin-top: -2px;
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

@keyframes slideIn {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}
</style>
