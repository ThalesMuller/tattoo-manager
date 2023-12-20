import { Flash } from "@domain/models/Flash";

export interface WatchFlashes {
  watch: (setFlashes: React.Dispatch<Flash[]>) => void
}
