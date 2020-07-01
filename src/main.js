Last = 0;
Clicks = [];
Keys = Object();
const id_get = (id) =>
  document.getElementById(id);
// Main Functions
function MainOnLoad() {
  dpi = window.devicePixelRatio
  ctx = cvs.getContext('2d');
  // Start Programs
  ctx.font = "bold 12pt monospace";
  EventLoop();
};
// Final Init
cvs = id_get("canvas");
window.onload = MainOnLoad;
// Keyboards
window.addEventListener("keydown", (ev) =>
  {Keys[ev.keyCode] = true}, false);
window.addEventListener("keyup", (ev) =>
  {Keys[ev.keyCode] = false}, false);
// Mouse Cavnas
cvs.addEventListener("click", (ev) =>
  Clicks.push(ev), false);
// Map Init Mats List
let mats = id_get("mats-list");
for(let Code in Map1.refs) {
  let li = document.createElement("li");
  li.innerHTML = Map1.refs[Code].name;
  mats.appendChild(li);
}
