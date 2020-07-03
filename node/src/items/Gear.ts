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
  VIT = 1,
  ATK, DEF,
}
// Gear List
export let Nothing:Equipment = {
  Name: "Literaly Nothing",
  Slot: 0, Stats: {}
}

export let BastardSword:Equipment = {
  Name: "Bastard Sword",
  Slot: Equip.MainHand,
  Stats: {
    [Stat.ATK]: +1
  }
}

export let LeatherChest:Equipment = {
  Name: "Leather Chest",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEF]: +1
  }
}
