import { Canvas } from './globals';
import {EventLoop} from './defs/event'
import * as Input from './defs/input'
// Main Functions
function MainOnLoad() {
  requestAnimationFrame(EventLoop)
  Input.ResetSize();
}; window.onload = MainOnLoad
// Keyboards
window.addEventListener("keydown", (ev) =>
  {Input.Keys[ev.code] = Date.now()})
window.addEventListener("keyup", (ev) =>
  {Input.Keys[ev.code] = false})
// Mouse Cavnas
Canvas.addEventListener("click", (ev) =>
  Input.Clicks.push(ev))
Canvas.addEventListener("contextmenu",
  (ev) => {
    ev.preventDefault();
    Input.Clicks.push(ev);
    return false;
})
