<script setup lang="ts">
import { computed, onMounted, useTemplateRef } from 'vue'

const NUMBER_OF_BUBBLES = 50

const bubblesCanvas = useTemplateRef('bubbles-canvas')

interface Position {
  x: number
  y: number
}

interface hslaColor {
  h: number
  s: number
  l: number
  a: number
}

function getRandomCoordinatesInCanvas(): Position {
  if (!bubblesCanvas.value) return { x: 0, y: 0 }
  return {
    x: Math.random() * bubblesCanvas.value.width,
    y: Math.random() * bubblesCanvas.value.height,
  }
}

function drawDisk(
  ctx: CanvasRenderingContext2D,
  position: Position,
  radius: number,
  color: hslaColor,
) {
  ctx.beginPath()
  ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, true)
  ctx.fillStyle = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`
  ctx.fill()
}

onMounted(() => {
  const ctx = bubblesCanvas.value?.getContext('2d')
  if (ctx) {
    for (let i = 0; i < NUMBER_OF_BUBBLES; i++) {
      const position: Position = getRandomCoordinatesInCanvas()
      const radius = Math.random() * 3 + 6
      const color: hslaColor = {
        h: 0,
        s: 0,
        l: Math.random() * 30 + 50,
        a: 0.6,
      }
      drawDisk(ctx, position, radius, color)
    }
  }
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
  border: 1px solid red;
}
</style>
