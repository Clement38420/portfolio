import { type Position, type Velocity } from '@/types'
import { type hslaColor } from '@/types'

export class Bubble {
  public position: Position
  private velocity: Velocity
  public radius: number
  public color: hslaColor

  constructor(position: Position, velocity?: Velocity, radius?: number, color?: hslaColor) {
    this.position = position
    this.velocity = velocity || { x: Math.random(), y: Math.random() }
    this.radius = radius || Math.random() * 3 + 6
    this.color = color || {
      h: 0,
      s: 0,
      l: Math.random() * 30 + 50,
      a: 0.6,
    }
  }

  public update(canvasWidth: number, canvasHeight: number): void {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // Bounce off the walls
    if (this.position.x + this.radius > canvasWidth || this.position.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.position.y + this.radius > canvasHeight || this.position.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }
  }
}
