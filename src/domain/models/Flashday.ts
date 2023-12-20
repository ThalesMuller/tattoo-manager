import { Flash } from "./Flash"

export interface Flashday {
  id?: string
  name: string
  date: Date
  flashs: Flash[],
  studioPercentage: number,
}
