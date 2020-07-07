import {Item} from './Combat'
import {Stat} from './Stats'
export * from './Stats'
// Enums
export enum Equip {
  MainHand = 1,
  Gloves, Chest,
  Legs, Boots
}
export const Items = []
// Gear List
export const Nothing:Item = {
  Id: 0, Name: "  ...  ",
  Src: "", Stats: {},
}; Items[0] = Nothing

export const Feather:Item = {
  Id: 1, Name: "Feather",
  Src: "Feather.png",
  Stats: {},
}; Items[1] = Feather

export const BronzeSword:Item = {
  Id: 2, Name: "Bronze Sword",
  Src: "B_Sword.png",
  Slot: Equip.MainHand,
  Stats: {
    [Stat.STR]: 2,
    [Stat.DEX]: 1
  }
}; Items[2] = BronzeSword

export const LeatherChest:Item = {
  Id: 3, Name: "Leather Chest",
  Src: "LeatherChest.png",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEF]: 3
  }
}; Items[3] = LeatherChest
//
// export const LeatherLegs:Equipment = {
//   Name: "Leather Legs",
//   Slot: Equip.Legs,
//   Stats: {
//     [Stat.DEF]: 2,
//     [Stat.AGI]: 1
//   }
// }
//
// export const LeatherGloves:Equipment = {
//   Name: "Leather Gloves",
//   Slot: Equip.Gloves,
//   Stats: {
//     [Stat.DEX]: 2,
//     [Stat.DEF]: 1
//   }
// }
//
// export const LeatherBoots:Equipment = {
//   Name: "Leather Boots",
//   Slot: Equip.Boots,
//   Stats: {
//     [Stat.AGI]: 2,
//     [Stat.DEF]: 1,
//   }
// }
