import Phaser from "phaser";

class ProgressText extends Phaser.GameObjects.Text {
  constructor(scene, x, y) {
    super(scene, x, y, "Loading...", { font: "32px Arial", fill: "#fff" });
    scene.add.existing(this);
    this.setOrigin(0.5);
  }

  update(value) {
    this.setText(`Loading: ${Math.round(value * 100)}%`);
  }

  complete() {
    this.setText("Loading complete!");
  }
}

export default ProgressText;
