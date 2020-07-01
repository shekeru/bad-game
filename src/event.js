var fps = 30,
  lastUpdate = 0,
  frames = 0;
// Event Loop
var Tick = 1, tTimeLast = 0;
function EventLoop(millisecs) {
  let LastTick = Tick;
  if(millisecs > 100 + tTimeLast) {
    tTimeLast = millisecs; Tick++;
  }; ResetSize();
  // Otherwise
  DispatchInput(LastTick);
  // Begin Drawing
  ctx.beginPath();
  DrawGrid();
  // Updated FPS
  if (millisecs > lastUpdate + 1000) {
    fps = Math.round(0.75 * fps + frames * 0.25);
    lastUpdate = millisecs; frames = 0;
  }; frames++;
  ctx.strokeText(`FPS: ${fps}`, 10, 25);
  ctx.stroke();
  // Continue
  requestAnimationFrame(EventLoop);
}
