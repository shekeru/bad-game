import {elem} from '../globals'
import {Ground, GroundMats} from '../world'
import {CreateArticle} from './Base'
// Materials Logic
let ActiveMat = null
export function UpdateColor(pos) {
  if(!ActiveMat) return;
  let code = ActiveMat.getAttribute('ref');
  if(code) Ground[pos] = Number(code);
  else delete Ground[pos];
  console.log("export let Ground = ",
    JSON.stringify(Ground));
}
// Window
export function GroundWindow() {
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
      }
    }
}

export function ClearActiveMat() {
  ActiveMat = null
}
