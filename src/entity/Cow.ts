import * as Item from '../items/Item'
import * as Inv from '../items/Inventory'
import {C_Entity, Stat} from '../items/Combat'
import { RenderInv } from '../ui/Inventory'
import {Print, html} from '../globals'
import {Player} from '../world'

// The 1 everything monster
export class Cow extends C_Entity {
  constructor(name, src) {
    super(name, src)
    this.SetStats({
      [Stat.VIT]: 3,
      [Stat.STR]: 2,
    })
  }
  // Right Click Options
  Context(){
    return {
      ["Milk " + this.name]:
        () => {
          Print("You milk the cow")
          Inv.AddItem(Item.MilkBucket, 1)
          RenderInv(html('bt_inv'))
        },
      ["Attack " + this.name]:
        () => Player.StartCombat(this),
      ["Examine " + this.name]:
        () => Print("A really fat cow")
    }
  }
  EntityDeath(){
    Inv.AddItem(Item.CowLeather, 1)
    this.respawnTime = 180
    super.EntityDeath()
  }
}
