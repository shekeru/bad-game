import {Canvas} from '../main'
import {Player} from '../world'
import {Tick} from './event'
export let SIZE = 50,
  OFFSET_X = 0 * SIZE,
  OFFSET_Y = 0 * SIZE;
export var Keys = {},
  Clicks = []
// Fixate Camera
export function UpdateCamera() {
    OFFSET_Y = Player.Y * SIZE
      - Math.round(Y_MAX / 2);
    OFFSET_X = Player.X * SIZE
      - Math.round(X_MAX / 2);
};
// DispatchInput
export function Dispatch(LastTick){
  // Space Interact
  if(Tick > LastTick) {
    // PlayerCtl
    if(Keys["KeyW"])
      Player.MoveSafely(0, -1)
    if(Keys["KeyA"])
      Player.MoveSafely(-1, 0)
    if(Keys["KeyS"])
      Player.MoveSafely(0, 1)
    if(Keys["KeyD"])
      Player.MoveSafely(1, 0)
  }
}
// Check Action
let Dialog = undefined
let P_Dialog = document
  .getElementById('dialog')
// Insertion of Options
export function PromptOptions(options: {[x: string]: () => void;}) {
  if(Dialog) return;
  Dialog = <HTMLElement>
    P_Dialog.cloneNode(true);
  Dialog.removeAttribute('hidden');
  let Last = Dialog.children[0]
  for(let Name in options) {
    var li = document.createElement('li')
    li.onclick = () => {
      Dialog.remove()
      Dialog = undefined
      options[Name]()
    }; li.innerHTML = Name
    Last.onclick = () => {
      Dialog.remove()
      Dialog = undefined
    }; Dialog.insertBefore(li, Last)
  }
  Dialog.prepend();
  document.getElementById('main')
    .appendChild(Dialog);
}
function GetAction() {
  if (!Dialog) return;
}
// Reset Size Function
export function ResetSize() {
  const fn = (wh: string) => Number(getComputedStyle
    (Canvas).getPropertyValue(wh).slice(0, -2))
  Canvas.setAttribute('height', `${Y_MAX = fn('height')}`)
  Canvas.setAttribute('width', `${X_MAX = fn('width')}`)
}; export let Y_MAX = 0, X_MAX = 0
document.body.onresize = ResetSize;
