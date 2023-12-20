import { Flashday } from "@domain/models/Flashday";

export interface WatchFlashdays {
  watch: () => Promise<Flashday[]>
}
