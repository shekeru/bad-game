export enum Stat {
  VIT = 1,
  DEX, STR,
  DEF, AGI
}
export let StatDict = {
  [Stat.VIT]: {
    Name: "Vitality",
    Color: "#16980e",
  },
  [Stat.STR]: {
    Name: "Strength",
    Color: "#e85741",
  },
  [Stat.DEX]: {
    Name: "Dexterity",
    Color: "#075ca0",
  },
  [Stat.DEF]: {
    Name: "Defence",
    Color: "#00878e",
  },
  [Stat.AGI]: {
    Name: "Agility",
    Color: "#a95dc7",
  }
}
