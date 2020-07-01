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
cvs.addEventListener("contextmenu",
  (ev) => {
    ev.preventDefault();
    Clicks.push(ev);
    return false;
}, false);
