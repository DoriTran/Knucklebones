import Phaser from "phaser";
import { camera } from "utils";

class DiceTitle extends Phaser.GameObjects.Image {
  constructor(scene) {
    const imageKey = "image.dice-title";
    super(scene, camera(scene, "center.x"), camera(scene, "center.y", -150), imageKey);
    scene.add.existing(this);
  }
}

export default DiceTitle;
