import {elem} from '../globals'
import {Statics, StaticMats} from '../world'
import {CreateArticle} from './Base'
// Statics Logic
let ActiveEnt = null
export function UpdateObject(pos) {
  if(!ActiveEnt) return;
  let code = ActiveEnt.getAttribute('ref');
  if(code) Statics[pos] = Number(code);
  else delete Statics[pos];
  console.log("export let Statics = ", JSON
    .stringify(Statics));
}
// Window
export function StaticsWindow() {
    let list = CreateArticle
      ("Ground Features", "ul", "world")
    let NilEnt = elem('li', list)
    NilEnt.innerHTML = "Empty Space"
    NilEnt.setAttribute('id', 'mat-sel');
    NilEnt.onclick = () => {
      ActiveEnt.removeAttribute('id')
      NilEnt.setAttribute('id', 'mat-sel')
      ActiveEnt = NilEnt
    }; ActiveEnt = NilEnt
    for(let Code in StaticMats) {
      let li = elem('li', list)
      li.innerHTML = StaticMats[Code].name;
      li.setAttribute('ref', Code);
      li.onclick = function() {
        li.setAttribute('id', 'mat-sel');
        ActiveEnt.removeAttribute('id');
        ActiveEnt = li;
      }
    }
}

export function ClearActiveEnt() {
  ActiveEnt = null
}
