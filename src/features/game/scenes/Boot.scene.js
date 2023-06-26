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
    this.load.audio("audio.how-to-play", rawUrl("sounds/bg_music/how-to-play.mp3"));
    this.load.audio("audio.knucklebones", rawUrl("sounds/bg_music/knucklebones.mp3"));

    // Common
    this.load.image("image.button", rawUrl("images/common/button.png"));

    // Home
    this.load.image("image.bot-right", rawUrl("images/home/bot-right.gif"));
    this.load.image("image.top-left", rawUrl("images/home/top-left.gif"));
    this.load.image("image.fire-corner", rawUrl("images/home/fire-corner.gif"));

    this.load.image("image.dice-title", rawUrl("images/home/dice-title.png"));
    this.load.image("image.title", rawUrl("images/home/title.gif"));
    this.load.image("image.bone", rawUrl("images/home/bone.png"));
    this.load.image("image.description", rawUrl("images/home/description.gif"));

    // How to play
    this.load.image("image.how-to-play-title", rawUrl("images/how-to-play/how-to-play-title.png"));
    this.load.image("image.how-to-play", rawUrl("images/how-to-play/how-to-play.png"));
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
