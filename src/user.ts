import {Stat, Stats, StatDict} from './items/Combat'
import {Player} from './world'
// Exports
export let html = (idx) =>
  document.getElementById(idx)
export function elem(name, append?) {
  let el = document.createElement(name)
  if(append) append.appendChild(el);
  return el;
}
// Create Interface
let Toolbars = {
  "equip": ["icons/Equip.png", () => {}],
  "skill": ["icons/Skills.png", StatsWindow],
  "inv": ["icons/Inventory.png", () => {}],
  "opts": ["icons/Options.png", () => {}],
}, t_icons = html("t_icons")
// Create Interface
for(let Key in Toolbars) {
  let img = elem('img')
  t_icons.appendChild(img)
  img.onclick = Toolbars[Key][1]
  img.src = Toolbars[Key][0]
  img.id = "s_" + Key
}
// Window Manager
let lastWindow = undefined
function StatsWindow(){
  if(lastWindow) lastWindow.remove()
  let article = lastWindow =
    elem('article', html('toolbar'))
  let title = elem('div', article),
    list = elem('ul', article)
  // Continue
  title.innerHTML = "Basic Stats"
  article.id = "a_skill"
  for(let Key in Player.Stats) {
    let li = elem('li', list)
    li.innerHTML = `<span style="color:${StatDict[Key].Color}">` +
      `${StatDict[Key].Name}: </span>` + Player.Stats[Key]
  }
}
