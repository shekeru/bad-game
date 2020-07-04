import {C_Entity} from '../items/Combat'
import * as Gear from '../items/Gear'
import {Stat} from '../items/Gear'
import * as Map from '../world'

export class PlayerStruct extends C_Entity {
  X: number; Y: number
  constructor(x: number, y: number) {
    super("Player", "lucy.png");
    this.X = x; this.Y = y
    // Init Stats
    this.SetStats({
      [Stat.VIT]: 2
    })
    this.AddGear(Gear.BastardSword)
    this.AddGear(Gear.LeatherGloves)
    this.AddGear(Gear.LeatherChest)
    this.AddGear(Gear.LeatherLegs)
    this.AddGear(Gear.LeatherBoots)
  }
  MoveSafely(a: number, b: number){
    let Pos = `${this.X +a},${this.Y +b}`
    let L0 = (Map.GroundMats[Map.Ground[Pos]]
      || {solid: true}).solid
    let L2 = (Map.Dynamics[Pos]
      || {solid: false}).solid
    if(L0 || Map.Statics[Pos] || L2)
      return
    this.X += a; this.Y += b
  }
}
