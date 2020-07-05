// Globals
export const Canvas = <HTMLCanvasElement>
  document.getElementById("canvas")
export const Ctx = Canvas.getContext('2d')
// Utility Functions
export let html = (idx) =>
  document.getElementById(idx)
export function elem(name, append?) : HTMLElement{
  let el = document.createElement(name)
  if(append) append.appendChild(el);
  return el;
}
// Printing Console
export let LogQueue = []
export function Print(...Args){
  LogQueue.push([Args.join(' ')])
  if (LogQueue.length > 10)
    LogQueue.shift()
}
