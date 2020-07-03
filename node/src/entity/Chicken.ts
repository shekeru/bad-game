import {C_Entity} from '../items/Combat'
import {ImgRefs} from '../world'

interface Dynamic {
    Context(): any
    solid: boolean
    name: string
    img: any
}

export class Chicken extends
  C_Entity implements Dynamic {
  solid: boolean
  name: string
  img: any
  constructor() {
    super(); this.name = "Chicken"
    this.img = ImgRefs['chicken.png']
    this.solid = true
  }
  // Right Click Options
  Context(){
    return {
      ["Attack " + this.name]:
        this.Examine,
      ["Examine " + this.name]:
        this.Examine
    }
  }
  Examine(){
    console.log("A cute looking hen.");
  }

}
