import {Nothing, Equip, Stat} from '../items/Gear'
// Types
type Stats = {
  [k: number]: number
}
export type Equipment = {
  Name: string,
  Slot: Equip,
  Stats: Stats
}
type Gear = {
  [idx in Equip]: Equipment
}
// Classes
export class C_Entity {
  Gear: Gear
  Stats: Stats
  HP: number
  constructor() {
    // Empty Gear
    this.Gear = <Gear> {}
    for(var Key in Equip)
      this.Gear[Key] = Nothing
    // Empty Stats
    this.Stats = <Stats> {}
    for(var Key in Stat)
      this.Stats[Key] = 1
  }
  // Add Entity Stats
  SetStats(NewStats: Stats) {
    for(var Key in NewStats) {
        this.Stats[Key] = NewStats[Key]
    }
  }
  // Add Gear Stats
  AddGear(Item: Equipment) {
    this.Gear[Item.Slot] = Item
    for(let Key in Item.Stats) {
      this.Stats[Key] += Item.Stats[Key]
    }
  }
  // Roll Attack or Misc
  RollStat(WhichStat: Stat){
    return Math.floor(Math.random()
      * this.Stats[WhichStat])
  }
  // Sequence Combat
  SeqCombat(Other: C_Entity) {
    let dmg = this.RollStat(Stat.ATK)
    console.log("You attack with", dmg, "power.")
    dmg -= Other.RollStat(Stat.DEF)
    console.log("You deal", dmg, "damage.")
    Other.HP -= dmg
    console.log("The enemy has", Other.HP, "hitpoints.")
  }
}
