import {ImgRefs} from '../world'

export class TalkingBarrel {
  solid: boolean
  name: string
  img: any
  // Init
  constructor() {
    this.name = "Talking Barrel"
    this.img = ImgRefs['barrel.png']
    this.solid = true
  }
  // Right Click Options
  Context(){
    return {
      "Talk to Barrel":
        this.Converse,
      "Examine Barrel":
        this.Examine
    }
  }
  Examine(){
    console.log("There's someone in the barrel.");
  }
  Converse() {

  }
}
