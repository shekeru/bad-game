import {Equipment} from './Combat'
// Enums
export enum Equip {
  MainHand = 1,
  OffHand,
  Chest, Legs,
  Boots, Gloves,
  Neck, Cape,
  Head, Ring,
}
export enum Stat {
  VIT = 1, DEF,
  STR, DEX,
}
// Gear List
export const Nothing:Equipment = {
  Name: "Literaly Nothing",
  Slot: 0, Stats: {}
}

export const BastardSword:Equipment = {
  Name: "Bastard Sword",
  Slot: Equip.MainHand,
  Stats: {
    [Stat.STR]: 2,
    [Stat.DEX]: 1
  }
}

export const LeatherGloves:Equipment = {
  Name: "Leather Gloves",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEX]: 2,
    [Stat.DEF]: 1
  }
}

export const LeatherChest:Equipment = {
  Name: "Leather Chest",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEF]: 3
  }
}
