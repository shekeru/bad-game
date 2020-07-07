import {GetValue, SetValue} from '../globals'
import {Equip, Stat, Items} from './Item'
import { Item } from './Combat'
export let Inventory = GetValue('inv', [])
// Update Objects
for(let I = 0; I < 28; I++) {
  if(!Inventory[I])
    Inventory[I] = {
      Item: 0, Amnt: 0
    }
}
// Add to Inventory
export function AddItem(Item, Amnt) {
  let ItemId = Item.Id
  // Add to Item
  for(let I in Inventory) {
    let Slot = Inventory[I]
    if(Slot.Item == Item.Id && !Item.Slot) {
      Slot.Amnt += Amnt
      return SetValue('inv', Inventory)
    }
  } // New Slots
  for(let I = 0; I < 28; I++) {
    let Slot = Inventory[I]
    if(!Slot.Item) {
      Inventory[I] = {
        Item: Item.Id,
        Amnt: Amnt
      }; return SetValue('inv', Inventory)
    }
  }
}
// Discard Item
export function RmItem(I) {
    Inventory[I].Item = 0
    Inventory[I].Amnt = 0
    SetValue('inv',
      {[I]: Inventory[I]})
}
