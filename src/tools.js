// Map Init Mats List
let ActiveMat = Nothing = id_get("mat-sel");
Nothing.onclick = function() {
  Nothing.setAttribute('id', 'mat-sel');
  ActiveMat.removeAttribute('id');
  ActiveMat = Nothing;
}
// Init List
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
  console.log(JSON.stringify(Layer0.data));
}
