import {C_Entity} from '../items/Combat'
import * as Gear from '../items/Gear'
import {Stat} from '../items/Gear'
import * as Map from '../world'

export class PlayerStruct extends C_Entity {
  name: string; img: any
  X: number; Y: number
  constructor(x: number, y: number) {
    super(); this.name = "Player"
    this.img = Map.ImgRefs['lucy.png'];
    this.X = x; this.Y = y
    // Init Stats
    this.SetStats({
      [Stat.VIT]: +2
    })
    this.AddGear(Gear.BastardSword)
    this.AddGear(Gear.LeatherChest)
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
