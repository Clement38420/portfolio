<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { computeDistance } from '@/utils'

const card = useTemplateRef('card')

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
</style>
