import {C_Entity} from '../items/Combat'
import * as Item from '../items/Item'
import {Stat} from '../items/Item'
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
    this.AddGear(Item.BronzeSword)
    // this.AddGear(Item.LeatherGloves)
    this.AddGear(Item.LeatherChest)
    // this.AddGear(Item.LeatherLegs)
    // this.AddGear(Item.LeatherBoots)
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
        this.alpha = 0.4
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
}
