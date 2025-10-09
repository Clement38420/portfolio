import type { Position } from '@/types'
import { Bubble } from '@/classes'

export function getCanvasMousePosition(
  clientPosition: Position,
  canvas: HTMLCanvasElement,
): Position {
  const rect = canvas.getBoundingClientRect()

  // Relative position
  const cssX = clientPosition.x - rect.left
  const cssY = clientPosition.y - rect.top

  // Get which dimension is the limiting factor for scaling
  const scaleToFitX = rect.width / canvas.width
  const scaleToFitY = rect.height / canvas.height
  const scale = Math.max(scaleToFitX, scaleToFitY)

  // Apply the right scale to get the display size of the canvas
  const displayWidth = canvas.width * scale
  const displayHeight = canvas.height * scale

  // Adding the css offset (canvas position on the page) + the offset due to object-fit: cover, and then put it back to the canvas scale
  const canvasX = (cssX + (displayWidth - rect.width) / 2) / scale
  const canvasY = (cssY + (displayHeight - rect.height) / 2) / scale

  return { x: canvasX, y: canvasY }
}

export function getRandomCoordinatesInCanvas(canvas: HTMLCanvasElement): Position {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  }
}

export function drawBubble(ctx: CanvasRenderingContext2D, bubble: Bubble) {
  ctx.beginPath()
  ctx.arc(bubble.position.x, bubble.position.y, bubble.radius, 0, Math.PI * 2, true)
  ctx.fillStyle = `hsla(${bubble.color.h}, ${bubble.color.s}%, ${bubble.color.l}%, ${bubble.color.a})`
  ctx.fill()
}
