let tSize = 50;
x0 = 0 * tSize;
y0 = 0 * tSize;
// Normalize
function NormOffset(val) {
  if (val >= 0)
    return -val % tSize - 0;
  return -val % tSize - tSize;
}
// Continue
function ResetSize() {
  const fn = (wh) => Number(getComputedStyle(cvs)
    .getPropertyValue(wh).slice(0, -2));
  cvs.setAttribute('height', dpi * (c_h = fn('height')));
  cvs.setAttribute('width', dpi * (c_w = fn('width')));
}
Last = {};
LastPos = {};
function DrawGrid() {
  ctx.beginPath();
  // Mosue Clicks
  Last = Clicks.shift() || {};
  // Mouse Clicks & Grid
  for (y = NormOffset(y0); y <= c_h; y += tSize) {
    let chY = Last && y <= Last.y && Last.y < y + tSize;
    for (x = NormOffset(x0); x <= c_w; x += tSize) {
      ctx.strokeRect(x, y, tSize, tSize);
      let xL = Math.floor(x / tSize) + Math.ceil(x0 / tSize);
      let yL = Math.floor(y / tSize) + Math.ceil(y0 / tSize);
      ctx.fillStyle = "white";
      // Map Fill
      try {
        let Code = Layer0.data[`${yL},${xL}`];
        ctx.fillStyle = Layer0.refs[Code].hex;
      } catch {
      }; ctx.fillRect(x, y, tSize, tSize);
      // Check click X
      let chX = x <= Last.x && Last.x < x + tSize;
      ctx.strokeText(`${xL}, ${yL}`, x + 3, y+10);
      if(chY && chX)
        LastPos = [Last.button, xL, yL];
      if(LastPos[1] == xL && LastPos[2] == yL)
        ctx.strokeText(LastPos[0] ?
          "Right Cl" : "Left Cl", x + 3, y+22);
    }
  }; ctx.stroke();
}
