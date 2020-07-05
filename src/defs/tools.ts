import { ActiveMat } from '../user';
import * as Map from '../world'
// Update Colors
export function UpdateColor(pos) {
  if(!ActiveMat) return;
  let code = ActiveMat.getAttribute('ref');
  if(code) Map.Ground[pos] = Number(code);
  else delete Map.Ground[pos];
  console.log("export let Ground = ",
    JSON.stringify(Map.Ground));
}
// Map Init Ents List
// let NilEnt = ActiveEnt =
//   document.getElementById("ent-sel");
// if(NilEnt) {
//   NilEnt.onclick = function() {
//     ActiveEnt.removeAttribute('id');
//     NilEnt.setAttribute('id', 'ent-sel');
//     ActiveEnt = NilEnt;
//   }
//   // Init Layer1 List
//   for(let Code in Map.StaticMats) {
//     let li = document.createElement("li");
//     li.innerHTML = Map.StaticMats[Code].name;
//     li.style.color = Map.StaticMats[Code].hex;
//     li.setAttribute('ref', Code);
//     li.onclick = function() {
//       li.setAttribute('id', 'ent-sel');
//       ActiveEnt.removeAttribute('id');
//       ActiveEnt = li;
//     }; entList.appendChild(li);
//   }
// }
// Update Objects
let ActiveEnt = null
export function UpdateObject(pos) {
  if(!ActiveEnt) return;
  let code = ActiveEnt.getAttribute('ref');
  if(code) Map.Statics[pos] = Number(code);
  else delete Map.Statics[pos];
  console.log("export let Statics = ", JSON
    .stringify(Map.Statics));
}
