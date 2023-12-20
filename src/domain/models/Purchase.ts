import { Flash } from "./Flash";

export enum PaymentMethodEnum {
  CASH = 'CASH',
  CARD = 'CARD',
  PIX = 'PIX',
}

export interface Purchase {
  id?: string
  name: string
  date: Date
  flash: Flash,
  paymentMethod: PaymentMethodEnum,
  flashdayId: string | null,
  studioPercentage: number,
}
