import * as Map from '../world'
// Lists
let matList = document
  .getElementById("mats-list")
let entList = document
  .getElementById("ents-list")
// Map Init Mats List
let ActiveMat = Object()
let NilMat = ActiveMat =
  document.getElementById("mat-sel");
if(NilMat) {
  NilMat.onclick = () => {
    ActiveMat.removeAttribute('id');
    NilMat.setAttribute('id', 'mat-sel');
    ActiveMat = NilMat;
  }
  // Init Layer0 List
  for(let Code in Map.GroundMats) {
    let li = document.createElement("li");
    li.innerHTML = Map.GroundMats[Code].name;
    li.style.color = Map.GroundMats[Code].hex;
    li.setAttribute('ref', Code);
    li.onclick = function() {
      li.setAttribute('id', 'mat-sel');
      ActiveMat.removeAttribute('id');
      ActiveMat = li;
    }; matList.appendChild(li);
  }
}
// Update Colors
export function UpdateColor(pos) {
  if (!matList) return;
  let code = ActiveMat.getAttribute('ref');
  if(code) Map.Ground[pos] = Number(code);
  else delete Map.Ground[pos];
  console.log("export let Ground = ",
    JSON.stringify(Map.Ground));
}
// Map Init Ents List
let ActiveEnt = Object()
let NilEnt = ActiveEnt =
  document.getElementById("ent-sel");
if(NilEnt) {
  NilEnt.onclick = function() {
    ActiveEnt.removeAttribute('id');
    NilEnt.setAttribute('id', 'ent-sel');
    ActiveEnt = NilEnt;
  }
  // Init Layer1 List
  for(let Code in Map.StaticMats) {
    let li = document.createElement("li");
    li.innerHTML = Map.StaticMats[Code].name;
    li.style.color = Map.StaticMats[Code].hex;
    li.setAttribute('ref', Code);
    li.onclick = function() {
      li.setAttribute('id', 'ent-sel');
      ActiveEnt.removeAttribute('id');
      ActiveEnt = li;
    }; entList.appendChild(li);
  }
}
// Update Objects
export function UpdateObject(pos) {
  if(!entList) return;
  let code = ActiveEnt.getAttribute('ref');
  if(code) Map.Statics[pos] = Number(code);
  else delete Map.Statics[pos];
  console.log("export let Statics = ", JSON
    .stringify(Map.Statics));
}
