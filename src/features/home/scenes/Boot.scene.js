import Phaser from "phaser";
import rawUrl from "utils/rawUrl";

class BootScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    // Background music
    this.load.audio("audio.how-to-play", rawUrl("sounds/bg_music/how-to-play.mp3"));
    this.load.audio("audio.knucklebones", rawUrl("sounds/bg_music/knucklebones.mp3"));

    // Sound
    this.load.audio("audio.choose", rawUrl("sounds/game/choose.mp3"));
    this.load.audio("audio.dice", rawUrl("sounds/game/dice.mp3"));
    this.load.audio("audio.drop", rawUrl("sounds/game/drop.mp3"));
    this.load.audio("audio.put", rawUrl("sounds/game/put.mp3"));
    this.load.audio("audio.put-multi", rawUrl("sounds/game/put-multi.mp3"));
    this.load.audio("audio.shatter", rawUrl("sounds/game/shatter.mp3"));

    // Common
    this.load.image("image.button", rawUrl("images/common/button.png"));

    // Home
    this.load.image("image.bone", rawUrl("images/home/bone.png"));
    this.load.image("image.dice-title", rawUrl("images/home/dictitle.png"));

    // How to play
    this.load.image("image.how-to-play-title", rawUrl("images/how-to-play/how-to-play-title.png"));
    this.load.image("image.how-to-play", rawUrl("images/how-to-play/how-to-play.png"));

    // Game
    this.load.image("image.left-off", rawUrl("images/game/board/left-off.png"));
    this.load.image("image.left-on", rawUrl("images/game/board/left-on.png"));
    this.load.image("image.right-off", rawUrl("images/game/board/right-off.png"));
    this.load.image("image.right-on", rawUrl("images/game/board/right-on.png"));

    this.load.image("image.cell", rawUrl("images/game/holder/cell.png"));
    this.load.image("image.fit-col", rawUrl("images/game/holder/fit-col.png"));
    this.load.image("image.full-col", rawUrl("images/game/holder/full-col.png"));

    this.load.image("image.1x1", rawUrl("images/game/dice/1x1.png"));
    this.load.image("image.1x2", rawUrl("images/game/dice/1x2.png"));
    this.load.image("image.1x3", rawUrl("images/game/dice/1x3.png"));
    this.load.image("image.1xd", rawUrl("images/game/dice/1xd.png"));
    this.load.image("image.2x1", rawUrl("images/game/dice/2x1.png"));
    this.load.image("image.2x2", rawUrl("images/game/dice/2x2.png"));
    this.load.image("image.2x3", rawUrl("images/game/dice/2x3.png"));
    this.load.image("image.2xd", rawUrl("images/game/dice/2xd.png"));
    this.load.image("image.3x1", rawUrl("images/game/dice/3x1.png"));
    this.load.image("image.3x2", rawUrl("images/game/dice/3x2.png"));
    this.load.image("image.3x3", rawUrl("images/game/dice/3x3.png"));
    this.load.image("image.3xd", rawUrl("images/game/dice/3xd.png"));
    this.load.image("image.4x1", rawUrl("images/game/dice/4x1.png"));
    this.load.image("image.4x2", rawUrl("images/game/dice/4x2.png"));
    this.load.image("image.4x3", rawUrl("images/game/dice/4x3.png"));
    this.load.image("image.4xd", rawUrl("images/game/dice/4xd.png"));
    this.load.image("image.5x1", rawUrl("images/game/dice/5x1.png"));
    this.load.image("image.5x2", rawUrl("images/game/dice/5x2.png"));
    this.load.image("image.5x3", rawUrl("images/game/dice/5x3.png"));
    this.load.image("image.5xd", rawUrl("images/game/dice/5xd.png"));
    this.load.image("image.6x1", rawUrl("images/game/dice/6x1.png"));
    this.load.image("image.6x2", rawUrl("images/game/dice/6x2.png"));
    this.load.image("image.6x3", rawUrl("images/game/dice/6x3.png"));
    this.load.image("image.6xd", rawUrl("images/game/dice/6xd.png"));

    this.load.image("image.pre-name", rawUrl("images/game/other/pre-name.png"));
  }

  create() {
    // Display the loading progress text
    this.loadingText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "Loading...",
      { font: "32px Arial", fill: "#ffffff" }
    );
    this.loadingText.setOrigin(0.5);

    // Update the loading progress
    this.load.on("progress", (value) => {
      this.loadingText.setText(`Loading: ${Math.round(value * 100)}%`);
    });

    // When all assets are loaded, start the next scene
    this.load.on("complete", () => {
      this.scene.start("NextScene");
    });

    // Start loading the assets
    this.load.start();
  }
}

export default BootScene;
