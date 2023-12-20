import { Flash } from "@domain/models/Flash";

export interface SaveFlash {
  create: (flash: Flash) => void
  update: (flash: Flash) => void
  delete: (flash: Flash) => void
}
