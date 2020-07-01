Clicks = [];
Keys = Object();
// DispatchInput
function DispatchInput(LastTick){
  Factor = 5;
  if(Keys["KeyW"]) // w
    y0 -= Factor;
  if(Keys["KeyA"]) // a
    x0 -= Factor;
  if(Keys["KeyS"]) // s
    y0 += Factor;
  if(Keys["KeyD"]) // d
    x0 += Factor;
  if(Tick > LastTick) {
    // PlayerCtl
    if(Keys["ArrowUp"])
      Player[1] -= 1;
    if(Keys["ArrowLeft"])
      Player[0] -= 1;
    if(Keys["ArrowDown"])
      Player[1] += 1;
    if(Keys["ArrowRight"])
      Player[0] += 1;
    // Check Collision
    if(Layer1.data[Player] || (Layer0.refs
      [Layer0.data[Player]] || {solid: true}).solid) {
        Player = [...PrevPlayer];
      } else PrevPlayer = [...Player];
  }
}
