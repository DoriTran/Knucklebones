import Phaser from "phaser";
import { rawUrl, camera } from "utils";
import ProgressText from "../text/Progress.text";
import ProgressBar from "../object/boot/ProgressBar.object";

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
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
    this.load.audio("sound.knucklebones", rawUrl("sounds/bg_music/knucklebones.mp3"));

    // Common
    this.load.image("image.button", rawUrl("images/common/button.png"));

    // Game images
    this.load.spritesheet("image.dice", rawUrl("images/game/dice/dice.png"), {
      frameWidth: 100,
      frameHeight: 100,
    });

    this.load.image("image.cell", rawUrl("images/game/board/cell.pmg"));
    this.load.image("image.fit-col", rawUrl("images/game/board/fit-col.png"));
    this.load.image("image.full-col", rawUrl("images/game/board/full-col.png"));

    this.load.spritesheet("sheet.holder-you", rawUrl("images/game/holder/you.png"), {
      frameWidth: 400,
      frameHeight: 250,
    });
    this.load.spritesheet("sheet.holder-enemy", rawUrl("images/game/holder/enemy.png"), {
      frameWidth: 400,
      frameHeight: 250,
    });

    this.load.image("image.pre-name", rawUrl("image/game/other/pre-name.png"));

    // Game sounds
    this.load.audio("sound.choose", rawUrl("sounds/game/choose.mp3"));
    this.load.audio("sound.dice", rawUrl("sounds/game/dice.mp3"));
    this.load.audio("sound.drop", rawUrl("sounds/game/drop.mp3"));
    this.load.audio("sound.put-multi", rawUrl("sounds/game/put-multi.mp3"));
    this.load.audio("sound.put", rawUrl("sounds/game/put.mp3"));
    this.load.audio("sound.shatter", rawUrl("sounds/game/shatter.mp3"));
  }

  create() {
    // When all assets are loaded, start the next scene
    this.load.on("complete", () => {
      this.progressText.complete();
      this.scene.start("GameScene");
    });

    // Start loading the assets
    this.load.start();
  }
}

export default BootScene;
