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
  skill('about.skills.items.mechatronics', Robotics),
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

const scrollArrowShowed = ref(window.scrollY <= 600) // Hide arrow if the page is already scrolled down

onMounted(() => {
  document.addEventListener('scroll', updateScrollAnimations)
  document.addEventListener('scroll', () => (scrollArrowShowed.value = false))
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

    <div class="section2">
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
      <BaseCard class="section-card studies scroll-animated" no-hover>
        <h3 class="title studies-title">{{ $t('about.studies.title') }}</h3>
        <div class="content">
          <svg width="40" height="400" viewBox="0 0 10 100" class="studies-svg">
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#ffffffff" />
                <stop offset="40%" stop-color="#1d4ed8" />
                <stop offset="100%" stop-color="#1d4ed8" />
              </linearGradient>
            </defs>
            <path
              d="M 5 100
               q -5 -10 0 -20 t 0 -14 t 0 -12
               a 2 2 0 0 0 0 -4
               a 2 2 0 0 0 0 4
               a 2 2 0 0 0 0 -4
               q 5 -8 0 -10 t 0 -10 t 0 -14 t 0 -10
               a 2 2 0 0 0 0 -4
               a 2 2 0 0 0 0 4"
              stroke="url(#gradientStroke)"
              fill="transparent"
              stroke-linecap="round"
              stroke-width="0.8"
              stroke-dasharray="131"
              stroke-dashoffset="131"
            />
          </svg>
          <ul class="studies-list">
            <li class="studies-item ense3">
              <h4 class="school">Grenoble INP - Ense3</h4>
              <p class="dates">2024-2027</p>
              <p class="description">
                {{ $t('about.studies.ense3') }}
              </p>
            </li>
            <li class="studies-item cpge">
              <h4 class="school">Lycée Claude-Louis Berthollet, Annecy</h4>
              <p class="dates">2022-2024</p>
              <p class="description">
                {{ $t('about.studies.cpge') }}
              </p>
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>

    <Transition name="down-arrow">
      <div class="downArrow" v-if="scrollArrowShowed">
        <img
          src="../assets/images/icons/down-arrow.svg"
          alt="Scroll down arrow"
          width="40"
          height="40"
        />
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

.scroll-animated *,
.scroll-animated,
.scroll-animated::before,
.scroll-animated::after,
.scroll-animated *::before,
.scroll-animated *::after {
  animation-play-state: paused !important;
}

.about-view {
  padding: 70px clamp(12px, 10vw, 128px);
}

.hero {
  --portrait-width: 500px;
  --header-height: max(60vh, 500px);

  position: relative;
  top: calc(50vh - 70px);
  translate: 0 -50%;
  animation: fadeInUp 0.8s ease-out;
  display: flex;
}

.hero-card {
  width: 100%;
  position: relative;
  padding: clamp(12px, 10%, 64px);
  padding-right: var(--portrait-width);
}

.portrait-card {
  align-self: center;
  width: var(--portrait-width);
  aspect-ratio: 0.9 / 1;
  border-radius: 15px;
  position: absolute;
  right: 0;
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
  background: url('@/assets/images/icons/corner-arrow.svg') no-repeat center;
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

.section2 {
  margin-top: min(40vh, 30vw);
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}

.section2 > .section-card {
  flex: 1 1 600px;
  padding: clamp(12px, 10%, 64px);
}

.skills {
  animation: fadeInUp 0.8s ease-out;

  --animation-delay: 0.3s;
}

.studies-title,
.skills-title {
  position: relative;
  font-size: clamp(2rem, 5vw, 4rem);
  animation: fadeInUp 0.6s ease-out var(--animation-delay) both;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 2rem;
  padding: 0;
  animation: fadeInUp 0.6s ease-out var(--animation-delay) both;
}

.skill-item {
  border-radius: 10000px;
  border: 1px solid;
  padding: 0.7em 1em;
  font-weight: bold;
  font-size: 0.8em;
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
  animation: fadeInUp 0.6s ease-out var(--animation-delay) both;
}

.studies {
  --animation-delay: 0.6s;
}

.studies-title {
  animation-delay: var(--animation-delay);
}

.studies-title::after {
  animation-delay: calc(var(--animation-delay) + 0.6s);
}

.studies {
  position: relative;
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.studies .content {
  position: relative;
  display: flex;
}

.studies-svg {
  width: 40px;
  height: 400px;
  flex: none;
}

.studies-svg path {
  animation: drawLine 3s ease-out var(--animation-delay) forwards;
}

@keyframes drawLine {
  0% {
    stroke-dashoffset: 131;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

.studies-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 16px;
}

.studies-item {
  position: absolute;
}

.studies-item .dates {
  font-style: italic;
  color: var(--text-muted);
}

.studies-item.ense3 {
  top: 5px;
  animation: appear 1s ease calc(var(--animation-delay) + 2.3s) both;
}

.studies-item.cpge {
  top: 198px;
  animation: appear 1s ease calc(var(--animation-delay) + 0.8s) both;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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

@media (1200px < width < 1500px) {
  .hero-card {
    padding-right: clamp(12px, 10%, 64px);
  }

  .description {
    margin-right: 0;
  }

  .about-title {
    margin-right: calc(var(--portrait-width) - 64px);
  }

  .portrait-card {
    top: -340px;
    right: -24px;
  }

  .hero {
    margin-top: 200px;
  }
}

@media (max-width: 1200px) {
  .hero-card {
    padding-top: 64px;
    padding-right: clamp(12px, 10%, 64px);
  }

  .description {
    margin-right: 0;
  }

  .portrait-card {
    bottom: 92%;
    right: 50%;
    translate: 50% 0;
    width: min(60vw, var(--portrait-width));
  }

  .hero {
    margin-top: min(60vw, var(--portrait-width));
    top: calc(50vh - 70px);
  }
}

@media (max-width: 700px) {
  .hero {
    padding-bottom: 0;
  }
}
</style>
