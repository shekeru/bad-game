declare global {
  interface Window { Game: any; }
}; window.Game = {}
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
// Saving
export function GetValue(Name: string, Default: any) {
  return JSON.parse(localStorage.getItem(Name)) || Default
}

export function SetValue(Name: string, Value: any) {
  let Previous = GetValue(Name, {}); Object.assign(Previous, Value)
  return localStorage.setItem(Name, JSON.stringify(Previous))
}
