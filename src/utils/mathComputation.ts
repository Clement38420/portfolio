import type { Position } from '@/types'

export function computeDistance(pos1: Position, pos2: Position): number {
  const dx = pos2.x - pos1.x
  const dy = pos2.y - pos1.y
  return Math.sqrt(dx * dx + dy * dy)
}

export function gaussianCurve(x: number, mean: number, stdDev: number, height: number): number {
  return height * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}
