export interface CardEntity {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[] | null;
  level: string;
  hp: string;
  types?: string[] | null;
  evolvesTo?: string[] | null;
  attacks?: AttacksEntity[] | null;
  weaknesses?: WeaknessesEntity[] | null;
  retreatCost?: string[] | null;
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers?: number[] | null;
  legalities: Legalities;
  images: Images;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}
export interface AttacksEntity {
  name: string;
  cost?: string[] | null;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
export interface WeaknessesEntity {
  type: string;
  value: string;
}
export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images1;
}
export interface Legalities {
  unlimited: string;
}
export interface Images1 {
  symbol: string;
  logo: string;
}
export interface Images {
  small: string;
  large: string;
}
export interface Tcgplayer {
  url: string;
  updatedAt: string;
}
export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices;
}
export interface Prices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}
