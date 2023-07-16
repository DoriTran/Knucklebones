import Phaser from "phaser";
import Board from "./Board.object";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    // Create a board for "you"
    this.myBoard = new Board(this, "you");

    // Create a board for "enemy"
    this.enemyBoard = new Board(this, "enemy");
  }
}

export default GameScene;
