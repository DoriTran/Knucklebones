import Phaser from "phaser";
import { rawUrl, camera } from "utils";
import ProgressText from "../text/Progress.text";
import ProgressBar from "../object/common/ProgressBar.object";

class BootScene extends Phaser.Scene {
  constructor() {
    super("LoadingGame");
  }

  preload() {
    // Update & display the loading progress
    this.progressText = new ProgressText(
      this,
      camera(this, "center.x"),
      camera(this, "center.y", -35)
    );
    this.progressBar = new ProgressBar(
      this,
      camera(this, "center.x"),
      camera(this, "center.y", 35),
      400,
      30,
      5,
      0xffffff,
      0xff0302
    );
    this.load.on("progress", (value) => {
      this.progressText.update(value);
      this.progressBar.updateProgress(value);
    });

    // Background music
    this.load.audio("knucklebones", rawUrl("sounds/bg_music/knucklebones.mp3"));

    // Common
    this.load.image("button", rawUrl("images/common/button.png"));

    // Game
    this.load.spritesheet("dice", "path/to/dice_spritesheet.png", {
      frameWidth: 100,
      frameHeight: 100,
    });
  }

  create() {
    // When all assets are loaded, start the next scene
    this.load.on("complete", () => {
      this.progressText.complete();
      this.scene.start("Home");
    });

    // Start loading the assets
    this.load.start();
  }
}

export default BootScene;
