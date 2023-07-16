import Phaser from "phaser";
import { camera } from "utils";
import Dice from "../item/Dice.object";
import Column from "./Column.object";

const COLUMN_COUNT = 3;
const COLUMN_GAP = 25;

class Board extends Phaser.GameObjects.Container {
  constructor(scene, player) {
    super(scene, camera(scene, "center.x"), player === "you" ? camera(scene, "end.y") : 0);
    scene.add.existing(this);

    // Create the initial dice
    // this.dice = new Dice(scene, player); // Assuming you have the 'player' parameter
    // this.add(this.dice);

    // Create the columns
    let horizontalPosition = 0;
    this.columns = [];
    for (let i = 0; i < COLUMN_COUNT; i++) {
      const column = new Column(scene, horizontalPosition, this.y, player);
      horizontalPosition += this.column.displayWidth + COLUMN_GAP;
      this.columns.push(column);
      this.add(column);
    }

    // Pass the initial dice into a column
    // const randomColumn = Phaser.Math.Between(0, 2);
    // this.columns[randomColumn].addDice(this.dice);
    // this.dice = null; // Set the dice to null since it has been passed
  }

  createNewDice() {
    // Create a new dice and add it to the board
    const newDice = new Dice(this.scene, this.player); // Assuming you have the 'player' parameter
    this.add(newDice);

    // Pass the new dice into a column
    const randomColumn = Phaser.Math.Between(0, 2);
    this.columns[randomColumn].addDice(newDice);
  }
}

export default Board;
