<script setup lang="ts">
import { computed, onMounted, useTemplateRef } from 'vue'
import type { Position } from '@/types'
import { Bubble } from '@/classes'
import { drawBubble, getCanvasMousePosition, getRandomCoordinatesInCanvas } from '@/utils'

const bubblesCanvas = useTemplateRef('bubbles-canvas')

const NUMBER_OF_BUBBLES = 300
let bubbles = Array<Bubble>(NUMBER_OF_BUBBLES)

let time = 0

let isMouseAttracting = false
document.addEventListener('mouseout', () => (isMouseAttracting = false))
let mousePosition: Position = { x: 0, y: 0 }
document.addEventListener('mousemove', (event) => {
  isMouseAttracting = true

  if (!bubblesCanvas.value) {
    return mousePosition
  }

  mousePosition = getCanvasMousePosition(
    { x: event.clientX, y: event.clientY },
    bubblesCanvas.value,
  )
})

function render() {
  const ctx = bubblesCanvas.value?.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    bubbles.forEach((bubble) => {
      bubble.update(time, ctx.canvas.width, ctx.canvas.height, mousePosition, isMouseAttracting)
      drawBubble(ctx, bubble)
    })
  }

  time += 1
  requestAnimationFrame(render)
}

onMounted(() => {
  bubbles = Array.from(
    { length: NUMBER_OF_BUBBLES },
    () => new Bubble(getRandomCoordinatesInCanvas(bubblesCanvas.value as HTMLCanvasElement)),
  )

  render()
})

const windowDimensions = computed(() => {
  return {
    width: window.screen.width * 2, // Higher resolution with * 2
    height: window.screen.height * 2,
  }
})
</script>

<template>
  <canvas
    ref="bubbles-canvas"
    id="bubbles"
    :width="windowDimensions.width"
    :height="windowDimensions.height"
  ></canvas>
</template>

<style scoped>
canvas#bubbles {
  position: fixed;
  inset: 70px 0 0 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}
</style>
