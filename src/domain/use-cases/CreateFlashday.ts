import { Flashday } from "@domain/models/Flashday";

export interface CreateFlashday {
  create: (flashday: Flashday) => void
}
