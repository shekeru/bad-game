import {C_Base} from '../items/Combat'
import * as Inv from '../items/Inventory'
import * as Item from '../items/Item'
import {Print} from '../globals'

export class OakTree extends C_Base {
  // Right Click Options
  Context(){
    return {
      ["Chop " + this.name]:
        () => {
          Print("You chop down the oak tree.")
          Inv.AddItem(Item.OakLogs, 1)
          this.respawnTime = 60 * 5
          this.SimpleDeath()
        },
      "Examine Tree":
        this.Examine
    }
  }
  Examine(){
    Print("An unassuming oak tree.")
  }
}
