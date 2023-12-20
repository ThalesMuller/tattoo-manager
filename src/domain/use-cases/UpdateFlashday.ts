import { Flashday } from "@domain/models/Flashday";

export interface UpdateFlashday {
  update: (flashday: Flashday) => void
}

