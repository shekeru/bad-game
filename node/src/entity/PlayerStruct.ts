import * as Map from '../world'

export class PlayerStruct {
  name: string
  img: any
  X: number
  Y: number
  constructor(x, y) {
    this.name = "Player Model"
    this.img = Map.ImgRefs['lucy.png'];
    this.X = x; this.Y = y
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
