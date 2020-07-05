import {html, elem} from './globals'
import {Equip, Stat, Stats, StatDict} from './items/Combat'
import {Inventory} from './items/Inventory'
import {Player, GroundMats} from './world'
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
// Window Manager (Equipment)
function GearWindow(){
  let list = CreateArticle
    ("Equipment", "ul", "equip")
  console.log(Player.Gear, Player.Stats)
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
function InvWindow(){
  let list = CreateArticle
    ("Inventory", "ul", "inv")
  list.class = "inventory-table"
  for(let I = 0; I < 28; I++) {
    let li = elem('li', list); let div = elem('div', li)
    if(Inventory[I])
      div.style.backgroundImage =
        `url('/item/${Inventory[I].Item.Src}')`
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
let Respawn = html("respawn")
Respawn.onclick = () => {
  Respawn.setAttribute("hidden", "")
  Player.alpha = 1;
}
