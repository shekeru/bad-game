Keys = Object();
// Main Functions
function MainOnLoad() {
  dpi = window.devicePixelRatio
  cvs = document.getElementById("canvas");
  ctx = cvs.getContext('2d');
  // Start Programs
  ctx.font = "bold 12pt monospace";
  EventLoop();
};
// Final Init
window.onload = MainOnLoad;
window.addEventListener("keydown", (ev) =>
  {Keys[ev.keyCode] = true}, false);
window.addEventListener("keyup", (ev) =>
  {Keys[ev.keyCode] = false}, false);
