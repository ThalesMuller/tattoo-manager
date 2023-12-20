import { Flash } from "@domain/models/Flash";

export interface ListFlashes {
  watch: (setFlashes: React.Dispatch<Flash[]>) => void
}
