import * as Draw from './grid'
import * as Input from './input'
import {Ctx} from '../main'
var FPS = 30,
  lastMs = 0,
frameQty = 0;
// Event Loop
export var Tick = 1, tTimeLast = 0;
export function EventLoop(current: number) {
  let LastTick = Tick;
  if(current > 125 + tTimeLast) {
    tTimeLast = current; Tick++;
  }; Ctx.beginPath();
  // Otherwise
  Input.Dispatch(LastTick);
  // Begin Drawing
  Draw.World(Input.Clicks.shift() || {});
  // Updated FPS
  if (current > lastMs + 1000) {
    FPS = Math.round(0.75 * FPS + frameQty * 0.25);
    lastMs = current; frameQty = 0;
  }; frameQty++;
  Ctx.strokeText(`FPS: ${FPS}`, 10, 25);
  // End Drawing
  Ctx.stroke();
  // Continue
  requestAnimationFrame(EventLoop);
}
