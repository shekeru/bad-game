import { Ctx, LogQueue } from '../globals';
import {DrawWorld} from './grid'
import * as Input from './input'
var FPS = 10, lastMs = 0, frameQty = 0;
// Event Loop
export function EventLoop(current: number) {
  requestAnimationFrame(EventLoop);
  Ctx.font = "10pt monospace"
  // Continue
  if(!Input.AdvanceTick(current))
    return; Ctx.beginPath();
  // Begin Drawing
  DrawWorld(Input.Clicks.shift() || {});
  // Updated FPS
  if (current > lastMs + 1000) {
    FPS = Math.round(0.75 * FPS + frameQty * 0.25);
    lastMs = current; frameQty = 0;
  }; frameQty++;
  //Ctx.strokeText(`FPS: ${FPS}`, 5, 15);
  RenderCon(); Ctx.stroke();
}

function RenderCon() {
  let X = 5, Y = 13 //Input.Y_MAX - 15 * 10.5
  Ctx.fillStyle = "rgba(215, 222, 205, 0.25)"
  Ctx.fillRect(0, 0, 560, 15 * 10.5);
  Ctx.fillStyle = "#222"
  for(let I in LogQueue) {
    let Out = LogQueue[I]
    Ctx.fillText(Out, X, Y)
    Y += 15
}
}
