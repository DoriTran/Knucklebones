import Phaser from "phaser";
import { camera } from "utils";

class Description extends Phaser.GameObjects.Image {
  constructor(scene) {
    const imageKey = "image.description";
    super(scene, camera(scene, "center.x"), camera(scene, "center.y", 75), imageKey);
    scene.add.existing(this);
  }
}

export default Description;
