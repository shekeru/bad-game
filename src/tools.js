// Map Init Mats List
let mats = id_get("mats-list");
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
  li.onclick = function() {
    li.setAttribute('id', 'mat-sel');
    ActiveMat.removeAttribute('id');
    ActiveMat = li;
  };
  mats.appendChild(li);
}
