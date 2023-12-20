import { Flash } from "@domain/models/Flash";

export interface CreateFlash {
  create: (flash: Flash) => void
}
