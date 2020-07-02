import * as Map from '../world'

export class PlayerStruct {
  name: string
  ref: any
  X: number
  Y: number
  constructor(x, y) {
    this.name = "Player Model"
    this.ref = Map.StaticMats[1];
    this.X = x
    this.Y = y
  }
  MoveSafely(a: number, b: number){
    let Pos = `${this.X +a},${this.Y +b}`
    let L0 = (Map.GroundMats[Map.Ground[Pos]]
      || {solid: true}).solid
    if(L0 || Map.Statics[Pos]) return
    this.X += a; this.Y += b
  }
}
