<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import Base3DCard from '@/components/Base3DCard.vue'
import { onMounted, ref } from 'vue'
import { SkillCategories, type Skills } from '@/types'
const { Programming, DIY, CAD, SoftSkills, Robotics } = SkillCategories

function skill(name: string, category: SkillCategories): Skills {
  return { name, category }
}

const skillCategoriesTranslation: Record<SkillCategories, string> = {
  [Programming]: 'about.skills.categories.programming',
  [DIY]: 'about.skills.categories.diy',
  [CAD]: 'about.skills.categories.cad',
  [SoftSkills]: 'about.skills.categories.softSkills',
  [Robotics]: 'about.skills.categories.robotics',
}

const skills = [
  skill('about.skills.items.webDevelopment', Programming),
  skill('about.skills.items.python', Programming),
  skill('about.skills.items.matlab', Programming),
  skill('about.skills.items.cppArduino', Programming),
  skill('about.skills.items.automation', Robotics),
  skill('about.skills.items.signalProcessing', Robotics),
  skill('about.skills.items.arcWelding', DIY),
  skill('about.skills.items.woodWork', DIY),
  skill('about.skills.items.metalWork', DIY),
  skill('about.skills.items.electronics', DIY),
  skill('about.skills.items.3dPrinting', CAD),
  skill('about.skills.items.solidworks', CAD),
  skill('about.skills.items.teamwork', SoftSkills),
  skill('about.skills.items.sociability', SoftSkills),
  skill('about.skills.items.problemSolving', SoftSkills),
]

const skillCategoriesColors: Record<SkillCategories, string> = {
  [Programming]: '#1565C0',
  [DIY]: '#BF360C',
  [CAD]: '#C62828',
  [SoftSkills]: '#2E7D32',
  [Robotics]: '#4527A0',
}

function updateScrollAnimations() {
  const scrollAnimatedElements = document.querySelectorAll<HTMLElement>('.scroll-animated')
  scrollAnimatedElements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    // When the element first half is visible
    if (rect.top + rect.height / 2 < window.innerHeight) {
      element.classList.remove('scroll-animated')
    }
  })
}

const arrowShowed = ref(true)

onMounted(() => {
  document.addEventListener('scroll', updateScrollAnimations)
  document.addEventListener('scroll', () => (arrowShowed.value = false))
  updateScrollAnimations()
})
</script>

<template>
  <div class="about-view">
    <div class="view-background"></div>

    <div class="hero">
      <BaseCard class="section-card hero-card" no-hover>
        <h2 class="title about-title">{{ $t('about.title') }}</h2>
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

      <Base3DCard class="portrait-card">
        <img src="@/assets/images/portrait.jpeg" alt="Clement Charbonnel's portrait" />
      </Base3DCard>
    </div>

    <BaseCard class="section-card skills scroll-animated" no-hover>
      <h3 class="title skills-title">{{ $t('about.skills.title') }}</h3>
      <ul class="skills-legend">
        <li
          v-for="(color, category) in skillCategoriesColors"
          :key="category"
          class="skills-legend-item"
          :style="{ color: `${color}ff` }"
        >
          {{ $t(skillCategoriesTranslation[category]) }}
        </li>
      </ul>

      <ul class="skills-list">
        <li
          v-for="skill in skills"
          :key="skill.name"
          class="skill-item"
          :style="{
            borderColor: skillCategoriesColors[skill.category],
            color: skillCategoriesColors[skill.category],
          }"
        >
          {{ $t(skill.name) }}
        </li>
      </ul>
    </BaseCard>

    <Transition name="down-arrow">
      <div class="downArrow" v-if="arrowShowed">
        <img src="@/assets/images/down-arrow.svg" alt="Scroll down arrow" width="40" height="40" />
      </div>
    </Transition>

    <div class="hiding-gradient"></div>
  </div>
</template>

<style scoped>
.title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 2px;
  transform-origin: center left;
  animation: grow 0.6s ease-out 0.9s both;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.section-card {
  padding: 4rem;
}

.about-view {
  padding: 128px;
}

.hero {
  --portrait-width: 500px;
  --header-height: max(60vh, 500px);

  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.hero-card {
  width: 100%;
  position: relative;
  top: 50px;
  height: calc(var(--header-height) - 100px);
  padding-right: var(--portrait-width);
  padding-bottom: 50px;
}

.portrait-card {
  width: var(--portrait-width);
  height: var(--header-height);
  border-radius: 15px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.portrait-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.about-title {
  position: relative;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.5;
  margin-right: 64px;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
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
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  filter: brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(2366%) hue-rotate(212deg)
    brightness(93%) contrast(98%);
}

.link:hover::after {
  transform: translate(2px, -2px);
  filter: brightness(0) saturate(100%) invert(29%) sepia(96%) saturate(5820%) hue-rotate(226deg)
    brightness(89%) contrast(90%);
}

.scroll-animated *,
.scroll-animated,
.scroll-animated::before,
.scroll-animated::after,
.scroll-animated *::before,
.scroll-animated *::after {
  animation-play-state: paused !important;
}

.skills {
  width: max(700px, 50%);
  margin-top: 256px;
  animation: fadeInUp 0.8s ease-out;
}

.skills-title {
  position: relative;
  font-size: clamp(2rem, 5vw, 4rem);
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 2rem;
  padding: 0;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.skill-item {
  border-radius: 10000px;
  border: 1px solid;
  padding: 0.7em 1em;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  background-color: var(--bg-color);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.skill-item:hover {
  box-shadow: var(--card-shadow);
  transform: translateY(-2px) scale(1.03);
}

.skills-legend {
  display: flex;
  gap: 1rem;
  padding: 0;
  flex-wrap: wrap;
  list-style: inside;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.downArrow {
  position: fixed;
  bottom: 32px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 1000;
  background: var(--bg-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--card-shadow-high);
}

.down-arrow-leave-active {
  transition: opacity 0.4s ease;
}

.down-arrow-leave-to {
  opacity: 0;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.downArrow img {
  opacity: 0.8;
}

.hiding-gradient {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, var(--bg-dark-color), transparent);
  pointer-events: none;
  z-index: 100;
}
</style>
