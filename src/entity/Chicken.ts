import {Print} from '../defs/event'
import {C_Entity} from '../items/Combat'
import {Player, ImgRefs} from '../world'

// The 1 everything monster
export class Chicken extends C_Entity {
  constructor() {
    super("Chicken", "chicken.png");
  }
  // Right Click Options
  Context(){
    return {
      ["Attack " + this.name]:
        () => Player.StartCombat(this),
      ["Examine " + this.name]:
        this.Examine
    }
  }
  Examine(){
    Print("A cute looking hen");
  }

}
