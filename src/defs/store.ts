export function GetValue(Name: string, Default: any) {
  return JSON.parse(localStorage.getItem(Name)) || Default
}

export function SetValue(Name: string, Value: any) {
  let Previous = GetValue(Name, {}); Object.assign(Previous, Value)
  return localStorage.setItem(Name, JSON.stringify(Previous))
}
