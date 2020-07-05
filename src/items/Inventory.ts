import * as Gear from './Gear'
export let Inventory = []

export let Feather = {
  Name: "Feather",
  Src: "Feather.png",
  Id: 1,
}

export let BastardSword = {
  Name: "Feather",
  Src: "Feather.png",
  Equip: Gear.BastardSword,
  Id: 2,
}

export function AddItem(Item, Amnt) {
  let ItemId = Item.Id
  // Add to Item
  for(let I in Inventory) {
    let Slot = Inventory[I]
    if(Slot.Item.Id == Item.Id) {
      Slot.Amnt += Amnt; return
    }
  }
  // New Slot
  for(let I = 0; I < 28; I++) {
    let Slot = Inventory[I]
    console.log("fuck me")
    if(Slot == undefined) {
      console.log("fuck me")
      Inventory[I] = {
        Item: Item,
        Amnt: Amnt
      }; return
    }
  }
}
