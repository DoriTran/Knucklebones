import Phaser from "phaser";
import { camera } from "utils";

class FireCorner extends Phaser.GameObjects.Image {
  constructor(scene, corner) {
    const imageKey = "image.fire-corner";

    let { x, y } = { x: 0, y: 0 };
    switch (corner) {
      case "top-left":
        x = 0;
        y = 0;
        break;
      case "top-right":
        x = camera(scene, "end.x");
        y = 0;
        break;
      case "bot-left":
        x = 0;
        y = camera(scene, "end.y");
        break;
      case "bot-right":
        x = camera(scene, "end.x");
        y = camera(scene, "end.y");
        break;
      default:
        break;
    }

    super(scene, x, y, imageKey);
    scene.add.existing(this);

    switch (corner) {
      case "top-left":
        this.flipX = true;
        break;
      case "top-right":
        break;
      case "bot-left":
        this.flipX = true;
        this.flipY = true;
        break;
      case "bot-right":
        this.flipY = true;
        break;
      default:
        break;
    }
  }
}

export default FireCorner;
