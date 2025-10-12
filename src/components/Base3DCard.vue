<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { computeDistance } from '@/utils'

const card = useTemplateRef('card')
const shine = useTemplateRef('shine')

onMounted(() => {
  if (card.value) {
    const rect = card.value.getBoundingClientRect()

    card.value.addEventListener('mousemove', (e) => {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateY = -(x / centerX - 1)
      const rotateX = y / centerY - 1
      const intensity = computeDistance({ x: x, y: y }, { x: centerX, y: centerY }) / 200

      if (card.value)
        card.value.style.transform = `perspective(500px) rotate3d(${rotateX}, ${rotateY}, 0, ${intensity}deg)`

      if (shine.value) {
        const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI - 90
        shine.value.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)`
        shine.value.style.opacity = Math.min(intensity * 1.1, 0.45).toString()
      }
    })

    card.value.addEventListener('mouseleave', () => {
      if (card.value) card.value.style.transform = 'unset'
    })
  }
})
</script>

<template>
  <div class="card" ref="card">
    <div class="shine" ref="shine"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: inherit;
  box-shadow: var(--card-shadow);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.content:hover {
  transform: scale(1.03);
  box-shadow: var(--card-shadow-high);
}

.shine {
  transform: scale(1.03);
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: 12;
  opacity: 0;
  transition:
    opacity 0.2s,
    background 0.2s;
}
</style>
