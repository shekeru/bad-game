import {Print} from '../globals'
import {ImgRefs} from '../world'
import {Nothing, Equip, Stat} from '../items/Gear'
export * from '../items/Gear'
// Types
export type Stats = {
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
export class C_Base {
  respawnTime: number
  name: string; img: any
  solid: boolean; alpha: number
  constructor(name: string, image: string) {
    this.name = name; this.solid = true
    this.img = ImgRefs[image]
    this.respawnTime = 60
    this.alpha = 1
  }
}
export class C_Entity extends C_Base {
  Gear: Gear; Stats: Stats; HP: number
  constructor(name: string, image: string) {
    super(name, image)
    // Empty Gear
    this.Gear = <Gear> {}
    for(var Key in Equip)
      if (isNaN(Number(Key)))
        this.Gear[Equip[Key]] = Nothing
    // Empty Stats
    this.Stats = <Stats> {}
    for(var Key in Stat)
      if (isNaN(Number(Key)))
        this.Stats[Stat[Key]] = 1
    this.RefreshHP()
  }
  // Add Entity Stats
  SetStats(NewStats: Stats) {
    for(var Key in NewStats) {
        this.Stats[Key] = NewStats[Key]
    }; this.RefreshHP()
  }
  // Add Gear Stats
  AddGear(Item: Equipment) {
    this.Gear[Item.Slot] = Item
    for(let Key in Item.Stats) {
      this.Stats[Key] += Item.Stats[Key]
    }
  }
  // Sequence Combat
  SeqCombat(Other: C_Entity) {
    let dmg = Math.round(100 * this.Stats[Stat.STR]
      * AccuracyCoeff(this.Stats[Stat.DEX]))
    dmg *= 1 - Math.random() / 100
      * this.Stats[Stat.DEF]
    dmg = Math.floor(dmg)
    Print(this.name, "deals", dmg, "damage.")
    Other.HP -= dmg;
  }
  RefreshHP(ret?) {
    let HP = 250 + 175
      * this.Stats[Stat.VIT]
    if(!ret) this.HP = HP
    return HP;
  }
  EntityDeath() {
    this.alpha = 0.15
    this.solid = false
    setTimeout(() => {
      this.RefreshHP()
      this.solid = true
      this.alpha = 1
    }, this.respawnTime * 1000)
  }
}
// Math Functions
function AccuracyCoeff(dex) {
  let Rand = 2 * Math.random()
  return Math.pow(Math.E, -Math.pow
      (Rand - 2, 2) / 2)
    / Math.sqrt(2*Math.PI)
    * (2 +dex/ 20);
}
