import Phaser from "phaser";

class Cell extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, player) {
    super(scene, x, y, "image.cell");
    this.setOrigin(0.5, player === "you" ? 1 : 0);
  }
}

export default Cell;
