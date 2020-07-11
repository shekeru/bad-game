import {Print} from '../globals'
import { PromptOptions } from '../defs/input';
import {C_Entity, Stat} from '../items/Combat'
import {Player} from '../world'

export class TalkingBarrel extends C_Entity {
  constructor(name, src) {
    super(name, src)
    this.SetStats({
      [Stat.VIT]: 99,
      [Stat.DEX]: 99,
      [Stat.STR]: 99
    })
  }
  // Right Click Options
  Context(){
    return {
      "Talk to Barrel":
        this.Converse,
      "Open Barrel (Combat)":
        () => {
          Print("Trying to open the Barrel, you find yourself in Combat")
          Player.StartCombat(this)
      },
      "Examine Barrel":
        this.Examine
    }
  }
  Examine(){
    Print("There's someone in the barrel.");
  }
  Converse() {
    PromptOptions({
      "Hello?":
        () => Print("<Barrel>", "Hello my servant.")
    })
  }
}
