import {elem} from '../globals'
import {Ground, GroundMats} from '../world'
import {CreateArticle, ActiveBrush} from './Base'
// Printing
window.Game.Ground = () =>
  JSON.stringify(Ground);
// Materials Logic
export function UpdateColor(pos) {
  if(ActiveBrush.Type != 1) return;
  let code = ActiveBrush.Id;
  if(code) Ground[pos] = Number(code);
  else delete Ground[pos];
}
// Window
export function GroundWindow() {
    let list = CreateArticle
      ("Ground Features", "ul", "world")
    let NilMat = elem('li', list)
    NilMat.innerHTML = "Empty Space"
    NilMat.setAttribute('id', 'mat-sel');
    NilMat.onclick = () => {
      if(ActiveBrush.Elem)
        ActiveBrush.Elem.removeAttribute('id')
      NilMat.setAttribute('id', 'mat-sel')
      ActiveBrush.Elem = NilMat
      ActiveBrush.Id = 0
    }; NilMat.onclick(<any> 0)
    ActiveBrush.Type = 1
    for(let Code in GroundMats) {
      let li = elem('li', list)
      li.innerHTML = GroundMats[Code].name;
      li.style.color = GroundMats[Code].hex;
      li.onclick = function() {
        ActiveBrush.Id = Number(Code)
        ActiveBrush.Elem.removeAttribute('id')
        li.setAttribute('id', 'mat-sel');
        ActiveBrush.Elem = li
      }
    }
}
