import Phaser from "phaser";
import { camera } from "utils";

class Bone extends Phaser.GameObjects.Image {
  constructor(scene) {
    const imageKey = "image.bone";
    super(scene, camera(scene, "center.x"), camera(scene, "center.y"), imageKey);
    scene.add.existing(this);
  }
}

export default Bone;
