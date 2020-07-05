import {Equipment} from './Combat'
import {Stat} from './Stats'
export * from './Stats'
// Enums
export enum Equip {
  MainHand = 1,
  Gloves, Chest,
  Legs, Boots
}
// Gear List
export const Nothing:Equipment = {
  Name: "  ...  ",
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

export const LeatherChest:Equipment = {
  Name: "Leather Chest",
  Slot: Equip.Chest,
  Stats: {
    [Stat.DEF]: 3
  }
}

export const LeatherLegs:Equipment = {
  Name: "Leather Legs",
  Slot: Equip.Legs,
  Stats: {
    [Stat.DEF]: 2,
    [Stat.AGI]: 1
  }
}

export const LeatherGloves:Equipment = {
  Name: "Leather Gloves",
  Slot: Equip.Gloves,
  Stats: {
    [Stat.DEX]: 2,
    [Stat.DEF]: 1
  }
}

export const LeatherBoots:Equipment = {
  Name: "Leather Boots",
  Slot: Equip.Boots,
  Stats: {
    [Stat.AGI]: 2,
    [Stat.DEF]: 1,
  }
}
