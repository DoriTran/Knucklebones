import Phaser from "phaser";

class HomeScene extends Phaser.Scene {
  constructor() {
    super("Home");
  }

  create() {
    // Play the audio
    const knucklebonesAudio = this.sound.add("audio.knucklebones");
    knucklebonesAudio.play();

    // Rest of your scene code
    // ...
  }
}

export default HomeScene;
