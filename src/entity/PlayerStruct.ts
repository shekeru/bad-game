import {Print} from '../defs/event'
import * as Data from '../defs/store'
import {C_Entity} from '../items/Combat'
import * as Gear from '../items/Gear'
import {Stat} from '../items/Gear'
import * as Map from '../world'
import * as UI from '../user'

export class PlayerStruct extends C_Entity {
  X: number; Y: number
  constructor() {
    super("Player", "lucy.png");
    let store = Data.GetValue("player", {
      X: 22, Y: 4, alpha: 1
    }); Object.assign(this, store)
    // Init Stats
    this.SetStats({
      [Stat.VIT]: 2
    })
    this.AddGear(Gear.BastardSword)
    this.AddGear(Gear.LeatherGloves)
    this.AddGear(Gear.LeatherChest)
    this.AddGear(Gear.LeatherLegs)
    this.AddGear(Gear.LeatherBoots)
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
      Print("You can't fight, you're already dead.");
      return;
    } // Refresh HP
    this.RefreshHP(); Other.RefreshHP()
    // Combat Loop
    while(true) {
      if(this.HP > 0)
        this.SeqCombat(Other);
      else {
        Respawn.removeAttribute('hidden'); this.alpha = 0.4
        Print(Other.name, "wins with", Other.HP, 'hitpoints.');
        break;
      } if(Other.HP > 0)
        Other.SeqCombat(this);
      else {
        Other.EntityDeath()
        Print(this.name, "wins with", this.HP, 'hitpoints.');
        break;
      }
    }
  }
}
// Respawning
let Respawn = UI.html("respawn")
Respawn.onclick = () => {
  //Player.X = 22; Player.Y = 4;
  Map.Player.alpha = 1;
  Respawn.setAttribute("hidden", "")
}
