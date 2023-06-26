import Phaser from "phaser";
import { camera } from "utils";

class FireEyeBotRight extends Phaser.GameObjects.Image {
  constructor(scene) {
    super(scene, camera(scene, "end.x"), camera(scene, "end.y"), "image.bot-right");
    scene.add.existing(this);
  }
}

export default FireEyeBotRight;
