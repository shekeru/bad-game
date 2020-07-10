import { Stat, Equip } from '../items/Combat'
import { PromptOptions } from '../defs/input'
import {CreateArticle} from './Base'
import {Player} from '../world'
import {elem} from '../globals'
// Window Manager (Equipment)
export function GearWindow(){
  let list = CreateArticle
    ("Equipment", "ul", "equip")
  for(let Key in Player.Gear) {
    let li = elem('li', list)
    li.innerHTML = Player.Gear[Key].Name
    if(Player.Gear[Key].Id) {
      li.style.cursor = "pointer";
      let Stats = Object.entries(Player.Gear[Key].Stats)
      li.title = Stats.map((x) => `+${x[1]} ${Stat[x[0]]}`).join("\n")
      li.oncontextmenu = (ev) => {
        PromptOptions({
          "Unequip Item": () => {
            Player.DelGear(<Equip> Number(Key))
          }
        }, ev)
      }
    }
  }
}
