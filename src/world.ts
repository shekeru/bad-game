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
    name: "Dirt Floor",
    hex: "#855E42"
  },
  4: {
    name: "Stone Floor",
    hex: "#888c8d"
  }
}
// Dynamic Entities
import { OakTree } from './entity/OakTree'
import {TalkingBarrel} from './entity/TalkingBarrel';
import {Chicken} from './entity/Chicken';
import {Cow} from './entity/Cow';
// Layer1 Refs
export let StaticMats = {
  1: {
    name: "Player",
    src: "lucy.png"
  },
  2: {
    name: "Barrel",
    src: "barrel.png",
    Object: TalkingBarrel,
  },
  3: {
    name: "Chicken",
    src: "chicken.png",
    Object: Chicken,
  },
  4: {
    name: "Cow",
    src: "cow.png"
    Object: Cow,
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
  },
  11: {
    name: "Door Closed",
    src: "door_closed.png"
  },
  12: {
    name: "Door Open",
    src: "door_open.png"
  },
  13: {
    name: "Oak Tree",
    src: "trees/oak.png",
    Object: OakTree,
  },
  14: {
    name: "Willow Tree",
    src: "trees/willow.png"
  },
  15: {
    name: "Maple Tree",
    src: "trees/maple.png"
  },
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
export let Dynamics = {}
// Add Static Ents to Dynamics
import { Statics } from './data/Statics'
for(let Key in Statics) {
  let Ent = StaticMats[Statics[Key]]
  if(Ent.Object) {
    Dynamics[Key] = new
      Ent.Object(Ent.name, Ent.src)
    delete Statics[Key]
  }
}
// Player
import {PlayerStruct} from './entity/PlayerStruct';
export let Player = new PlayerStruct();
