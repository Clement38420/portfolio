import { type Position, type Velocity } from '@/types'
import { type hslaColor } from '@/types'

export class Bubble {
  public position: Position
  private velocity: Velocity
  public radius: number
  public color: hslaColor
  private readonly randomSeed: number = Math.random() / 100

  constructor(position: Position, velocity?: Velocity, radius?: number, color?: hslaColor) {
    this.position = position
    this.velocity = velocity || { x: (Math.random() - 0.5) / 2, y: (Math.random() - 0.5) / 2 }
    this.radius = radius || Math.random() * 5 + 3
    this.color = color || {
      h: 0,
      s: 0,
      l: Math.random() * 30 + 50,
      a: 0.6,
    }
  }

  public update(time: number, canvasWidth: number, canvasHeight: number): void {
    this.position.x +=
      this.velocity.x + Math.sin(time * this.randomSeed + this.position.x * 0.01) * 0.08
    this.position.y +=
      this.velocity.y + Math.cos(time * this.randomSeed + this.position.y * 0.01) * 0.08

    // Bounce off the walls
    if (this.position.x + this.radius > canvasWidth || this.position.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.position.y + this.radius > canvasHeight || this.position.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }

    this.velocity.y *= 0.99 // Damping effect
    this.velocity.x *= 0.99 // Damping effect
  }
}
