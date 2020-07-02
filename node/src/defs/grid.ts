import {OFFSET_X, OFFSET_Y, SIZE} from './input'
import {Canvas, Ctx} from '../main'
import * as Map from '../world'
let LastPos = {}
// Continue
export function World(Click) {
  ResetSize();
  // Mouse Clicks & Grid
  for (let y = NormOffset(OFFSET_Y); y <= Y_MAX; y += SIZE) {
    let ClickY = Click && y <= Click.y && Click.y < y + SIZE;
    for (let x = NormOffset(OFFSET_X); x <= X_MAX; x += SIZE) {
      Ctx.strokeRect(x, y, SIZE, SIZE);
      let xL = Math.floor(x / SIZE) + Math.ceil(OFFSET_X / SIZE);
      let yL = Math.floor(y / SIZE) + Math.ceil(OFFSET_Y / SIZE);
      Ctx.fillStyle = "white"; let position = `${xL},${yL}`;
      // Ground Fill
      try {
        Ctx.fillStyle = Map.GroundMats[Map.Ground[position]].hex;
      } catch {}; Ctx.fillRect(x, y, SIZE, SIZE);
      // Layer1 Fill
      try {
        Ctx.drawImage(Map.StaticMats
          [Map.Statics[position]].img, x, y);
      } catch {};
      // Render Player
      if(Map.Player.X == xL && Map.Player.Y == yL)
        Ctx.drawImage(Map.Player.ref.img, x, y);
      // Check click X
      let ClickX = x <= Click.x && Click.x < x + SIZE;
      Ctx.strokeText(`${xL}, ${yL}`, x + 3, y+10);
      if(ClickY && ClickX) {
        LastPos = [xL, yL, Map.Statics[position]];
        // Update in Tools
        // if (mats && !LastPos[0])
        //   UpdateColor(position);
        // if (ents && LastPos[0])
        //   UpdateObject(position);
      }
      if(LastPos[0] == xL && LastPos[1] == yL)
        Ctx.strokeText(LastPos[2] ?
          "Right Cl" : "Left Cl", x + 3, y+22);
    }
  }
}
// Normalize
function NormOffset(val: number) {
  if (val >= 0)
    return -val % SIZE - 0;
  return -val % SIZE - SIZE;
}
// Reset Size Function
function ResetSize() {
  const fn = (wh: string) => Number(getComputedStyle
    (Canvas).getPropertyValue(wh).slice(0, -2))
  Canvas.setAttribute('height', `${Y_MAX = fn('height')}`)
  Canvas.setAttribute('width', `${X_MAX = fn('width')}`)
}; let Y_MAX = 0, X_MAX = 0
