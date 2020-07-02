import {Player} from '../world'
import {Tick} from './event'
export let SIZE = 50,
  OFFSET_X = 0 * SIZE,
  OFFSET_Y = 0 * SIZE;
export var Keys = {},
  Clicks = []
// DispatchInput
export function Dispatch(LastTick){
  let Factor = 5;
  if(Keys["KeyW"]) // w
    OFFSET_Y -= Factor;
  if(Keys["KeyA"]) // a
    OFFSET_X -= Factor;
  if(Keys["KeyS"]) // s
    OFFSET_Y += Factor;
  if(Keys["KeyD"]) // d
    OFFSET_X += Factor;
  if(Tick > LastTick) {
    // PlayerCtl
    if(Keys["ArrowUp"])
      Player.MoveSafely(0, -1)
    if(Keys["ArrowLeft"])
      Player.MoveSafely(-1, 0)
    if(Keys["ArrowDown"])
      Player.MoveSafely(0, 1)
    if(Keys["ArrowRight"])
      Player.MoveSafely(1, 0)
  }
}
