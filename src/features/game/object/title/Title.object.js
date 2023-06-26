import Phaser from "phaser";
import { camera } from "utils";

class Title extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const imageKey = "image.title";
    super(scene, camera(scene, "center.x"), camera(scene, "center.y", -75), imageKey);
    scene.add.existing(this);
    this.play("animation.title");
  }
}

export default Title;
