import {Item} from './Combat'
import {Stat} from './Stats'
import { elem } from '../globals';
export * from './Stats'
// Enums
export enum Equip {
  MainHand = 1,
  Gloves, Chest,
  Legs, Boots
}
export const Items =
  [] as Array<Item>
// Gear List
export const Nothing:Item =
Items[0] = {
  Id: 0, Name: "  ...  ",
  Src: "", Stats: {},
}

export const Feather:Item =
Items[1] = {
  Id: 1, Name: "Feather",
  Src: "Feather.png",
  Stats: {},
}

export const BronzeSword:Item =
Items[2] = {
  Id: 2, Name: "Bronze Sword",
  Src: "B_Sword.png",
  Slot: Equip.MainHand,
  Stats: {
    [Stat.STR]: 2,
    [Stat.DEX]: 1
  }
}

export const LeatherChest:Item =
Items[3] = {
  Id: 3, Name: "Leather Chest",
  Src: "LeatherChest.png",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEF]: 3
  }
};  LeatherChest

export const LeatherLegs:Item =
Items[4] = {
  Id:4, Name: "Leather Legs",
  Src: "LeatherLegs.png",
  Slot: Equip.Legs,
  Stats: {
    [Stat.DEF]: 2,
    [Stat.AGI]: 1
  }
}

export const OakLogs:Item =
Items[5] = {
  Id:5, Name: "Oak Logs",
  Src: "OakLogs.png",
  Stats: {}
}

export const MilkBucket:Item =
Items[6] = {
  Id:6, Name: "Milk Bucket",
  Src: "MilkBucket.png",
  Stats: {}
}

export const CowLeather:Item =
Items[7] = {
  Id:7, Name: "Cow Leather",
  Src: "Leather.png",
  Stats: {}
}

export var ItemRefs = {}
for(let Id in Items) {
  var div = elem('div');
  div.style.backgroundImage =
    `url('/item/${Items[Id].Src}')`
  ItemRefs[Id] = div
}

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
