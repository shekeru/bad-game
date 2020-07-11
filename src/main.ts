import { Canvas, Ctx } from './globals';
import {EventLoop} from './defs/event'
import * as Input from './defs/input'
// Main Functions
function MainOnLoad() {
  setInterval(() => requestAnimationFrame(EventLoop), 65)
  Input.ResetSize(); Ctx.font = "10pt monospace"
}; window.onload = MainOnLoad
// Keyboards
window.addEventListener("keydown", (ev) =>
  {Input.Keys[ev.code] = true})
window.addEventListener("keyup", (ev) =>
  {Input.Keys[ev.code] = false})
// Mouse Cavnas
Canvas.addEventListener("mousedown",
  (ev) => Input.Clicks.push(ev))
Canvas.addEventListener("mouseup",
  (ev) => Input.Clicks.push(ev))
Canvas.addEventListener("contextmenu",
  (ev) => {
    ev.preventDefault();
    return false;
})
Canvas.addEventListener("mousemove", (ev) => {
  Input.Cursor.Y = ev.clientY
  Input.Cursor.X = ev.clientX
})
