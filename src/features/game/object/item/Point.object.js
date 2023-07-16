import Phaser from "phaser";

class Point extends Phaser.GameObjects.Text {
  constructor(scene, x, y, player) {
    super(scene, x, y, "0", { fontFamily: "Comic Neue", fontSize: 24 });
    this.setOrigin(0.5, player === "you" ? 1 : 0);
    this.updatePoint(0);
  }

  updatePoint(value) {
    this.setText(value.toString());
    this.setVisible(value !== 0);
  }
}

export default Point;
