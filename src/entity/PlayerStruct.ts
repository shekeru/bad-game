import { AddItem } from '../items/Inventory'
import {C_Entity, Item} from '../items/Combat'
import * as Gear from '../items/Item'
import {Stat, Equip} from '../items/Item'
import * as Data from '../globals'
import {Print} from '../globals'
import * as Map from '../world'

export class PlayerStruct extends C_Entity {
  X: number; Y: number
  constructor() {
    super("Player", "lucy.png");
    let store = Data.GetValue("player", {
      X: 22, Y: 4, alpha: 1
    }); Object.assign(this, store)
    setInterval(() => {
      let MaxHP = this.RefreshHP(1)
      if(this.HP < MaxHP)
        this.HP = Math.min(MaxHP,
          this.HP + this.Stats[Stat.VIT])
    }, 1000)
    // Init Stats
    this.SetStats({
      [Stat.VIT]: 2
    })
    // Init Gear
    let Saved = Data.GetValue('gear', {})
    for(let S in Saved) if(Saved[S])
      this.AddGear(Gear.Items[Saved[S]])
  }
  MoveSafely(a: number, b: number){
    let Pos = `${this.X +a},${this.Y +b}`
    let L0 = (Map.GroundMats[Map.Ground[Pos]]
      || {solid: true}).solid
    let L2 = (Map.Dynamics[Pos]
      || {solid: false}).solid
    if(L0 || Map.Statics[Pos] || L2)
      return
    Data.SetValue('player', {
      X: this.X += a,
      Y: this.Y += b
    })
  }
  StartCombat(Other: C_Entity) {
    if (this.alpha != 1) {
      Print("You can't fight, you're already dead");
      return;
    } // Combat Loop
    while(true) {
      if(this.HP > 0)
        this.SeqCombat(Other);
      else {
        //Respawn.removeAttribute('hidden');
        this.EntityDeath();
        Print(Other.name, "wins with", Other.HP, 'hitpoints');
        break;
      } if(Other.HP > 0)
        Other.SeqCombat(this);
      else {
        Other.EntityDeath()
        Print(this.name, "wins with", this.HP, 'hitpoints');
        break;
      }
    }
  }
  // Player Gear
  AddGear(Item: Item) {
    let Prev = this.Gear[Item.Slot]
    if(Prev != Gear.Nothing)
      this.DelGear(Prev.Slot)
    this.Gear[Item.Slot] = Item
    for(let Key in Item.Stats)
      this.Stats[Key] += Item.Stats[Key]
    Data.SetValue('gear', {
      [Item.Slot]: Item.Id
    })
  }
  DelGear(Slot: Equip) {
    let Item = this.Gear[Slot]
    this.Gear[Slot] = Gear.Nothing
    for(let Key in Item.Stats)
      this.Stats[Key] -= Item.Stats[Key]
    AddItem(Item, 1)
    Data.SetValue('gear', {
      [Slot]: 0
    })
  }
}
