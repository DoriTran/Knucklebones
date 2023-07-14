import Phaser from "phaser";
import { camera } from "utils";

class Holder extends Phaser.GameObjects.Sprite {
  constructor(scene, player) {
    const spriteSheetKey = `sheet.holder-${player}`;
    const x = Holder.calculateXPosition(scene, player);
    const y = Holder.calculateYPosition(scene, player);

    super(scene, x, y, spriteSheetKey, 0);

    scene.add.existing(this);

    this.isOn = false; // Flag to indicate if the holder is on or off
    this.setOrigin(0.5, 0.5);
  }

  // Actions
  toggle() {
    this.isOn = !this.isOn;

    // Set frame based on the on/off state
    const frameIndex = this.isOn ? 1 : 0;
    this.setFrame(frameIndex);
  }

  static calculateXPosition(scene, player) {
    if (player === "enemy") return camera(scene, "end.x", -20 - 200);
    return camera(scene, "start.x", 20 + 200);
  }

  static calculateYPosition(scene, player) {
    if (player === "enemy") return camera(scene, "start.y", 20 + 125);
    return camera(scene, "end.x", -20 - 125);
  }

  // Infos
  static getRandomPointInHolder(scene, player, offset) {
    const x = Holder.calculateXPosition(scene, player) + offset;
    const y = Holder.calculateYPosition(scene, player) + offset;
    const width = 400 - offset * 2;
    const height = 250 - offset * 2;

    return new Phaser.Geom.Point(
      Phaser.Math.Between(x, x + width),
      Phaser.Math.Between(y, y + height)
    );
  }
}

export default Holder;
