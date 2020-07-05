import * as Draw from './grid'
import * as Input from './input'
import {Ctx} from '../main'
var FPS = 10,
  lastMs = 0,
frameQty = 0;
// Event Loop
export var Tick = 1, tTimeLast = 0;
export function EventLoop(current: number) {
  requestAnimationFrame(EventLoop);
  Ctx.font = "10pt monospace"
  // Continue
  let LastTick = Tick;
  if(current > 125 + tTimeLast) {
    tTimeLast = current; Tick++;
  } else return; Ctx.beginPath();
  // Otherwise
  Input.Dispatch(LastTick);
  // Begin Drawing
  Draw.World(Input.Clicks.shift() || {});
  // Updated FPS
  if (current > lastMs + 1000) {
    FPS = Math.round(0.75 * FPS + frameQty * 0.25);
    lastMs = current; frameQty = 0;
  }; frameQty++;
  //Ctx.strokeText(`FPS: ${FPS}`, 5, 15);
  RenderCon(); Ctx.stroke();
}
// Console
let ConsoleQueue = []
export function Print(...Args){
  ConsoleQueue.push([Args.join(' ')])
  if (ConsoleQueue.length > 10)
    ConsoleQueue.shift()
}

export function RenderCon() {
  let X = 5, Y = 13 //Input.Y_MAX - 15 * 10.5
  Ctx.fillStyle = "rgba(215, 222, 205, 0.25)"
  Ctx.fillRect(0, 0, 560, 15 * 10.5);
  Ctx.fillStyle = "#222"
  for(let I in ConsoleQueue) {
    let Out = ConsoleQueue[I]
    Ctx.fillText(Out, X, Y)
    Y += 15
}
}
