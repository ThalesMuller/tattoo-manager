import { Flash } from "@domain/models/Flash";

export interface UpdateFlash {
  update: (flash: Flash) => void
}
