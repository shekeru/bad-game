import {elem} from '../globals'
import {Statics, StaticMats} from '../world'
import {CreateArticle, ActiveBrush} from './Base'
// Statics Logic
export function UpdateObject(pos) {
  if(ActiveBrush.Type != 2) return;
  let code = ActiveBrush.Id;
  if(code) Statics[pos] = Number(code);
  else delete Statics[pos];
  console.log("export let Statics = ", JSON
    .stringify(Statics));
}
// Window
export function StaticsWindow() {
    let list = CreateArticle
      ("Static Features", "ul", "world")
    let NilEnt = elem('li', list)
    NilEnt.innerHTML = "Empty Space"
    NilEnt.setAttribute('id', 'mat-sel');
    NilEnt.onclick = () => {
      if(ActiveBrush.Elem)
        ActiveBrush.Elem.removeAttribute('id')
      NilEnt.setAttribute('id', 'mat-sel')
      ActiveBrush.Elem = NilEnt
      ActiveBrush.Id = 0
    }; NilEnt.onclick(<any> 0)
    ActiveBrush.Type = 2
    for(let Code in StaticMats) {
      let li = elem('li', list)
      li.innerHTML = StaticMats[Code].name;
      li.onclick = function() {
        li.setAttribute('id', 'mat-sel');
        ActiveBrush.Elem.removeAttribute('id')
        ActiveBrush.Id = Number(Code)
        ActiveBrush.Elem = li
      }
    }
}
