Clicks = [];
Keys = Object();
// DispatchInput
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
// Event Loop
function EventLoop() {
  ResetSize();
  DispatchInput();
  DrawGrid();
  // Continue
  requestAnimationFrame(EventLoop);
}
