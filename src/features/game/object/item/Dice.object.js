import Phaser from "phaser";
import Holder from "../Holder.object";

class Dice extends Phaser.GameObjects.Sprite {
  constructor(scene, player) {
    const start = Holder.getRandomPointInHolder(scene, player, 50);
    super(scene, start.x, start.y, "image.dice", 0); // Start with the first face

    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.rollTime = 500; // Time in milliseconds for rolling animation
    this.rollTimer = null; // Timer for rolling animation
    this.isRolling = false; // Flag to check if dice is currently rolling
    this.faceValue = 1; // Current face value (initialized to 1)
    this.player = player; // Holder object reference

    this.setInteractive();
    this.on("pointerdown", this.roll, this);
  }

  roll() {
    if (this.isRolling) return;

    // Play roll sound
    this.scene.sound.play("sound.dice");

    // Start rolling animation
    this.rollTimer = this.scene.time.delayedCall(this.rollTime, this.movingRoll, [], this);
    this.isRolling = true;
  }

  movingRoll() {
    // Randomly select an ending point within the holder rect
    const end = Holder.getRandomPointInHolder(this.scene, this.player, 50);

    // Calculate the number of face changes during the movement
    const numFaceChanges = Phaser.Math.Between(4, 6);

    // Calculate the time interval between each face change
    const faceChangeInterval = this.rollTime / numFaceChanges;

    // Start moving and changing face
    this.scene.tweens.add({
      targets: this,
      x: end.x,
      y: end.y,
      duration: faceChangeInterval, // Adjust the duration based on the distance
      repeat: numFaceChanges - 1,
      onComplete: () => {
        this.isRolling = false;
      },
      onRepeat: () => {
        this.changeFace();
      },
    });
  }

  changeFace() {
    // Randomly select a face from the faces array
    const randomFace = Phaser.Math.Between(1, 6);

    // Update face value and set frame to the selected face
    this.setFrame(randomFace);
  }

  moveTo(verticalPosition) {
    const duration = 500; // Duration in milliseconds for the movement

    this.scene.tweens.add({
      targets: this,
      y: verticalPosition,
      duration,
      ease: Phaser.Math.Easing.Linear,
    });
  }

  destroy() {
    const shatterSoundKey = "sound.shatter";
    const shrinkDuration = 500; // Duration in milliseconds for the shrinking animation

    this.scene.sound.play(shatterSoundKey);

    this.scene.tweens.add({
      targets: this,
      scaleX: 0,
      scaleY: 0,
      duration: shrinkDuration,
      ease: Phaser.Math.Easing.Linear,
      onComplete: () => {
        this.scene.tweens.killTweensOf(this);
        this.destroy();
      },
    });
  }
}

export default Dice;
