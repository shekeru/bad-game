import * as Item from '../items/Item'
import * as Inv from '../items/Inventory'
import {C_Entity, C_Base} from '../items/Combat'
import {Player, ImgRefs} from '../world'
import {Print} from '../globals'

// The 1 everything monster
export class Chicken extends C_Entity {
  // Right Click Options
  Context(){
    return {
      ["Attack " + this.name]:
        () => Player.StartCombat(this),
      ["Examine " + this.name]:
        () => Print("A cute looking hen")
    }
  }
  EntityDeath(){
    Inv.AddItem(Item.Feather, 5)
    super.EntityDeath()
  }
}
