import {StatDict} from '../items/Combat'
import {CreateArticle} from './Base'
import {Player} from '../world'
import {elem} from '../globals'
// Window Manager (Skills)
export function StatsWindow(){
  let list = CreateArticle
    ("Basic Stats", "ul", "skill")
  for(let Key in Player.Stats) {
    let li = elem('li', list)
    li.innerHTML = `<span style="color:${StatDict[Key].Color}">` +
      `${StatDict[Key].Name}: </span>` + Player.Stats[Key]
  }
}
