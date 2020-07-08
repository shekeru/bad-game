import {elem, Print, SetValue} from '../globals'
import { PromptOptions, Dialog } from '../defs/input'
import {Inventory, DelItem} from '../items/Inventory'
import {ItemRefs, Items} from '../items/Combat'
import {CreateArticle} from './Base'
// Inventory Manager (Skills)
let moveItem = null, useItem = null
export function InventoryWindow() {
  console.log("fuck, fuck")
  let list = <any> CreateArticle("Inventory", "ul", "inv")
  list.class = "inventory-table"
  for(let I = 0; I < 28; I++) {
    let li = <any> elem('li', list)
    li.onclick = (ev) => {
      if(Dialog) return;
      if(useItem) {
        let I1 = Number(useItem.value)
        useItem = useItem.removeAttribute('id')
        Print("Use:", Items[Inventory[I1].Item].Name,
          "on", Items[Inventory[I].Item].Name);
        return
      }
      if(moveItem) {
        let A = Number(moveItem.value)
        let Ao = Inventory[A]
        Inventory[A] = Inventory[I]
        Inventory[I] = Ao
        moveItem = moveItem
          .removeAttribute('id')
        SetValue('inv', Inventory)
        return RenderInv(list)
      }; (moveItem = li).setAttribute('id', 'item-sel')
    }, li.value = I
    li.oncontextmenu = (ev) => {
      if(moveItem)
        moveItem = moveItem.removeAttribute('id')
      if(useItem)
        useItem = useItem.removeAttribute('id')
      // Dialog Box
      PromptOptions({
        "Use Item": () => {
          (useItem = li).setAttribute
            ('id', 'item-use')
        },
        "Discard Item": () => {
          DelItem(I)
          RenderInv(list)
        }
      }, ev)
    }
  }; RenderInv(list)
}
export function RenderInv(list) {
  if(!list) return;
  for(let I = 0; I < 28; I++) {
    let li = list.children[I]
    if(li.children.length)
      li.children[0].remove()
    let div = ItemRefs[Inventory[I].Item].cloneNode()
    if(Inventory[I].Amnt > 1)
      div.innerHTML = `<div>${Inventory[I].Amnt}</div>`
    li.appendChild(div)
  }
}
