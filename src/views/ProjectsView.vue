<script setup lang="ts">
import Base3DCard from '@/components/Base3DCard.vue'
import BaseCard from '@/components/BaseCard.vue'
import { SkillCategories } from '@/types'
import { nextTick, ref } from 'vue'
const { Programming, DIY, CAD, SoftSkills, Robotics } = SkillCategories

interface Project {
  name: string
  id: string
  category: SkillCategories
}

const projects: Project[] = [
  {
    name: 'portfolio',
    id: '1',
    category: Programming,
  },
  {
    name: 'moto',
    id: '2',
    category: DIY,
  },
  {
    name: 'tipe',
    id: '3',
    category: Robotics,
  },
  {
    name: 'top',
    id: '4',
    category: Programming,
  },
  {
    name: 'stockapp',
    id: '5',
    category: Programming,
  },
  {
    name: 'car',
    id: '6',
    category: DIY,
  },
]

const skillCategoriesColors: Record<SkillCategories, string> = {
  [Programming]: '#1565C0',
  [DIY]: '#BF360C',
  [CAD]: '#C62828',
  [SoftSkills]: '#2E7D32',
  [Robotics]: '#4527A0',
}

const extendedProject = ref<string>('')

function getProjectsRects() {
  return new Map(
    Array.from(document.querySelectorAll<HTMLElement>('.project-card-3d'), (el) => {
      return [el.dataset.id, el.getBoundingClientRect()]
    }),
  )
}

// FLIP animation
async function extendProject(id: string) {
  // First
  const first = getProjectsRects()

  extendedProject.value = extendedProject.value === id ? '' : id
  await nextTick()

  // Last
  const last = getProjectsRects()

  // Invert
  // Get only the elements that changed position or size
  const toAnimate = Array.from(first.keys()).filter((key) => {
    const f = first.get(key)
    const l = last.get(key)
    return (
      f &&
      l &&
      (f.left !== l.left || f.top !== l.top || f.width !== l.width || f.height !== l.height)
    )
  })

  toAnimate.forEach((key) => {
    const f = first.get(key)
    const l = last.get(key)
    if (f && l) {
      const el = document.querySelector<HTMLElement>(`.project-card-3d[data-id="${key}"]`)
      if (el) {
        const deltaX = f.left - l.left
        const deltaY = f.top - l.top
        const deltaW = f.width / l.width
        const deltaH = f.height / l.height

        // Play
        el.animate(
          [
            {
              transformOrigin: 'top left',
              transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
            },
            {
              transformOrigin: 'initial',
              transform: 'translate(0, 0) scale(1, 1)',
            },
          ],
          {
            duration: 300,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
        )
      }
    }
  })

  console.log(first, last)
}
</script>

<template>
  <div class="projects-view">
    <h2 class="title projects-view-title">{{ $t('projects.title') }}</h2>
    <div class="projects-grid">
      <Base3DCard
        class="project-card-3d"
        :class="[project.name, { extended: extendedProject === project.id }]"
        v-for="project in projects"
        :key="project.id"
        :data-id="project.id"
        @click="extendProject(project.id)"
        :no-hover="extendedProject === project.id"
      >
        <BaseCard class="project-card" no-hover>
          <img
            class="project-image"
            :src="`/src/assets/images/projects/${project.id}.png`"
            alt="project image"
          />
          <h3 class="project-title">{{ $t(`projects.projects.${project.id}.name`) }}</h3>
          <p class="project-category" :style="{ color: skillCategoriesColors[project.category] }">
            {{ $t(`projects.projects.${project.id}.category`) }}
          </p>
          <p class="project-description">{{ $t(`projects.projects.${project.id}.description`) }}</p>
        </BaseCard>
      </Base3DCard>
    </div>

    <div class="view-background"></div>
  </div>
</template>

<style scoped>
.projects-view {
  padding: 70px 0;
  position: relative;
}

.projects-view-title {
  position: relative;
  left: 50%;
  translate: -50%;
  margin-top: 64px;
}

.projects-view-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  translate: -50%;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
  transform-origin: center;
  animation: grow 0.8s ease-out 0.5s both;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.projects-grid {
  display: grid;
  margin: 0 auto;
  padding: 0 3em;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3em;
  container-type: inline-size;
  max-width: 1200px;
}

.project-card-3d {
  border-radius: 24px;
  grid-column: span 1;
  grid-row: span 1;
}

.project-card {
  height: 100%;
  width: 100%;
  padding: 1.7em;
}

.project-image {
  border-radius: 18px;
  width: 100%;
  height: 185px;
  object-fit: cover;
}

.project-title {
  margin-top: 0.5em;
  line-height: 1.2;
}

.project-category {
  font-style: italic;
  font-size: 0.9em;
}

.project-description {
  margin-top: 0.5em;
  color: var(--text-muted);
}

.project-card-3d.stockapp .project-image {
  object-fit: contain;
}

.extended {
  grid-column: span 2;
  grid-row: span 2;
}

@container (max-width: calc(500px + 3em)) {
  .extended {
    grid-column: span 1;
    grid-row: span 2;
  }
}

/* Correctif pour Safari (macOS et iOS) */
@supports (-webkit-appearance: none) {
  .projects-grid {
    /* Remplacer auto-fit par auto-fill pour Safari */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  /* Assurer une largeur minimale réelle */
  .project-card-3d {
    min-width: 300px;
  }
}
</style>
