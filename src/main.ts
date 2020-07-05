import {EventLoop} from './defs/event'
import {Keys, Clicks} from './defs/input'
import * as Input from './defs/input'
// Main Functions
function MainOnLoad() {
  requestAnimationFrame(EventLoop)
  Input.ResetSize();
}; window.onload = MainOnLoad
// Globals
export const Canvas = <HTMLCanvasElement>
  document.getElementById("canvas")
export const Ctx = Canvas.getContext('2d')
// Keyboards
window.addEventListener("keydown", (ev) =>
  {Keys[ev.code] = Date.now()})
window.addEventListener("keyup", (ev) =>
  {Keys[ev.code] = false})
// Mouse Cavnas
Canvas.addEventListener("click", (ev) =>
  Clicks.push(ev))
Canvas.addEventListener("contextmenu",
  (ev) => {
    ev.preventDefault();
    Clicks.push(ev);
    return false;
})
