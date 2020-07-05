export * from './data/Statics'
export * from './data/Ground'
// Ground Refs
export let GroundMats = {
  1: {
    name: "Grass",
    hex: "#7ac74a"
  },
  2: {
    name: "Water",
    hex: "#4886e8",
    solid: true
  },
  3: {
    name: "Wooden Floor",
    hex: "#855E42"
  },
  4: {
    name: "Stone Floor",
    hex: "#888c8d"
  }
}
// Layer1 Refs
export let StaticMats = {
  1: {
    name: "Player",
    src: "lucy.png"
  },
  2: {
    name: "Barrel",
    src: "barrel.png"
  },
  3: {
    name: "Chicken",
    src: "chicken.png"
  },
  4: {
    name: "Door Closed",
    src: "door_closed.png"
  },
  5: {
    name: "Fence Horiz",
    src: "fence_x.png"
  },
  6: {
    name: "Fence Vert",
    src: "fence_y.png"
  },
  7: {
    name: "Fence LeftTop",
    src: "fence_lt.png"
  },
  8: {
    name: "Fence LeftBot",
    src: "fence_lb.png"
  },
  9: {
    name: "Fence RightBot",
    src: "fence_rb.png"
  },
  10: {
    name: "Fence RightTop",
    src: "fence_rt.png"
  }
}
// Loading Images For Statics
export var ImgRefs = {}
for(let Code in StaticMats) {
  var img = new Image();
  img.src = 'entity/' +
    StaticMats[Code].src;
  ImgRefs[StaticMats[Code].src] =
    StaticMats[Code].img = img
}
// Dynamic Entities
import {TalkingBarrel} from './entity/TalkingBarrel';
import {Chicken} from './entity/Chicken';
export let Dynamics = {
  "14,1": new Chicken(),
  "14,3": new Chicken(),
  "17,1": new Chicken(),
  "20,1": new Chicken(),
  "22,3": new TalkingBarrel()
}
// Player
import {PlayerStruct} from './entity/PlayerStruct';
export let Player = new PlayerStruct();
