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
  }
}
