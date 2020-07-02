class TalkingBarrel {
  constructor() {
    this.name = "Talking Barrel"
    this.src = "barrel.png"
  }
  contexts(){
    return {
      "Talk to Barrel":
        this.converse,
      "Examine Barrel":
        this.examine
    }
  }
  examine(){
    console.log("There's someone in the barrel.");
  }
}
