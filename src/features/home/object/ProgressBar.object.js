import Phaser from "phaser";

class ProgressBar extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, borderThickness, borderColor, fillColor) {
    super(scene, x, y, width, height, borderColor);
    scene.add.existing(this);

    // Store the width and border thickness as instance variables
    this.barWidth = width;
    this.borderThickness = borderThickness;

    this.fill = scene.add.rectangle(
      x - width / 2 + borderThickness,
      y,
      0,
      height - borderThickness * 2,
      fillColor
    );
  }

  updateProgress(value) {
    this.fill.width = value * (this.barWidth - this.borderThickness * 2);
  }
}

export default ProgressBar;
