import Phaser from "phaser";

class FireEyeTopLeft extends Phaser.GameObjects.Image {
  constructor(scene) {
    super(scene, 0, 0, "image.top-left");
    scene.add.existing(this);
  }
}
export default FireEyeTopLeft;
