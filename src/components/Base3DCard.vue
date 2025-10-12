<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { computeDistance } from '@/utils'

const card = useTemplateRef('card')
const reflection = useTemplateRef('reflection')

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

      if (reflection.value) {
        reflection.value.style.opacity = `min(${intensity}, 1)`
        reflection.value.style.top = `${y}px`
        reflection.value.style.left = `${x}px`
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
    <div class="content">
      <slot></slot>
    </div>
    <div class="reflection" ref="reflection"></div>
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

.reflection {
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 60px 10px white;
  z-index: 10;
  opacity: 0;
}

.card:hover .reflection {
  opacity: 1;
}
</style>
