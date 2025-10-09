import { type Position, type Velocity } from '@/types'
import { type hslaColor } from '@/types'
import { gaussianCurve } from '@/utils'

const MOUSE_INFLUENCE_RADIUS = 300
const MOUSE_ATTRACTION_STRENGTH = 0.6
const EXPLOSION_STRENGTH = 0.7

export class Bubble {
  public position: Position
  private velocity: Velocity
  public radius: number
  public color: hslaColor
  private readonly randomSeed: number = Math.random() / 100 // Random value for wave motion generation

  constructor(position: Position, velocity?: Velocity, radius?: number, color?: hslaColor) {
    this.position = position
    this.velocity = velocity || { x: (Math.random() - 0.5) / 2, y: (Math.random() - 0.5) / 2 }
    this.radius = radius || Math.random() * 14 + 6
    this.color = color || {
      h: 210,
      s: 10,
      l: Math.random() * 30 + 50,
      a: 0.7,
    }
  }

  private waveMotionComponent(time: number, phase?: number): number {
    return (
      Math.sin(
        time * this.randomSeed + this.position.x * 0.01 + (phase ?? 0) + this.randomSeed * 100,
      ) * 0.2
    )
  }

  private mouseAttractionComponent(mousePosition: Position): Velocity {
    const dx = mousePosition.x - this.position.x
    const dy = mousePosition.y - this.position.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > MOUSE_INFLUENCE_RADIUS) {
      return { x: 0, y: 0 }
    }

    const normalizedX = dx / distance
    const normalizedY = dy / distance

    // The Gaussian curve is used to decrease the force when the bubble is really close to the mouse
    // This prevents the bubbles from oscillating too long around the mouse position
    const force = gaussianCurve(
      distance,
      MOUSE_INFLUENCE_RADIUS / 2,
      MOUSE_INFLUENCE_RADIUS / 4,
      MOUSE_ATTRACTION_STRENGTH,
    )

    return {
      x: normalizedX * force,
      y: normalizedY * force,
    }
  }

  public explode(mousePosition: Position): void {
    const dx = this.position.x - mousePosition.x
    const dy = this.position.y - mousePosition.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < MOUSE_INFLUENCE_RADIUS) {
      const angle = Math.atan2(dy, dx)
      const force = (100 - distance) * EXPLOSION_STRENGTH * 0.1
      this.velocity.x += Math.cos(angle) * force * 5
      this.velocity.y += Math.sin(angle) * force * 5
    }
  }

  public update(
    time: number,
    canvasWidth: number,
    canvasHeight: number,
    mousePosition: Position,
    isMouseAttracting: boolean,
  ): void {
    this.velocity.x += isMouseAttracting ? this.mouseAttractionComponent(mousePosition).x : 0
    this.velocity.y += isMouseAttracting ? this.mouseAttractionComponent(mousePosition).y : 0

    this.position.x += this.velocity.x + this.waveMotionComponent(time)

    this.position.y += this.velocity.y + this.waveMotionComponent(time, Math.PI / 2)

    // Bounce off the walls
    if (this.position.x + this.radius > canvasWidth || this.position.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.position.y + this.radius > canvasHeight || this.position.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }

    // Damping effect
    this.velocity.y *= 0.96
    this.velocity.x *= 0.96
  }
}
