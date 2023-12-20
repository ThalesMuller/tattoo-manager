export enum FlashSizes {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XG = "XG",
}

export interface Flash {
  id?: string
  name: string
  size: FlashSizes,
  price: number,
  exclusive: boolean,
  flashdayFriendly: boolean,
  image?: string,
}
