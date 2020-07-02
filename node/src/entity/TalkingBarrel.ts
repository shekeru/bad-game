export class TalkingBarrel {
  name: string;
  src: string;
  // Init
  constructor() {
    this.name = "Talking Barrel"
    this.src = "barrel.png"
  }
  // Right Click Options
  Inspect(){
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
