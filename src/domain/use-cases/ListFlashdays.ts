import { Flashday } from "@domain/models/Flashday";

export interface ListFlashdays {
  watch: (setFlashes: React.Dispatch<Flashday[]>) => void
}
