const id_get = (id) =>
  document.getElementById(id);
// Main Functions
function MainOnLoad() {
  dpi = window.devicePixelRatio
  ctx = cvs.getContext('2d');
  // Start Programs
  ctx.font = "bold 12pt monospace";
  requestAnimationFrame(EventLoop);
};
// Final Init
cvs = id_get("canvas");
window.onload = MainOnLoad;
// Keyboards
window.addEventListener("keydown", (ev) =>
  {Keys[ev.code] = true}, false);
window.addEventListener("keyup", (ev) =>
  {Keys[ev.code] = false}, false);
// Mouse Cavnas
cvs.addEventListener("click", (ev) =>
  Clicks.push(ev), false);
cvs.addEventListener("contextmenu",
  (ev) => {
    ev.preventDefault();
    Clicks.push(ev);
    return false;
}, false);
// Extra divs
let mats = id_get("mats-list");
let ents = id_get("ents-list");
