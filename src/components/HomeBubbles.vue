<script setup lang="ts">
import { computed, onMounted, useTemplateRef } from 'vue'
import type { hslaColor, Position } from '@/types'
import { Bubble } from '@/classes'

const NUMBER_OF_BUBBLES = 200
let bubbles = Array<Bubble>(NUMBER_OF_BUBBLES)

let time = 0

const bubblesCanvas = useTemplateRef('bubbles-canvas')

function getRandomCoordinatesInCanvas(): Position {
  if (!bubblesCanvas.value) return { x: 0, y: 0 }
  return {
    x: Math.random() * bubblesCanvas.value.width,
    y: Math.random() * bubblesCanvas.value.height,
  }
}

function drawBubble(ctx: CanvasRenderingContext2D, bubble: Bubble) {
  ctx.beginPath()
  ctx.arc(bubble.position.x, bubble.position.y, bubble.radius, 0, Math.PI * 2, true)
  ctx.fillStyle = `hsla(${bubble.color.h}, ${bubble.color.s}%, ${bubble.color.l}%, ${bubble.color.a})`
  ctx.fill()
}

function render() {
  const ctx = bubblesCanvas.value?.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    bubbles.forEach((bubble) => {
      bubble.update(time, ctx.canvas.width, ctx.canvas.height)
      drawBubble(ctx, bubble)
    })
  }

  time += 1
  requestAnimationFrame(render)
}

onMounted(() => {
  bubbles = Array.from(
    { length: NUMBER_OF_BUBBLES },
    () => new Bubble(getRandomCoordinatesInCanvas()),
  )

  render()
})

const windowDimensions = computed(() => {
  return {
    width: window.screen.width,
    height: window.screen.height,
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
  height: calc(100vh - 70px);
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}
</style>
