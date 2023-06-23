import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    // Background music
    this.load.audio("how-to-play", "assets/sounds/bg_music/how-to-play.mp3");
    this.load.audio("knucklebones", "assets/sounds/bg_music/knucklebones.mp3");

    // Sound
    this.load.audio("choose", "assets/sounds/game/choose.mp3");
    this.load.audio("dice", "assets/sounds/game/dice.mp3");
    this.load.audio("drop", "assets/sounds/game/drop.mp3");
    this.load.audio("put", "assets/sounds/game/put.mp3");
    this.load.audio("put-multi", "assets/sounds/game/put-multi.mp3");
    this.load.audio("shatter", "assets/sounds/game/shatter.mp3");
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
