export enum SkillCategories {
  Programming,
  Robotics,
  DIY,
  CAD,
  SoftSkills,
}

export interface Skills {
  name: string
  category: SkillCategories
}
