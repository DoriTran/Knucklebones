class Name extends Phaser.GameObjects.Container {
  constructor(scene, x, y, name) {
    super(scene, x, y);

    scene.add.existing(this);

    const preNameLeft = scene.add.image(0, 0, "image.pre-name");
    const nameText = scene.add.text(0, 0, name, { fontSize: "24px", fill: "#ffffff" });
    const preNameRight = scene.add.image(0, 0, "image.pre-name").setFlipX(true);

    this.add(preNameLeft);
    this.add(nameText);
    this.add(preNameRight);
  }
}
