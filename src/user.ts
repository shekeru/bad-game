import {html, elem, Print, SetValue} from './globals'
import {Equip, Stat, Stats, StatDict, ItemRefs} from './items/Combat'
import {Inventory} from './items/Inventory'
import {Player, GroundMats} from './world'
import { PromptOptions, Dialog } from './defs/input'
// Create Interface
let Toolbars = {
  "equip": ["icons/Equip.png", GearWindow],
  "skill": ["icons/Skills.png", StatsWindow],
  "inv": ["icons/Inventory.png", InvWindow],
  "ents": ["icons/EntityOpts.png", () => {}],
  "opts": ["icons/Options.png", GroundWindow],
}, t_icons = html("t_icons")
// Create Interface
let lastWindow = undefined
for(let Key in Toolbars) {
  let img = elem('img')
  t_icons.appendChild(img)
  img.onclick = Toolbars[Key][1]
  img.src = Toolbars[Key][0]
  img.id = "s_" + Key
}
function CreateArticle(TitleName, Bottom, Type) :HTMLElement {
  if(lastWindow) lastWindow.remove()
  let article = lastWindow =
    elem('article', html('toolbar'))
  let title = elem('div', article),
    list = elem(Bottom, article)
  title.innerHTML = TitleName
  article.id = `a_${Type}`
  ActiveMat = null
  return list
}
// Re Render
function ReRender() {
  for(let Key in Toolbars) {
    if(lastWindow && lastWindow.id == `a_${Key}`) {
      return Toolbars[Key][1]();
    }
  }
}; //setInterval(ReRender, 150);
// Window Manager (Equipment)
function GearWindow(){
  let list = CreateArticle
    ("Equipment", "ul", "equip")
  for(let Key in Player.Gear) {
    let li = elem('li', list)
    li.innerHTML = Player.Gear[Key].Name
  }
}
// Window Manager (Skills)
function StatsWindow(){
  let list = CreateArticle
    ("Basic Stats", "ul", "skill")
  for(let Key in Player.Stats) {
    let li = elem('li', list)
    li.innerHTML = `<span style="color:${StatDict[Key].Color}">` +
      `${StatDict[Key].Name}: </span>` + Player.Stats[Key]
  }
}
// Inventory Manager (Skills)
let moveItem = null, useItem = null
function InvWindow(){
  let list = CreateArticle
    ("Inventory", "ul", "inv")
   list.class = "inventory-table"
  for(let I = 0; I < 28; I++) {
    let li = elem('li', list)
    li.onclick = (ev) => {
      if(Dialog) return;
      if(useItem) {
        let I1 = Number(useItem.value)
        useItem = useItem.removeAttribute('id')
        Print("Use:", I1, "on", I);
        return
      }
      if(moveItem) {
        moveItem.removeAttribute('id')
        let A = Number(moveItem.value)
        let Ao = Inventory[A]
        Inventory[A] = Inventory[I]
        Inventory[I] = Ao
        moveItem = null
        SetValue('inv', Inventory)
        return InvWindow()
      }; (moveItem = li).setAttribute
        ('id', 'item-sel')
    }, li.value = I
    li.oncontextmenu = (ev) => {
      if(moveItem) {
        moveItem = moveItem.removeAttribute('id')
      }
      if(useItem) {
        useItem.removeAttribute('id')
      }
      // Dialog Box
      PromptOptions({
        "Use Item": () => {
          (useItem = li).setAttribute
            ('id', 'item-use')
        },
        "Discard Item": () => {
          delete Inventory[I].Item
          SetValue('inv', {[I]: {}})
          InvWindow()
        }
      }, ev)
    }
    let ItemS = Inventory[I] ? (Inventory[I].Item || {Id: 0}) : {Id: 0}
    let div = ItemRefs[ItemS.Id].cloneNode(); li.appendChild(div)
    if(Inventory[I] && Inventory[I].Item)
      div.innerHTML = `<div>${Inventory[I].Amnt}</div>`
  }
}
// Materials
export let ActiveMat = null
function GroundWindow() {
    let list = CreateArticle
      ("Ground Features", "ul", "world")
    let NilMat = elem('li', list)
    NilMat.innerHTML = "Empty Space"
    NilMat.setAttribute('id', 'mat-sel');
    NilMat.onclick = () => {
      ActiveMat.removeAttribute('id')
      NilMat.setAttribute('id', 'mat-sel')
      ActiveMat = NilMat
    }; ActiveMat = NilMat
    for(let Code in GroundMats) {
      let li = elem('li', list)
      li.innerHTML = GroundMats[Code].name;
      li.style.color = GroundMats[Code].hex;
      li.setAttribute('ref', Code);
      li.onclick = function() {
        li.setAttribute('id', 'mat-sel');
        ActiveMat.removeAttribute('id');
        ActiveMat = li;
      };

    }
}
// Respawning
export let Respawn = html("respawn")
Respawn.onclick = () => {
  Respawn.setAttribute("hidden", "")
  Player.alpha = 1;
}
