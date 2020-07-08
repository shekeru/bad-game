import {OFFSET_X, OFFSET_Y, SIZE} from './input'
import { UpdateColor } from '../ui/Ground'
import {UpdateObject} from './tools'
import { Ctx } from '../globals'
import * as Map from '../world'
import * as Input from './input'
let LastPos = {}
// Continue
export function DrawWorld(Click) {
  Input.UpdateCamera();
  // Mouse Clicks & Grid
  for (let y = NormOffset(OFFSET_Y); y <= Input.Y_MAX; y += SIZE) {
    let ClickY = Click && y <= Click.y && Click.y < y + SIZE;
    for (let x = NormOffset(OFFSET_X); x <= Input.X_MAX; x += SIZE) {
      Ctx.strokeStyle = "#444"; Ctx.strokeRect(x, y, SIZE, SIZE);
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
          [Map.Statics[position]].img, x, y)
      } catch {}
      // Render Dynamics
      try {
        Ctx.globalAlpha = Map.Dynamics[position].alpha
        Ctx.drawImage(Map.Dynamics[position].img, x, y)
        Ctx.globalAlpha = 1
      } catch {}
      // Render Player
      if(Map.Player.X == xL && Map.Player.Y == yL) {
        Ctx.globalAlpha = Map.Player.alpha
        Ctx.drawImage(Map.Player.img, x, y)
        Ctx.globalAlpha = 1
      }
      // Check click X
      let ClickX = x <= Click.x && Click.x < x + SIZE;
      //Ctx.strokeText(`${xL}, ${yL}`, x + 3, y+10);
      if(ClickY && ClickX) {
        LastPos = [Click.button, xL, yL];
        // Update in Tools
        LastPos[0] ?
          UpdateObject(position)
          :UpdateColor(position)
        // Input Testing
        let Dyn = Map.Dynamics[position]
        if(LastPos[0] && Dyn && Dyn.alpha == 1
          && Math.abs(Map.Player.X - xL) <= 1
          && Math.abs(Map.Player.Y - yL) <= 1)
          Input.PromptOptions(Dyn.Context(), Click)
      }
      // if(LastPos[1] == xL && LastPos[2] == yL)
      //   Ctx.strokeText(LastPos[0] ?
      //     "Right Cl" : "Left Cl", x + 3, y+22);
    }
  }
}
// Normalize
function NormOffset(val: number) {
  if (val >= 0)
    return -val % SIZE - 0;
  return -val % SIZE - SIZE;
}
