function DispatchInput(){
  Factor = 3;
  if(Keys[87]) // w
    y0 -= Factor;
  if(Keys[65]) // a
    x0 -= Factor;
  if(Keys[83]) // s
    y0 += Factor;
  if(Keys[68]) // d
    x0 += Factor;
}
function NormOffset(val) {
  if (val >= 0)
    return -(val % 50) - 0;
  return -val % 50 - 50;
}
function ResetSize() {
  let fn = (wh) => Number(getComputedStyle(cvs)
    .getPropertyValue(wh).slice(0, -2));
  cvs.setAttribute('height', dpi * (c_h = fn('height')));
  cvs.setAttribute('width', dpi * (c_w = fn('width')));
}
let tSize = 50;
y0 = 0; x0 = 0;
function EventLoop() {
  ResetSize();
  DispatchInput();
  // Grid
  ctx.beginPath();
  for (y = NormOffset(y0); y <= c_h; y += tSize)
    for (x = NormOffset(x0); x <= c_w; x += tSize) {
      ctx.strokeRect(x, y, tSize, tSize);
      let xL = Math.floor(x / tSize) + Math.ceil(x0 / tSize);
      let yL = Math.floor(y / tSize) + Math.ceil(y0 / tSize);
      ctx.fillStyle = "white";
      // Map Fill
      try {
        let ColorType = Map1.data[yL][xL];
        let c = Map1.lookup[ColorType];
        ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
      } catch {
      }; ctx.fillRect(x, y, tSize, tSize);
      // Debug text
      ctx.strokeText(`${xL}, ${yL}`, x + 3, y+10);
  }
  ctx.stroke();
  // Continue
  requestAnimationFrame(EventLoop);
}
