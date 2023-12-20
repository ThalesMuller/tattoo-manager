import { Flashday } from "@domain/models/Flashday";

export interface SaveFlashday {
  create: (flashday: Flashday) => void
  update: (flashday: Flashday) => void
  delete: (flashday: Flashday) => void
}
