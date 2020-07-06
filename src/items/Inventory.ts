import {GetValue, SetValue} from '../globals'
import {Equip, Stat} from './Item'
import { Item } from './Combat'
export let Inventory =
  GetValue('inv', [])

export function AddItem(Item, Amnt) {
  let ItemId = Item.Id
  // Add to Item
  for(let I in Inventory) {
    let Slot = Inventory[I]
    if(Slot.Item.Id == Item.Id) {
      Slot.Amnt += Amnt
      Slot.Item = Item
      return SetValue('inv', Inventory)
    }
  } // New Slots
  for(let I = 0; I < 28; I++) {
    let Slot = Inventory[I]
    if(Slot == undefined) {
      Inventory[I] = {
        Item: Item,
        Amnt: Amnt
      }; return SetValue('inv', Inventory)
    }
  }
}
