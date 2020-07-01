// Map Init Mats List
let ActiveMat = NilMat = id_get("mat-sel");
NilMat.onclick = function() {
  ActiveMat.removeAttribute('id');
  NilMat.setAttribute('id', 'mat-sel');
  ActiveMat = NilMat;
}
// Init Layer0 List
for(let Code in Layer0.refs) {
  let li = document.createElement("li");
  li.innerHTML = Layer0.refs[Code].name;
  li.style.color = Layer0.refs[Code].hex;
  li.setAttribute('ref', Code);
  li.onclick = function() {
    li.setAttribute('id', 'mat-sel');
    ActiveMat.removeAttribute('id');
    ActiveMat = li;
  }; mats.appendChild(li);
}
// Update Colors
function UpdateColor(pos) {
  let code = ActiveMat.getAttribute('ref');
  if(code) Layer0.data[pos] = Number(code);
  else delete Layer0.data[pos];
  console.log("Layer0 = ", JSON
    .stringify({data: Layer0.data}));
}

// Map Init Ents List
let ActiveEnt = NilEnt = id_get("ent-sel");
NilEnt.onclick = function() {
  ActiveEnt.removeAttribute('id');
  NilEnt.setAttribute('id', 'ent-sel');
  ActiveEnt = NilEnt;
}
// Init Layer1 List
for(let Code in Layer1.refs) {
  let li = document.createElement("li");
  li.innerHTML = Layer1.refs[Code].name;
  li.style.color = Layer1.refs[Code].hex;
  li.setAttribute('ref', Code);
  li.onclick = function() {
    li.setAttribute('id', 'ent-sel');
    ActiveEnt.removeAttribute('id');
    ActiveEnt = li;
  }; ents.appendChild(li);
}
// Update Objects
function UpdateObject(pos) {
  let code = ActiveEnt.getAttribute('ref');
  if(code) Layer1.data[pos] = Number(code);
  else delete Layer1.data[pos];
  console.log("Layer1 = ", JSON
    .stringify({data: Layer1.data}));
}
